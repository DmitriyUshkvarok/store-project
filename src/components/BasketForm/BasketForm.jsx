'use client';
import React, { useRef } from 'react';
import {
  StyleOrderForm,
  FormWrapper,
  OrderFormTitle,
  OrderFormSubTitle,
  OrderFormGroup,
  OrderFormLabel,
  OrderStyleField,
  ValidationError,
  OrderBtn,
} from './BasketForm.styled';
import { Formik, ErrorMessage } from 'formik';
import orderSchema from '@/src/validationSchema/orderFormSchema';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useSelector, useDispatch } from 'react-redux';
import { useCreateOrdersMutation } from '@/src/redux/ordersApi/ordersApi';
import {
  updateTotalPrice,
  removeAllFromCart,
} from '@/src/redux/cart/cartSlise';
import { clearAllQuantities } from '@/src/redux/orderQantity/quantitySlice';
import CryptoJS from 'crypto-js';

const initialValues = {
  name: '',
  // email: '',
  // address: '',
  phone: '',
};

const OrderFom = ({ setOrderSuccess }) => {
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector.getIsItems);
  const totalPrice = useSelector(cartSelector.geTotalPrice);
  const quantity = useSelector((state) => state.quantity);
  const [createOrders, { isLoading, isError, isSuccess }] =
    useCreateOrdersMutation();

  /** ================= WAY FOR PAY (DON'T TOUCH) ==============START */

  //** ВИНЕСТИ В ENV */
  const SECRET_KEY = 'flk3409refn54t54t*FNJRET';

  const data = {
    merchantAccount: 'test_merch_n1',
    merchantDomainName: 'www.market.ua',
    orderReference: 'DH16923556fddf',
    orderDate: '1415379863',
    amount: '1547.36',
    currency: 'UAH',
    orderTimeout: '49000',
    productName: ['Процессор Intel Core i9-4670 3.4GHz', 'Память'],
    productPrice: ['100', '547.36'],
    productCount: ['1', '1'],
    clientFirstName: 'Вася',
    clientLastName: 'Пупкин',
    clientAddress: 'пр. Гагарина, 12',
    clientCity: 'Днепропетровск',
    clientEmail: 'some@mail.com',
    defaultPaymentSystem: 'card',
  };

  const replaceNewlines = (text) => text.replace(/\n/g, ' ');
  const productNameString = data.productName.map(replaceNewlines).join(';');
  const productCountString = data.productCount.join(';');
  const productPriceString = data.productPrice.join(';');
  const stringForHash = `${data.merchantAccount};${data.merchantDomainName};${data.orderReference};${data.orderDate};${data.amount};${data.currency};${productNameString};${productCountString};${productPriceString}`;
  const hashed_value = CryptoJS.HmacMD5(stringForHash, SECRET_KEY).toString(
    CryptoJS.enc.Hex
  );
  data['merchantSignature'] = hashed_value;

  const formRef = useRef(null);

  const handleSubmitPay = (event) => {
    event.preventDefault();
    formRef.current.submit();
  };

  /** =================== WAY FOR PAY (DON'T TOUCH) =================END */

  const handleSubmit = async (values, { resetForm }) => {
    const formDataAndOrder = {
      buyer: values,
      products: cartItems.map((item) => ({
        date: item.data,
        productId: item.id,
        price: item.price,
        name: item.title,
        brand: item.brand,
        color: item.color,
      })),
      quantity: Object.keys(quantity)
        .filter((key) => !key.startsWith('_'))
        .map((productId) => ({
          productId,
          productQuantity: quantity[productId],
        })),
      totalPrice: totalPrice,
    };

    try {
      const response = await createOrders(formDataAndOrder);

      if (response.error) {
        console.error('Ошибка при создании заказа:', response.error);
      } else {
        dispatch(updateTotalPrice(0));
        dispatch(removeAllFromCart());
        dispatch(clearAllQuantities());

        resetForm();
        setOrderSuccess(true);
      }
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
      >
        <StyleOrderForm>
          <FormWrapper>
            <OrderFormTitle>Оформлення замовлення</OrderFormTitle>
            <OrderFormSubTitle>Контактні дані:</OrderFormSubTitle>
            <OrderFormGroup>
              {/* <OrderFormLabel htmlFor="order-name">Ім&#39;я:</OrderFormLabel> */}
              <OrderStyleField
                type="text"
                name="name"
                placeholder="Ім&#39;я"
                id="order-name"
              />
              <ErrorMessage name="name">
                {(msg) => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
            </OrderFormGroup>
            {/* <OrderFormGroup>
              <OrderFormLabel htmlFor="order-email">
                Електронна адреса:
              </OrderFormLabel>
              <OrderStyleField
                type="email"
                name="email"
                placeholder="Електронна адреса"
                id="order-email"
              />
              <ErrorMessage name="email">
                {(msg) => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
            </OrderFormGroup> */}
            {/* <OrderFormGroup>
              <OrderFormLabel htmlFor="order-adress">Адреса:</OrderFormLabel>
              <OrderStyleField
                name="address"
                placeholder="Адреса:"
                id="order-adress"
              />
              <ErrorMessage name="address">
                {(msg) => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
            </OrderFormGroup> */}
            <OrderFormGroup>
              {/* <OrderFormLabel htmlFor="order-phone">Телефон:</OrderFormLabel> */}
              <OrderStyleField
                name="phone"
                placeholder="Телефон:"
                id="order-passsword"
              />
              <ErrorMessage name="phone">
                {(msg) => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
            </OrderFormGroup>
            <div>
              <form
                ref={formRef}
                method="post"
                action="https://secure.wayforpay.com/pay"
                acceptCharset="UTF-8"
              >
                <input
                  type="hidden"
                  name="merchantAccount"
                  defaultValue={data.merchantAccount}
                />
                <input
                  type="hidden"
                  name="merchantDomainName"
                  defaultValue={data.merchantDomainName}
                />
                <input
                  type="hidden"
                  name="orderReference"
                  defaultValue={data.orderReference}
                />
                <input
                  type="hidden"
                  name="orderDate"
                  defaultValue={data.orderDate}
                />
                <input type="hidden" name="amount" defaultValue={data.amount} />
                <input
                  type="hidden"
                  name="currency"
                  defaultValue={data.currency}
                />
                <input
                  type="hidden"
                  name="orderTimeout"
                  defaultValue={data.orderTimeout}
                />
                <input
                  type="hidden"
                  name="productName[]"
                  defaultValue={data.productName[0]}
                />
                <input
                  type="hidden"
                  name="productName[]"
                  defaultValue={data.productName[1]}
                />
                <input
                  type="hidden"
                  name="productPrice[]"
                  defaultValue={data.productPrice[0]}
                />
                <input
                  type="hidden"
                  name="productPrice[]"
                  defaultValue={data.productPrice[1]}
                />
                <input
                  type="hidden"
                  name="productCount[]"
                  defaultValue={data.productCount[0]}
                />
                <input
                  type="hidden"
                  name="productCount[]"
                  defaultValue={data.productCount[1]}
                />
                <input
                  type="hidden"
                  name="clientFirstName"
                  defaultValue={data.clientFirstName}
                />
                <input
                  type="hidden"
                  name="clientLastName"
                  defaultValue={data.clientLastName}
                />
                <input
                  type="hidden"
                  name="clientAddress"
                  defaultValue={data.clientAddress}
                />
                <input
                  type="hidden"
                  name="clientCity"
                  defaultValue={data.clientCity}
                />
                <input
                  type="hidden"
                  name="clientEmail"
                  defaultValue={data.clientEmail}
                />
                <input
                  type="hidden"
                  name="defaultPaymentSystem"
                  defaultValue={data.defaultPaymentSystem}
                />
                <input
                  type="hidden"
                  name="merchantSignature"
                  defaultValue={hashed_value}
                />
              </form>
              {/* Перенесена кнопка поза форму */}
              <input type="button" value="Test" onClick={handleSubmitPay} />
            </div>
            <OrderBtn type="submit">
              {isLoading ? 'Зачекайте...' : 'Підтвердити замовлення'}
            </OrderBtn>
          </FormWrapper>
        </StyleOrderForm>
      </Formik>
    </>
  );
};
export default OrderFom;

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
import { useState } from 'react';
import { useEffect } from 'react';

const initialValues = {
  name: '',
  // email: '',
  // address: '',
  phone: '',
};

const OrderFom = ({ setOrderSuccess }) => {
  // console.log(`values-----------`, values);
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector.getIsItems);
  const totalPrice = useSelector(cartSelector.geTotalPrice);
  const totalPriceString = totalPrice.toString();
  const quantity = useSelector((state) => state.quantity);
  const [createOrders, { isLoading, isError, isSuccess }] =
    useCreateOrdersMutation();
  // console.log(`quantity=====>>>>>>>>>>>>>>>>>>>>`, quantity);
  /** START============== WAY FOR PAY (DON'T TOUCH) ==============START */

  /** ВИНЕСТИ В ENV */
  const SECRET_KEY = 'flk3409refn54t54t*FNJRET';

  const productName = [];
  const productPrice = [];
  const productCount = [];

  for (const obj of cartItems) {
    productName.push(obj.title);
    productPrice.push(obj.price.toString());
    productCount.push(quantity[obj.id].toString());
  }
  // console.log(`totalPric11111111111=====>`, totalPrice.toString());

  const data = {
    merchantAccount: 'test_merch_n1',
    merchantDomainName: 'www.market.ua',
    orderReference: 'DHddww000ssfffdwwpv2ssss33411556333',
    orderDate: Math.floor(Date.now() / 1000).toString(),
    amount: totalPriceString,
    currency: 'UAH',
    orderTimeout: '49000',
    productName: productName,
    productPrice: productPrice,
    productCount: productCount,
  };
  typeof myVariable === 'object';
  console.log(`+++++++++++++++++++`, data);

  const replaceNewlines = (text) => text.replace(/\n/g, ' ');
  const productNameString = data.productName.map(replaceNewlines).join(';');
  const productCountString = data.productCount.join(';');
  const productPriceString = data.productPrice.join(';');
  const stringForHash = `${data.merchantAccount};${data.merchantDomainName};${data.orderReference};${data.orderDate};${data.amount};${data.currency};${productNameString};${productCountString};${productPriceString}`;
  const hashed_value = CryptoJS.HmacMD5(stringForHash, SECRET_KEY).toString(
    CryptoJS.enc.Hex
  );
  const formRef = useRef(null);

  console.log(`hashed_value===============>`, hashed_value);
  /** END=================== WAY FOR PAY (DON'T TOUCH) =================END */

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

    /** START============== WAY FOR PAY (DON'T TOUCH) ==============START */

    data['merchantSignature'] = hashed_value;
    // data.amount = totalPrice.toString();
    formRef.current.submit();
    /** END=================== WAY FOR PAY (DON'T TOUCH) =================END */

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
    console.log(`totalPrice===============>`, totalPrice);
    console.log(`hashed_value===============>`, hashed_value);
  };

  return (
    <>
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
            value={data.merchantAccount}
            onChange={() => console.log('say')}
          />
          <input
            type="hidden"
            name="merchantDomainName"
            value={data.merchantDomainName}
            onChange={() => console.log('say')}
          />
          <input
            type="hidden"
            name="orderReference"
            value={data.orderReference}
            onChange={() => console.log('say')}
          />
          <input
            type="hidden"
            name="orderDate"
            value={data.orderDate}
            onChange={() => console.log('say')}
          />
          <input
            name="amount"
            value={data.amount}
            onChange={() => console.log('say')}
          />
          <input
            type="hidden"
            name="currency"
            value={data.currency}
            onChange={() => console.log('say')}
          />
          <input
            type="hidden"
            name="orderTimeout"
            value={data.orderTimeout}
            onChange={() => console.log('say')}
          />
          <input
            type="hidden"
            name="productName[]"
            value={data.productName[0]}
            onChange={() => console.log('say')}
          />
          {/* <input
            type="hidden"
            name="productName[]"
            defaultValue={data.productName[1]}
          /> */}
          <input
            type="hidden"
            name="productPrice[]"
            value={data.productPrice[0]}
            onChange={() => console.log('say')}
          />
          {/* <input
            type="hidden"
            name="productPrice[]"
            defaultValue={data.productPrice[1]}
          /> */}
          <input
            type="hidden"
            name="productCount[]"
            value={data.productCount[0]}
            onChange={() => console.log('say')}
          />
          {/* <input
            type="hidden"
            name="productCount[]"
            defaultValue={data.productCount[1]}
          /> */}
          <input
            type="hidden"
            name="clientFirstName"
            value={data.clientFirstName}
            onChange={() => console.log('say')}
          />
          <input
            type="hidden"
            name="clientLastName"
            value={data.clientLastName}
            onChange={() => console.log('say')}
          />
          <input
            name="merchantSignature"
            value={hashed_value}
            onChange={() => console.log('say')}
          />
        </form>
        {/* <input type="button" value="Test" onClick={handleSubmitPay} /> */}
      </div>
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

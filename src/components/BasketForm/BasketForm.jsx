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
const uuid = require('uuid');

const initialValues = {
  name: '',
  // email: '',
  // address: '',
  phone: '',
};

const OrderFom = ({ setOrderSuccess }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector.getIsItems);
  const totalPrice = useSelector(cartSelector.geTotalPrice);
  const totalPriceString = totalPrice.toString();
  const quantity = useSelector((state) => state.quantity);
  const [createOrders, { isLoading, isError, isSuccess }] =
    useCreateOrdersMutation();

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

  const data = {
    merchantAccount: 'test_merch_n1',
    merchantDomainName: 'www.market.ua',
    orderReference: uuid.v4(),
    orderDate: Math.floor(Date.now() / 1000).toString(),
    amount: totalPriceString,
    currency: 'UAH',
    orderTimeout: '49000',
    productName: productName,
    productPrice: productPrice,
    productCount: productCount,
  };

  const replaceNewlines = (text) => text.replace(/\n/g, ' ');
  const productNameString = data.productName.map(replaceNewlines).join(';');
  const productCountString = data.productCount.join(';');
  const productPriceString = data.productPrice.join(';');
  const stringForHash = `${data.merchantAccount};${data.merchantDomainName};${data.orderReference};${data.orderDate};${data.amount};${data.currency};${productNameString};${productCountString};${productPriceString}`;
  const hashed_value = CryptoJS.HmacMD5(stringForHash, SECRET_KEY).toString(
    CryptoJS.enc.Hex
  );
  const formRef = useRef(null);
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

    try {
      const response = await createOrders(formDataAndOrder);

      if (response.error) {
        console.error('Ошибка при создании заказа:', response.error);
      } else {
        dispatch(updateTotalPrice(0));
        dispatch(removeAllFromCart());
        dispatch(clearAllQuantities());

        /** START============== WAY FOR PAY (DON'T TOUCH) ==============START */

        data['merchantSignature'] = hashed_value;
        formRef.current.submit();
        /** END=================== WAY FOR PAY (DON'T TOUCH) =================END */

        resetForm();
        setOrderSuccess(true);
      }
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
    }
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
            onChange={() => {}}
          />
          <input
            type="hidden"
            name="merchantDomainName"
            value={data.merchantDomainName}
            onChange={() => {}}
          />
          <input
            type="hidden"
            name="orderReference"
            value={data.orderReference}
            onChange={() => {}}
          />
          <input
            type="hidden"
            name="orderDate"
            value={data.orderDate}
            onChange={() => {}}
          />
          <input
            type="hidden"
            name="amount"
            value={data.amount}
            onChange={() => {}}
          />
          <input
            type="hidden"
            name="currency"
            value={data.currency}
            onChange={() => {}}
          />
          <input
            type="hidden"
            name="orderTimeout"
            value={data.orderTimeout}
            onChange={() => {}}
          />
          {data.productName.map((name, index) => (
            <input
              key={`productName_${index}`}
              type="hidden"
              name="productName[]"
              value={name}
              onChange={() => {}}
            />
          ))}

          {data.productPrice.map((price, index) => (
            <input
              key={`productPrice_${index}`}
              type="hidden"
              name="productPrice[]"
              value={price}
              onChange={() => {}}
            />
          ))}

          {data.productCount.map((count, index) => (
            <input
              key={`productCount_${index}`}
              type="hidden"
              name="productCount[]"
              value={count}
              onChange={() => {}}
            />
          ))}
          <input
            type="hidden"
            name="merchantSignature"
            value={hashed_value}
            onChange={() => {}}
          />
        </form>
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

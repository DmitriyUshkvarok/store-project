'use client';
import React, { useRef, useState } from 'react';
import {
  StyleOrderForm,
  FormWrapper,
  OrderFormTitle,
  OrderFormSubTitle,
  OrderFormGroup,
  OrderStyleField,
  ValidationError,
  OrderBtn,
  OrderFormGroupRadio,
  OrderFormSubTitleRadio,
} from './BasketForm.styled';
import { Formik, ErrorMessage, Field } from 'formik';
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
  const [cardPayment, setCardPayment] = useState(
    'По перерахунку за реквізитами'
  );

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
        if (cardPayment) {
          data['merchantSignature'] = hashed_value;
          formRef.current.submit();
        }

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
          target="_blank"
          rel="noopener noreferrer"
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

            <OrderFormSubTitleRadio>Оплата:</OrderFormSubTitleRadio>
            <OrderFormGroupRadio>
              <input
                type="radio"
                id="paymentMethod-1"
                name="paymentMethod"
                value="По перерахунку за реквізитами"
                onClick={() => setCardPayment(false)}
                style={{ cursor: 'pointer' }}
                defaultChecked={true}
              />
              <label htmlFor="paymentMethod-1" style={{ cursor: 'pointer' }}>
                По перерахунку за реквізитами
              </label>
            </OrderFormGroupRadio>
            <OrderFormGroupRadio>
              <input
                type="radio"
                id="paymentMethod-2"
                name="paymentMethod"
                value="Готівкою"
                onClick={() => setCardPayment(false)}
                style={{ cursor: 'pointer' }}
              />
              <label htmlFor="paymentMethod-2" style={{ cursor: 'pointer' }}>
                Готівкою
              </label>
            </OrderFormGroupRadio>
            <OrderFormGroupRadio>
              <input
                type="radio"
                id="paymentMethod-3"
                name="paymentMethod"
                value="Картою"
                onClick={() => setCardPayment(true)}
                style={{ cursor: 'pointer' }}
              />
              <label htmlFor="paymentMethod-3" style={{ cursor: 'pointer' }}>
                Картою
              </label>
            </OrderFormGroupRadio>

            <OrderBtn type="submit">
              {isLoading
                ? 'Зачекайте...'
                : cardPayment
                ? 'Перейти до оплати'
                : 'Підтвердити замовлення'}
            </OrderBtn>
          </FormWrapper>
        </StyleOrderForm>
      </Formik>
    </>
  );
};
export default OrderFom;

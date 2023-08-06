'use client';
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
import { useState } from 'react';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useSelector } from 'react-redux';

const initialValues = {
  name: '',
  email: '',
  location: '',
  phone: '',
};

const OrderFom = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const cartItems = useSelector(cartSelector.getIsItems);
  const handleSubmit = async (values, { resetForm }) => {
    // setIsLoading(true);
    const formDataAndOrder = {
      values,
      cartItems,
    };
    console.log(formDataAndOrder);
    localStorage.setItem('formDataAndOrder', JSON.stringify(formDataAndOrder));
    resetForm();
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
              <OrderFormLabel htmlFor="order-name">Ім&#39;я:</OrderFormLabel>
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
            </OrderFormGroup>
            <OrderFormGroup>
              <OrderFormLabel htmlFor="order-adress">Адреса:</OrderFormLabel>
              <OrderStyleField
                name="location"
                placeholder="Адреса:"
                id="order-adress"
              />
              <ErrorMessage name="location">
                {(msg) => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
            </OrderFormGroup>
            <OrderFormGroup>
              <OrderFormLabel htmlFor="order-phone">Телефон:</OrderFormLabel>
              <OrderStyleField
                name="phone"
                placeholder="Телефон:"
                id="order-passsword"
              />
              <ErrorMessage name="phone">
                {(msg) => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
            </OrderFormGroup>
            <OrderBtn type="submit">Підтвердити замовлення</OrderBtn>
          </FormWrapper>
        </StyleOrderForm>
      </Formik>
    </>
  );
};
export default OrderFom;

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
import cartSelector from '@/src/redux/cart/cartSelector';
import { useSelector, useDispatch } from 'react-redux';
import { useCreateOrdersMutation } from '@/src/redux/ordersApi/ordersApi';
import {
  updateTotalPrice,
  removeAllFromCart,
} from '@/src/redux/cart/cartSlise';
import { clearAllQuantities } from '@/src/redux/orderQantity/quantitySlice';

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

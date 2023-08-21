import React from 'react';
import {
  OrderFormGroupRadio,
  OrderFormSubTitleRadio,
} from './PaymentsMethod.styled';

const PaymentMethod = ({ cardPayment, setCardPayment }) => {
  return (
    <>
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
    </>
  );
};

export default PaymentMethod;

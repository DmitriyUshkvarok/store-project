import React from 'react';

const PaymentForm = ({ formRef, data, hashed_value }) => {
  return (
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
  );
};

export default PaymentForm;

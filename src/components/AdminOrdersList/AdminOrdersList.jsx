'use client';
import Image from 'next/image';
import {
  OrderAdminWrapper,
  UserInfoBlock,
  OrderItemsBlock,
  TotalPriceBlock,
  UserInfoTitle,
  OrderItemsList,
  OrderItemsListItem,
  OrderItemsTitle,
} from './AdminOrderList.styled';

const AdminOrdersList = () => {
  const dataAndOrder = JSON.parse(localStorage.getItem('formDataAndOrder'));
  const cartItems = dataAndOrder?.cartItems || [];
  const userInfo = dataAndOrder?.values || {};
  const quantityData = dataAndOrder?.quantity || {};
  const totalPrice = dataAndOrder?.totalPrice || 0;
  return (
    <OrderAdminWrapper>
      {Object.keys(userInfo).length > 0 ? (
        <>
          <UserInfoBlock>
            <UserInfoTitle>Інформація про покупця:</UserInfoTitle>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Phone: {userInfo.phone}</p>
            <p>Location: {userInfo.location}</p>
          </UserInfoBlock>
        </>
      ) : (
        <p>No user information available.</p>
      )}
      {cartItems.length > 0 ? (
        <>
          <OrderItemsBlock>
            <OrderItemsTitle>Елементи замовлення:</OrderItemsTitle>
            <OrderItemsList>
              {cartItems.map((item) => (
                <OrderItemsListItem key={item.id}>
                  <h3>{item.title}</h3>
                  <p>Дата заказа: {item.data}</p>
                  <p>Ціна: {item.price}</p>
                  <p>Кількість: {quantityData[item.id] || 0}</p>
                  <Image
                    src={item.image.src}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </OrderItemsListItem>
              ))}
            </OrderItemsList>
          </OrderItemsBlock>
        </>
      ) : (
        <p>No order items available.</p>
      )}
      <TotalPriceBlock>
        <h2>Разом:</h2>
        <p>{totalPrice} гривень</p>
      </TotalPriceBlock>
    </OrderAdminWrapper>
  );
};

export default AdminOrdersList;

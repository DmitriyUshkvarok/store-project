'use client';
import Image from 'next/image';
import {
  OrderAdminWrapper,
  BtnStatusBlock,
  BtnStatus,
  UserInfoBlock,
  UserInfoName,
  UserInfoEmail,
  UserInfoPhone,
  UserInfLocation,
  SpanInfoUser,
  OrderItemsBlock,
  TotalPriceBlock,
  UserInfoTitle,
  OrderItemsList,
  OrderItemsListItem,
  OrderItemsTitle,
  OrderName,
  OrderData,
  StyleAdminRiDeleteBin5Fill,
} from './AdminOrderList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatus } from '@/src/redux/statusOrder/statusOrderSlice';
import orderStatusSelector from '@/src/redux/statusOrder/statusOrderSelector';
import { MdPendingActions } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';

const AdminOrdersList = () => {
  const dispatch = useDispatch();
  const getStatus = useSelector(orderStatusSelector.getStatus);

  const dataAndOrder = JSON.parse(localStorage.getItem('formDataAndOrder'));
  const cartItems = dataAndOrder?.cartItems || [];
  const userInfo = dataAndOrder?.values || {};
  const quantityData = dataAndOrder?.quantity || {};
  const totalPrice = dataAndOrder?.totalPrice || 0;

  return (
    <OrderAdminWrapper>
      <BtnStatusBlock>
        <BtnStatus onClick={() => dispatch(toggleStatus())}>
          {getStatus ? (
            <>
              В очікуванні <MdPendingActions color="orange" size={20} />
            </>
          ) : (
            <>
              Виконано <AiFillCheckCircle color="green" size={20} />
            </>
          )}
        </BtnStatus>
      </BtnStatusBlock>
      {Object.keys(userInfo).length > 0 ? (
        <>
          <UserInfoBlock>
            <UserInfoTitle>Інформація про покупця:</UserInfoTitle>
            <UserInfoName>
              Name: <SpanInfoUser>{userInfo.name}</SpanInfoUser>
            </UserInfoName>
            <UserInfoEmail>
              Email: <SpanInfoUser>{userInfo.email}</SpanInfoUser>
            </UserInfoEmail>
            <UserInfoPhone>
              Phone: <SpanInfoUser>{userInfo.phone}</SpanInfoUser>
            </UserInfoPhone>
            <UserInfLocation>
              Location: <SpanInfoUser>{userInfo.location}</SpanInfoUser>
            </UserInfLocation>
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
                <OrderItemsListItem key={item.id} isPending={getStatus}>
                  <OrderName>{item.title}</OrderName>
                  <OrderData>Дата заказа: {item.data}</OrderData>
                  <p>Ціна: {item.price}</p>
                  <p>Кількість: {quantityData[item.id] || 0}</p>
                  <Image
                    src={item.image.src}
                    alt={item.title}
                    width={70}
                    height={70}
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
      <StyleAdminRiDeleteBin5Fill
        size={25}
        // onClick={() => handleRemoveItem(item.id)}
      />
    </OrderAdminWrapper>
  );
};

export default AdminOrdersList;

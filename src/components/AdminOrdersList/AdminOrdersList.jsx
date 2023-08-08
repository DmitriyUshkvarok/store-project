'use client';
import Image from 'next/image';
import {
  OrderAdminWrapper,
  AllOrdersList,
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
import {
  useGetOrdersByAdminQuery,
  useDeleteOrderMutation,
} from '@/src/redux/adminOrdersApi/adminOrdersApi';

const AdminOrdersList = () => {
  const dispatch = useDispatch();
  const getStatus = useSelector(orderStatusSelector.getStatus);
  const { data: ordersFromServer } = useGetOrdersByAdminQuery();
  const [deleteOrderMutation] = useDeleteOrderMutation();

  const handleDeleteOrder = async (orderId) => {
    try {
      await deleteOrderMutation(orderId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OrderAdminWrapper>
      {ordersFromServer?.length === 0 ? (
        <p>Немає доступних замовлень</p>
      ) : (
        ordersFromServer?.map((order) => (
          <AllOrdersList key={order._id}>
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
            <UserInfoBlock>
              <UserInfoTitle>Інформація про покупця:</UserInfoTitle>
              <UserInfoName>
                Name: <SpanInfoUser>{order.buyer.name}</SpanInfoUser>
              </UserInfoName>
              <UserInfoEmail>
                Email: <SpanInfoUser>{order.buyer.email}</SpanInfoUser>
              </UserInfoEmail>
              <UserInfoPhone>
                Phone: <SpanInfoUser>{order.buyer.phone}</SpanInfoUser>
              </UserInfoPhone>
              <UserInfLocation>
                Location: <SpanInfoUser>{order.buyer.address}</SpanInfoUser>
              </UserInfLocation>
            </UserInfoBlock>
            <OrderItemsBlock>
              <OrderItemsTitle>Елементи замовлення:</OrderItemsTitle>
              <OrderItemsList>
                {order.products.map((item) => (
                  <OrderItemsListItem
                    key={item.productId}
                    isPending={getStatus}
                  >
                    <OrderName>{item.name}</OrderName>
                    <OrderData>Дата заказа: {item.date}</OrderData>
                    <p>Ціна: {item.price}</p>
                    {order.quantity.map((quantityItem) => {
                      if (quantityItem.productId === item.productId) {
                        return (
                          <p key={quantityItem._id}>
                            Кількість: {quantityItem.productQuantity}
                          </p>
                        );
                      }
                      return null;
                    })}
                    <Image
                      src={item.url}
                      alt={item.name}
                      width={70}
                      height={70}
                    />
                  </OrderItemsListItem>
                ))}
              </OrderItemsList>
            </OrderItemsBlock>
            <TotalPriceBlock>
              <h2>Разом:</h2>
              <p>{order.totalPrice} гривень</p>
            </TotalPriceBlock>
            <StyleAdminRiDeleteBin5Fill
              size={25}
              onClick={() => handleDeleteOrder(order._id)}
            />
          </AllOrdersList>
        ))
      )}
    </OrderAdminWrapper>
  );
};

export default AdminOrdersList;

'use client';
import css from './adminOrderList.module.css';
import CustomBarChart from '../CustomBarChart/CustomBarChart';
import {
  OrderAdminWrapper,
  FilterCheckBoxBlock,
  LabelFilter,
  InputCheckFilter,
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
  OrderColor,
  OrderBrand,
  OrderPrice,
  OrderQuantity,
  StyleAdminRiDeleteBin5Fill,
} from './AdminOrderList.styled';
import { useState } from 'react';
import { MdPendingActions } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import {
  useGetOrdersByAdminQuery,
  useDeleteOrderMutation,
  useUpdateOrderStatusMutation,
} from '@/src/redux/adminOrdersApi/adminOrdersApi';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { animateScroll as scroll } from 'react-scroll';

const AdminOrdersList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showDone, setShowDone] = useState(false);
  const pageSize = 10;
  const { data: response } = useGetOrdersByAdminQuery({
    page: currentPage + 1,
    limit: 10,
    done: showDone,
  });

  const ordersFromServer = response?.orders || []; // Массив заказов
  const totalOrdersCount = response?.total || 0; // Общее количество заказов
  const totalPages = Math.ceil(totalOrdersCount / pageSize); // Общее количество страниц
  const hasNextPage = ordersFromServer.length === pageSize;

  const totalOrders = response?.all || 0;

  const donePercentage = ((response?.total / response?.all) * 100).toFixed(2);
  const activePercentage = (
    ((response?.all - response?.total) / response?.all) *
    100
  ).toFixed(2);

  const chartData = [
    { label: 'Общее количество', value: totalOrders },
    {
      label: 'Выполненные',
      value: donePercentage,
      totalValue: response?.total,
    },
    {
      label: 'Активные',
      value: activePercentage,
      totalValue: response?.all - response?.total,
    },
  ];

  const [deleteOrderMutation] = useDeleteOrderMutation();
  const [updateOrderStatusMutation] = useUpdateOrderStatusMutation();

  const handleDeleteOrder = async (orderId) => {
    try {
      await deleteOrderMutation(orderId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleStatus = async (orderId, done) => {
    try {
      await updateOrderStatusMutation({ orderId, done });
      toast.success('товар додано до виконаних замовлень');
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuad',
    });
  };

  const handleShowDoneToggle = () => {
    setShowDone(!showDone);
    setCurrentPage(0);
  };

  const completedOrders = ordersFromServer.filter((order) => order.done);
  const totalProfit = completedOrders.reduce(
    (total, order) => total + order.totalPrice,
    0
  );

  return (
    <OrderAdminWrapper>
      <CustomBarChart data={chartData} />
      <p>Общая прибыль: {totalProfit} гривень</p>
      <FilterCheckBoxBlock>
        <LabelFilter>
          Показати виконані замовлення:
          <InputCheckFilter
            type="checkbox"
            checked={showDone}
            onChange={handleShowDoneToggle}
          />
        </LabelFilter>
      </FilterCheckBoxBlock>
      {ordersFromServer?.length === 0 ? (
        <p>Немає доступних замовлень</p>
      ) : (
        ordersFromServer
          .slice()
          .reverse()
          .map((order) => (
            <AllOrdersList key={order._id}>
              <BtnStatusBlock>
                <BtnStatus
                  onClick={() => handleToggleStatus(order._id, !order.done)}
                  disabled={order.done}
                >
                  {order.done ? (
                    <>
                      Виконано <AiFillCheckCircle color="green" size={20} />
                    </>
                  ) : (
                    <>
                      В очікуванні <MdPendingActions color="orange" size={20} />
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
                      isPending={order.done}
                    >
                      <OrderName>{item.name}</OrderName>
                      <OrderData>Дата заказа: {item.date}</OrderData>
                      <OrderColor>Колір: {item.color}</OrderColor>
                      <OrderBrand>Бренд: {item.brand}</OrderBrand>
                      <OrderPrice>Ціна: {item.price}</OrderPrice>
                      {order.quantity.map((quantityItem) => {
                        if (quantityItem.productId === item.productId) {
                          return (
                            <OrderQuantity key={quantityItem._id}>
                              Кількість: {quantityItem.productQuantity}
                            </OrderQuantity>
                          );
                        }
                        return null;
                      })}
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
      {ordersFromServer?.length > 0 && (
        <ReactPaginate
          previousLabel={'Попередні'}
          nextLabel={'Наступні'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          pageClassName={css.page}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextClassName={!hasNextPage ? css.disabled : ''}
          previousClassName={currentPage === 0 ? css.disabled : ''}
        />
      )}
    </OrderAdminWrapper>
  );
};

export default AdminOrdersList;

'use client';
import { useEffect } from 'react';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
} from '@/src/redux/orderQantity/quantitySlice';
import {
  NotOrderWrapper,
  NotOrder,
  CartList,
  CartListItem,
  CartListSection,
  StyleCartImage,
  OrdersGroup,
  SubOrdersInfo,
  ProductName,
  CounterWrapper,
  BtnIncrement,
  InputCounter,
  BtnDecrement,
  TotalPriceWrapper,
  TotalPriceTitle,
  TotalPriceInfo,
  DataInfo,
  StylePrice,
  StyleQuantity,
  StyleRiDeleteBin5Fill,
  PriceBox,
  TotalWeight,
  SpanTotalWeight,
  ProductNameTitle,
} from './OrderList.styled';

import { removeFromCart, updateTotalPrice } from '@/src/redux/cart/cartSlise';
import {
  clearQuantityById,
  setQuantityById,
} from '@/src/redux/orderQantity/quantitySlice';

const OrderList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector.getIsItems);
  const quantity = useSelector((state) => state.quantity);
  const totalPrice = useSelector(cartSelector.geTotalPrice);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * (quantity[item.id] || 0);
    }, 0);
    dispatch(updateTotalPrice(total));
  }, [cartItems, dispatch, quantity]);

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity({ itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity({ itemId }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
    dispatch(clearQuantityById({ itemId }));
  };

  const handleChangeQuantity = (itemId, newQuantity) => {
    dispatch(setQuantityById({ itemId, quantity: newQuantity }));
  };

  const calculateItemTotalPrice = (item) => {
    return item.price * (quantity[item.id] || 0);
  };

  const calculateItemTotalWeight = (item) => {
    return item.weight * (quantity[item.id] || 0);
  };

  const calculateTotalWeight = () => {
    return cartItems.reduce((acc, item) => {
      return acc + calculateItemTotalWeight(item);
    }, 0);
  };

  return (
    <>
      <CartListSection>
        {cartItems.length === 0 ? (
          <NotOrderWrapper>
            <NotOrder>Кошик порожній</NotOrder>
          </NotOrderWrapper>
        ) : (
          <>
            <CartList>
              {cartItems.map((item) => (
                <CartListItem key={item.id}>
                  <StyleCartImage
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    priority={true}
                  />

                  <OrdersGroup>
                    <ProductName>Назва товару</ProductName>
                    <SubOrdersInfo>{item.title}</SubOrdersInfo>
                  </OrdersGroup>

                  <OrdersGroup>
                    <CounterWrapper>
                      <BtnIncrement onClick={() => handleDecrement(item.id)}>
                        -
                      </BtnIncrement>
                      <InputCounter
                        type="text"
                        value={quantity[item.id] || 0}
                        onChange={(e) =>
                          handleChangeQuantity(item.id, e.target.value)
                        }
                      />
                      <BtnDecrement onClick={() => handleIncrement(item.id)}>
                        +
                      </BtnDecrement>
                    </CounterWrapper>
                    <DataInfo>{item.data}</DataInfo>
                  </OrdersGroup>
                  {/* <OrdersGroup>
                    <ProductName>Кількість:</ProductName>
                    <SubOrdersInfo>{quantity[item.id] || 0}</SubOrdersInfo>
                  </OrdersGroup> */}
                  <OrdersGroup>
                    <ProductName>Вага:</ProductName>
                    <SubOrdersInfo>{item.weight} кг</SubOrdersInfo>
                  </OrdersGroup>
                  <OrdersGroup>
                    <ProductName>Загальна вага позиції:</ProductName>
                    <SubOrdersInfo>
                      {calculateItemTotalWeight(item).toFixed(1)} кг
                    </SubOrdersInfo>
                  </OrdersGroup>
                  <OrdersGroup>
                    <ProductName>Ціна:</ProductName>
                    <SubOrdersInfo>{item.price} грн.</SubOrdersInfo>
                  </OrdersGroup>

                  <OrdersGroup>
                    <ProductName>Загальна ціна позиції:</ProductName>
                    <SubOrdersInfo>
                      {calculateItemTotalPrice(item)} грн.
                    </SubOrdersInfo>
                  </OrdersGroup>

                  <div>
                    <StyleRiDeleteBin5Fill
                      size={18}
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </div>
                </CartListItem>
              ))}
            </CartList>
            <TotalPriceWrapper>
              <TotalWeight>
                Загальна вага замовлення:
                <SpanTotalWeight>
                  {calculateTotalWeight().toFixed(1)} кг
                </SpanTotalWeight>
              </TotalWeight>
              <PriceBox>
                <TotalPriceTitle>Загальна вартість замовлення:</TotalPriceTitle>
                <TotalPriceInfo> {totalPrice} грн.</TotalPriceInfo>
              </PriceBox>
            </TotalPriceWrapper>
          </>
        )}
      </CartListSection>
    </>
  );
};

export default OrderList;

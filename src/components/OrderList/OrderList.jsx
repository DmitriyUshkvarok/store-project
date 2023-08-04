'use client';
import { useState, useEffect } from 'react';
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
} from './OrderList.styled';

import { removeFromCart } from '@/src/redux/cart/cartSlise';
import {
  clearQuantityById,
  setQuantityById,
} from '@/src/redux/orderQantity/quantitySlice';

const OrderList = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector.getIsItems);
  const quantity = useSelector((state) => state.quantity);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * (quantity[item.id] || 0);
    }, 0);
    setTotalPrice(total);
  }, [cartItems, quantity]);

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

  return (
    <>
      <CartListSection>
        {cartItems.length === 0 ? (
          <NotOrderWrapper>
            <NotOrder>Кошик порожній</NotOrder>
          </NotOrderWrapper>
        ) : (
          <>
            <TotalPriceWrapper>
              <TotalPriceTitle>Загальна сума:</TotalPriceTitle>
              <TotalPriceInfo>{totalPrice} гривень</TotalPriceInfo>
            </TotalPriceWrapper>
            <CartList>
              {cartItems.map((item) => (
                <CartListItem key={item.id}>
                  <StyleCartImage
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <ProductName>{item.title}</ProductName>
                  <StylePrice>Price: ${item.price}</StylePrice>
                  <StyleQuantity>
                    Quantity: {quantity[item.id] || 0}
                  </StyleQuantity>
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
                  <StyleRiDeleteBin5Fill
                    size={25}
                    onClick={() => handleRemoveItem(item.id)}
                  />
                </CartListItem>
              ))}
            </CartList>
          </>
        )}
      </CartListSection>
    </>
  );
};

export default OrderList;

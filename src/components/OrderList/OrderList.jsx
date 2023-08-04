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
  CounterWrapper,
  BtnIncrement,
  InputCounter,
  BtnDecrement,
  TotalPriceWrapper,
  TotalPriceTitle,
  TotalPriceInfo,
  DataInfo,
} from './OrderList.styled';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { removeFromCart } from '@/src/redux/cart/cartSlise';
import { clearQuantityById } from '@/src/redux/orderQantity/quantitySlice';

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
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {quantity[item.id] || 0}</p>
                  <CounterWrapper>
                    <BtnIncrement onClick={() => handleDecrement(item.id)}>
                      -
                    </BtnIncrement>
                    <InputCounter>{quantity[item.id] || 0}</InputCounter>
                    <BtnDecrement onClick={() => handleIncrement(item.id)}>
                      +
                    </BtnDecrement>
                  </CounterWrapper>
                  <DataInfo>{item.data}</DataInfo>
                  <RiDeleteBin5Fill
                    size={25}
                    color="coral"
                    style={{ cursor: 'pointer' }}
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

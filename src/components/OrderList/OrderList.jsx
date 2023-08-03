'use client';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
} from '@/src/redux/orderQantity/quantitySlice';
import {
  CartList,
  CartListItem,
  CartListSection,
  StyleCartImage,
} from './OrderList.styled';

const OrderList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector.getIsItems);
  const quantity = useSelector((state) => state.quantity);

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity({ itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity({ itemId }));
  };

  return (
    <>
      <CartListSection>
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
              <div>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{quantity[item.id] || 0}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
            </CartListItem>
          ))}
        </CartList>
      </CartListSection>
    </>
  );
};

export default OrderList;

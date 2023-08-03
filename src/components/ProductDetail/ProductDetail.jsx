'use client';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
} from '@/src/redux/orderQantity/quantitySlice';
import { addToCart } from '@/src/redux/cart/cartSlise';

const ProductDetail = ({ image, onClose }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity[image.id] || 0);

  const handleIncrement = () => {
    dispatch(incrementQuantity({ itemId: image.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ itemId: image.id }));
  };

  const handleBuy = () => {
    dispatch(addToCart({ ...image, quantity }));
  };

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h4>{image.title}</h4>
      <Image src={image.image} alt={image.title} width={300} height={200} />
      <p>{image.description}</p>
      <p>{image.price}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button type="button" onClick={handleBuy}>
        купить
      </button>
    </div>
  );
};

export default ProductDetail;

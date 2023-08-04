'use client';
import { BasketTitle, BasketSection } from './BasketContent.styled';
import OrderList from '../OrderList/OrderList';
import ButtonBack from '../ButtonBack/ButtonBack';
import Container from '../Container/Container';
import OrderFom from '../BasketForm/BasketForm';
import { useSelector } from 'react-redux';
import cartSelector from '@/src/redux/cart/cartSelector';

const BasketContent = () => {
  const cartItems = useSelector(cartSelector.getIsItems);
  return (
    <div>
      <BasketSection>
        <Container>
          <BasketTitle>Кошик</BasketTitle>
          <ButtonBack />
          <OrderList />
          {cartItems.length === 0 ? '' : <OrderFom />}
        </Container>
      </BasketSection>
    </div>
  );
};

export default BasketContent;

'use client';
import { BasketTitle, BasketSection } from './BasketContent.styled';
import OrderList from '../OrderList/OrderList';
import ButtonBack from '../ButtonBack/ButtonBack';
import Container from '../Container/Container';

const BasketContent = () => {
  return (
    <div>
      <BasketSection>
        <Container>
          <BasketTitle>Кошик</BasketTitle>
          <ButtonBack />
          <OrderList />
        </Container>
      </BasketSection>
    </div>
  );
};

export default BasketContent;

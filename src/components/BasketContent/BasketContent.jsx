'use client';
import {
  BasketTitle,
  BasketSection,
  InfoTextOddersClear,
  StyleLink,
} from './BasketContent.styled';
import OrderList from '../OrderList/OrderList';
import ButtonBack from '../ButtonBack/ButtonBack';
import Container from '../Container/Container';
import OrderFom from '../BasketForm/BasketForm';
import { useSelector } from 'react-redux';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useState } from 'react';

const BasketContent = () => {
  const cartItems = useSelector(cartSelector.getIsItems);
  const [orderSuccess, setOrderSuccess] = useState(false);
  return (
    <div>
      <BasketSection>
        <Container>
          <BasketTitle>Кошик</BasketTitle>
          <ButtonBack />
          <OrderList orderSuccess={orderSuccess} />
          {cartItems.length === 0 && orderSuccess && (
            <InfoTextOddersClear>
              Ваше замовлення було успішно оформлено. Для швидкого опрацювання
              запиту - зв&#39;яжіться будь ласка з нами за телефоном:
              067-777-77-66
              <StyleLink href="/oferta">
                Повернутися до каталогу товару?
              </StyleLink>
            </InfoTextOddersClear>
          )}
          {cartItems.length === 0 ? (
            ''
          ) : (
            <OrderFom setOrderSuccess={setOrderSuccess} />
          )}
        </Container>
      </BasketSection>
    </div>
  );
};

export default BasketContent;

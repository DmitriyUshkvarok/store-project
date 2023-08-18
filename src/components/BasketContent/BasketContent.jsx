'use client';
import {
  BasketTitle,
  BasketSection,
  InfoTextOddersClear,
  StyleLink,
  Box,
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
    <BasketSection>
      <Box>
        <BasketTitle>Кошик</BasketTitle>
        <ButtonBack />
        <OrderList orderSuccess={orderSuccess} />
        {cartItems.length === 0 && orderSuccess && (
          <div>
            <InfoTextOddersClear>
              Ваше замовлення було успішно оформлено. <br></br>Для швидкого
              опрацювання запиту зв&#39;яжіться, будь ласка, з нами за
              телефоном: 067-777-77-66.
            </InfoTextOddersClear>
            <StyleLink href="/oferta">
              Повернутися до каталогу товару? Натисніть тут!
            </StyleLink>
          </div>
        )}
        {cartItems.length === 0 ? (
          ''
        ) : (
          <OrderFom setOrderSuccess={setOrderSuccess} />
        )}
      </Box>
    </BasketSection>
  );
};

export default BasketContent;

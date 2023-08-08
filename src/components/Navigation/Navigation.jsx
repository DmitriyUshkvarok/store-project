'use client';
import {
  StyleNavigation,
  StyleLink,
  CartIconWrapper,
  CartCount,
  ImageStyled,
  BoxForYear,
  DivStyleLink,
} from './Navigation.styled';
import { IoIosBasket } from 'react-icons/io';
import { RxExit } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { useLogoutMutation } from '@/src/redux/adminAuthApi/authApi';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import Image from 'next/image';

const Navigation = () => {
  const cartItems = useSelector(cartSelector.getIsItems);
  const pathname = usePathname();
  const isToken = useSelector(authSelector.authToken);
  const [logOut] = useLogoutMutation();

  const handleClickLogOut = () => {
    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      async () => {
        try {
          await logOut();
          // location.reload();
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );
  };
  return (
    <>
      <StyleNavigation>
        {/* <StyleLink href="/home">Logo</StyleLink> */}
        <StyleLink
          href="/home"
          className={pathname === '/home' ? 'active' : ''}
        >
          Головна сторінка
        </StyleLink>
        <StyleLink
          href="/about"
          className={pathname === '/about' ? 'active' : ''}
        >
          Про нас
        </StyleLink>
        <StyleLink
          href="/oferta"
          className={pathname === '/offer' ? 'active' : ''}
        >
          Каталог товарів
        </StyleLink>
        <StyleLink
          href="/gallery"
          className={pathname === '/gallery' ? 'active' : ''}
        >
          Галерея
        </StyleLink>
        <StyleLink
          href="/contact"
          className={pathname === '/contact' ? 'active' : ''}
        >
          Контакти
        </StyleLink>
        <DivStyleLink
          href="/basket"
          className={pathname === '/basket' ? 'active' : ''}
        >
          <CartIconWrapper>
            <IoIosBasket size={30} />
            <CartCount>{cartItems.length}</CartCount>
          </CartIconWrapper>
        </DivStyleLink>
        {isToken && (
          <RxExit
            size={30}
            style={{ cursor: 'pointer', color: 'white' }}
            onClick={handleClickLogOut}
          />
        )}
      </StyleNavigation>
    </>
  );
};

export default Navigation;

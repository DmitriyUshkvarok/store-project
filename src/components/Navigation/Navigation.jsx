'use client';
import {
  StyleNavigation,
  StyleLink,
  CartIconWrapper,
  CartCount,
} from './Navigation.styled';
import { IoIosBasket } from 'react-icons/io';
import { RxExit } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { useLogoutMutation } from '@/src/redux/adminAuthApi/authApi';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';

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
        <StyleLink href="/home">Logo</StyleLink>
        <StyleLink
          href="/home"
          className={pathname === '/home' ? 'active' : ''}
        >
          Home Page
        </StyleLink>
        <StyleLink
          href="/about"
          className={pathname === '/about' ? 'active' : ''}
        >
          About Us
        </StyleLink>
        <StyleLink
          href="/oferta"
          className={pathname === '/offer' ? 'active' : ''}
        >
          Oferta
        </StyleLink>
        <StyleLink
          href="/gallery"
          className={pathname === '/gallery' ? 'active' : ''}
        >
          Gallery
        </StyleLink>
        <StyleLink
          href="/contact"
          className={pathname === '/contact' ? 'active' : ''}
        >
          Contact
        </StyleLink>
        <StyleLink
          href="/basket"
          className={pathname === '/basket' ? 'active' : ''}
        >
          <CartIconWrapper>
            <IoIosBasket size={30} />
            <CartCount>{cartItems.length}</CartCount>
          </CartIconWrapper>
        </StyleLink>
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

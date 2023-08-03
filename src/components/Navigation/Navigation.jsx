'use client';
import {
  StyleNavigation,
  StyleLink,
  CartIconWrapper,
  CartCount,
} from './Navigation.styled';
import { IoIosBasket } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const cartItems = useSelector(cartSelector.getIsItems);
  const pathname = usePathname();
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
      </StyleNavigation>
    </>
  );
};

export default Navigation;

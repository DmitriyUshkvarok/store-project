'use client';
import { StyleNavigation, StyleLink, StyleIsActive } from './Navigation.styled';
import { IoIosBasket } from 'react-icons/io';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <>
      <StyleNavigation>
        <StyleLink href="/">Logo</StyleLink>
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
          href="/offer"
          className={pathname === '/offer' ? 'active' : ''}
        >
          Offer
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
          <IoIosBasket />
        </StyleLink>
      </StyleNavigation>
    </>
  );
};

export default Navigation;

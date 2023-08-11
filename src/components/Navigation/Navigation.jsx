'use client';
import {
  StyleNavigation,
  StyleLink,
  CartIconWrapper,
  CartCount,
  DropDownMenu,
  Dropdown,
  BasketStyleLink,
  BurgerMenu,
  DropdownForBurger,
  StyleLinkForBurger,
  ItemForBurger,
  LinkForB,
} from './Navigation.styled';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosBasket } from 'react-icons/io';
import { RxExit } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { useLogoutMutation } from '@/src/redux/adminAuthApi/authApi';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import { useState, useRef, useEffect } from 'react';

const Navigation = () => {
  const [togle, setTogle] = useState(false);
  // const [subTogle, setSubTogle] = useState(false);
  const cartItems = useSelector(cartSelector.getIsItems);
  const pathname = usePathname();
  const isToken = useSelector(authSelector.authToken);
  const [logOut] = useLogoutMutation();

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTogle(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setTogle(!togle);
  };

  // const handelClickSub = () => {
  //   setSubTogle(!subTogle);
  // };

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
        <Dropdown>
          <StyleLink
            href="/oferta"
            className={pathname === '/offer' ? 'active' : ''}
          >
            Каталог товарів
          </StyleLink>
          <DropDownMenu>
            <ul>
              <ItemForBurger>
                <LinkForB href="/oferta/ukraina?id=64cc2ff867326ed9bd3fce3c&country=64cc2ff867326ed9bd3fce3c">
                  Країна
                </LinkForB>
              </ItemForBurger>
              <ItemForBurger>
                <LinkForB href="/about">Країни виробництва</LinkForB>
              </ItemForBurger>
              <ItemForBurger>
                <LinkForB href="/about">Клас</LinkForB>
              </ItemForBurger>
              <ItemForBurger>
                <LinkForB href="/allproducts">Увесь наш товар</LinkForB>
              </ItemForBurger>
            </ul>
          </DropDownMenu>
        </Dropdown>

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
        <BurgerMenu onClick={handleClick} ref={dropdownRef}>
          <RxHamburgerMenu style={{ color: 'white' }} />
          <DropdownForBurger togle={togle}>
            <ul>
              <li>
                <StyleLinkForBurger
                  href="/home"
                  className={pathname === '/home' ? 'active' : ''}
                >
                  Головна сторінка
                </StyleLinkForBurger>
              </li>
              <li>
                <StyleLinkForBurger
                  href="/about"
                  className={pathname === '/about' ? 'active' : ''}
                >
                  Про нас
                </StyleLinkForBurger>
              </li>
              <li>
                <StyleLinkForBurger
                  // onClick={handelClickSub}
                  href="/oferta"
                  className={pathname === '/offer' ? 'active' : ''}
                >
                  Каталог товарів
                </StyleLinkForBurger>
              </li>
              <li>
                <StyleLinkForBurger
                  href="/allproducts"
                  className={pathname === '/allproducts' ? 'active' : ''}
                >
                  Увесь наш товар
                </StyleLinkForBurger>
              </li>
              <li>
                <StyleLinkForBurger
                  href="/gallery"
                  className={pathname === '/gallery' ? 'active' : ''}
                >
                  Галерея
                </StyleLinkForBurger>
              </li>
            </ul>

            {/* <DropDownMenuForBurger subTogle={subTogle}>
              <ListMenu>
                <li>
                  <Link href="/about">Країна!!</Link>
                </li>
                <li>
                  <Link href="/about">Вид</Link>
                </li>
                <li>
                  <Link href="/about">Клас</Link>
                </li>
                <li>
                  <Link href="/about">Колір</Link>
                </li>
              </ListMenu>
            </DropDownMenuForBurger> */}
          </DropdownForBurger>
        </BurgerMenu>
        <BasketStyleLink
          href="/basket"
          className={pathname === '/basket' ? 'active' : ''}
        >
          <CartIconWrapper>
            <IoIosBasket size={30} />
            <CartCount>{cartItems.length}</CartCount>
          </CartIconWrapper>
        </BasketStyleLink>
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

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
  MenuBurger,
} from './Navigation.styled';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosBasket } from 'react-icons/io';
import { RxExit } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import cartSelector from '@/src/redux/cart/cartSelector';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { useLogoutMutation } from '@/src/redux/adminAuthApi/authApi';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import { useState, useRef, useEffect } from 'react';
import { useGetOfertaQuery } from '@/src/redux/ofertaApi/ofertaApi';
import { slugify } from 'transliteration';
import { setDataAndId } from '@/src/redux/ofertaApi/ofertaSlice';


const Navigation = () => {
  const [togle, setTogle] = useState(false);
  const cartItems = useSelector(cartSelector.getIsItems);
  const pathname = usePathname();
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const [logOut] = useLogoutMutation();
  const { data, isLoading } = useGetOfertaQuery();
  const dispatch = useDispatch();
  const handleChooseCategory = (category) => {
    dispatch(setDataAndId(category));
  };

  const dropdownRef = useRef(null);

  const handleClick = () => {
    setTogle(!togle);

    if (!togle) {
      document.body.classList.add('body-lock');
    } else {
      document.body.classList.remove('body-lock');
    }
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('body-lock');
    };
  }, []);

  const handleClickLogOut = () => {
    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      async () => {
        try {
          await logOut();
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
              {data?.map((category) => (
                <ItemForBurger
                  onClick={() => handleChooseCategory(category)}
                  key={category._id}
                >
                  <LinkForB
                    href={{
                      pathname: `/oferta/${slugify(category.name)}`,
                    }}
                  >
                    {category.name}
                  </LinkForB>
                </ItemForBurger>
              ))}
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
            <MenuBurger>
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
              <li>
                <StyleLinkForBurger
                  href="/contact"
                  className={pathname === '/contact' ? 'active' : ''}
                >
                  Контакти
                </StyleLinkForBurger>
              </li>
            </MenuBurger>
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
        {isLoggedIn && (
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

'use client';
import {
  StyleNavigation,
  StyleLink,
  CartIconWrapper,
  CartCount,
  ImageStyled,
  BoxForYear,
  DivStyleLink,
  DropDownMenu,
  Dropdown,
  BasketStyleLink,
  BurgerMenu,
  DropdownForBurger,
  StyleLinkForBurger,
  DropDownMenuForBurger,
  DropdownForOferta,
  StyleLinkForBurgerOferta,
  ListForBurger,
  ItemForBurger,
  ListMenu,
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
import Image from 'next/image';
import Link from 'next/link';

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
                <LinkForB href="/about">Вид</LinkForB>
              </ItemForBurger>
              <ItemForBurger>
                <LinkForB href="/about">Клас</LinkForB>
              </ItemForBurger>
              <ItemForBurger>
                <LinkForB href="/about">Колір</LinkForB>
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
        <BurgerMenu>
          <RxHamburgerMenu style={{ color: 'white' }} />
          <DropdownForBurger>
            <StyleLinkForBurger
              href="/home"
              className={pathname === '/home' ? 'active' : ''}
            >
              Головна сторінка
            </StyleLinkForBurger>
            <StyleLinkForBurger
              href="/about"
              className={pathname === '/about' ? 'active' : ''}
            >
              Про нас
            </StyleLinkForBurger>

            {/* <DropDownMenuForBurger>
              <ul>
                <li>
                  <Link href="/about">Країна</Link>
                </li>
                <li>
                  <Link href="/about">Вид</Link>
                </li>
                <li>
                  <Link href="/about">Клас</Link>
                </li>
                <li>
                  <Link href="/about">Колрі</Link>
                </li>
              </ul>
            </DropDownMenuForBurger> */}
            <StyleLinkForBurgerOferta
              href="/oferta"
              className={pathname === '/offer' ? 'active' : ''}
            >
              Каталог товарів
            </StyleLinkForBurgerOferta>

            <DropDownMenuForBurger>
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
            </DropDownMenuForBurger>
            <StyleLinkForBurger
              href="/gallery"
              className={pathname === '/gallery' ? 'active' : ''}
            >
              Галерея
            </StyleLinkForBurger>
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

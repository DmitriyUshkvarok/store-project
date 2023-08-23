'use client';

import { MdKeyboardArrowRight, MdOutlineDesktopMac } from 'react-icons/md';
import Link from 'next/link';
import Container from '../Container/Container';
import {
  ItemContact,
  ListContact,
  StyleFooter,
  BoxFooter,
  Text,
  Title,
  Box,
  List,
  Item,
  BoxAbout,
  Menu,
  TeamList,
  TeamItem,
  Btn,
  TeamTitle,
  TeamSubject,
  StyleLink,
  StyleAiOutlineGithub,
  StyleAiFillLinkedin,
  BoxLink,
  StyledImage,
} from './Footer.styled';
import { useState, useRef, useEffect } from 'react';

const Footer = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <StyleFooter>
      <Container>
        <BoxFooter>
          <Box>
            <Title>Про нас</Title>
            <Text>
              Приватне підприємтсво `Хімбрук` є компанією з багаторічним
              досвідом дистрибуції неорганічних синтетичних пігментів для різних
              галузей промисловості (виробництва, будівельних матеріалів,
              лакофарбової продукції, штучних пластмас і ін.).
            </Text>
          </Box>

          <Box>
            <address>
              <Title>ПП `Хімбрук`</Title>
              <ListContact>
                <ItemContact>
                  <a
                    href="https://goo.gl/maps/zSzGXAno3n1fgtpi9"
                    target="_blank"
                  >
                    м. Львів, пл. Ринок, 1
                  </a>
                </ItemContact>
                <ItemContact>
                  <a href="mailto:info@devstudio.com">petro-pedro@gmail.com</a>
                </ItemContact>
                <ItemContact>
                  <a href="tel:+380961111111">+38 096 777 77 77</a>
                </ItemContact>
              </ListContact>
            </address>
          </Box>
          <Box>
            <Title>Навігація</Title>
            <List>
              <Item>
                <MdKeyboardArrowRight />
                <Link href={`/home`}> Головна сторінка</Link>
              </Item>
              <Item>
                <MdKeyboardArrowRight /> <Link href={`/about`}> Про нас</Link>
              </Item>
              <Item>
                <MdKeyboardArrowRight />
                <Link href={`/oferta`}> Каталог товарів</Link>
              </Item>
              <Item>
                <MdKeyboardArrowRight /> <Link href={`/gallery`}>Галерея</Link>
              </Item>
              <Item>
                <MdKeyboardArrowRight /> <Link href={`/contact`}>Контакти</Link>
              </Item>
            </List>
          </Box>
        </BoxFooter>
      </Container>
      <BoxAbout>
        <p>Усі права захищено 2023 Хімбрук веб-сайт </p>
        <Btn
          type="button"
          name="button"
          aria-label="Name"
          ref={buttonRef}
          onClick={toggleMenu}
        >
          <MdOutlineDesktopMac />
        </Btn>
        {menuVisible && (
          <Menu ref={menuRef}>
            <TeamList>
              <TeamItem>
                <TeamTitle>Oleh Paslavskyi</TeamTitle>
                <TeamSubject>Full stack developer</TeamSubject>
                <BoxLink>
                  <StyleLink
                    href="https://github.com/OPaslavskiy"
                    target="_blank"
                  >
                    <StyleAiOutlineGithub />
                  </StyleLink>
                  <StyleLink
                    href="https://www.linkedin.com/in/oleh-paslavskyi/"
                    target="_blank"
                  >
                    <StyleAiFillLinkedin />
                  </StyleLink>
                </BoxLink>
              </TeamItem>
              <TeamItem>
                <TeamTitle>Anastasiya Kor</TeamTitle>
                <TeamSubject>Full stack developer</TeamSubject>
                <BoxLink>
                  <StyleLink
                    target="_blank"
                    href="https://github.com/AnastasiiaKor"
                  >
                    <StyleAiOutlineGithub />
                  </StyleLink>
                  <StyleLink
                    target="_blank"
                    href="https://www.linkedin.com/in/anastasiya-kor/"
                  >
                    <StyleAiFillLinkedin />
                  </StyleLink>
                </BoxLink>
              </TeamItem>
              <TeamItem>
                <TeamTitle>Dmitriy Ushkvarok</TeamTitle>
                <TeamSubject>Full stack developer</TeamSubject>
                <BoxLink>
                  <StyleLink
                    target="_blank"
                    href="https://github.com/DmitriyUshkvarok"
                  >
                    <StyleAiOutlineGithub />
                  </StyleLink>
                  <StyleLink
                    target="_blank"
                    href="https://www.linkedin.com/in/dmitriy-ushkvarok/"
                  >
                    <StyleAiFillLinkedin />
                  </StyleLink>
                </BoxLink>
              </TeamItem>
              <TeamItem>
                <TeamTitle>Anastasiia Hudymenko</TeamTitle>
                <TeamSubject>Full stack developer</TeamSubject>
                <BoxLink>
                  <StyleLink
                    target="_blank"
                    href="https://github.com/AnastasiiaHudymenko"
                  >
                    <StyleAiOutlineGithub />
                  </StyleLink>
                  <StyleLink
                    target="_blank"
                    href="https://www.linkedin.com/in/anastasia-gudymenko/"
                  >
                    <StyleAiFillLinkedin />
                  </StyleLink>
                </BoxLink>
              </TeamItem>
              <TeamItem>
                <TeamTitle>Vitalii Nozhenko</TeamTitle>
                <TeamSubject>Full stack developer</TeamSubject>
                <BoxLink>
                  <StyleLink target="_blank" href="https://github.com/VitalikN">
                    <StyleAiOutlineGithub />
                  </StyleLink>
                  <StyleLink
                    target="_blank"
                    href="https://www.linkedin.com/in/vitalii-nozhenko/"
                  >
                    <StyleAiFillLinkedin />
                  </StyleLink>
                </BoxLink>
              </TeamItem>
            </TeamList>
          </Menu>
        )}
      </BoxAbout>
    </StyleFooter>
  );
};

export default Footer;

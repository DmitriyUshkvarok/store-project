'use client';

import { MdKeyboardArrowRight } from 'react-icons/md';
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
} from './Footer.styled';
const Footer = () => {
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
      </BoxAbout>
    </StyleFooter>
  );
};

export default Footer;

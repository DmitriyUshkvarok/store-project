'use client';

import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import Container from '../Container/Container';
import {
  ItemContact,
  ListContact,
  StyleFooter,
  BoxFooter,
  Title,
  Box,
  List,
  Item,
} from './Footer.styled';
const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <BoxFooter>
          <Box>
            <address>
              <Title>ZWUKSO Sp. z oo Sp.k.</Title>
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
            <List>
              <Item>
                <MdKeyboardArrowRight /> <Link href={`/home`}>Home Page</Link>
              </Item>
              <Item>
                <MdKeyboardArrowRight /> <Link href={`/about`}>About Us</Link>
              </Item>
              <Item>
                <MdKeyboardArrowRight /> <Link href={`/oferta`}>Oferta</Link>
              </Item>
              <Item>
                <MdKeyboardArrowRight /> <Link href={`/gallery`}>Gallery</Link>
              </Item>
              <Item>
                <MdKeyboardArrowRight /> <Link href={`/contact`}>Contact</Link>
              </Item>
            </List>
          </Box>
        </BoxFooter>
      </Container>
    </StyleFooter>
  );
};

export default Footer;

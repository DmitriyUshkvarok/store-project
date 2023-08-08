'use client';

import Image from 'next/image';
import Container from '../Container/Container';

import Marquee from 'react-fast-marquee';
import { List } from './PartnersSlider.styled';

const PartnersSlider = () => {
  return (
    <div>
      <Container>
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          <Image
            src={'/autoScroll/Flag.png'}
            alt={'autoScroll'}
            width="100"
            height="100"
          />
          <List>
            <li>
              <a href="https://goo.gl/maps/zSzGXAno3n1fgtpi9" target="_blank">
                м. Львів, пл. Ринок, 1
              </a>
            </li>
            <li>
              <a href="mailto:info@devstudio.com">petro-pedro@gmail.com</a>
            </li>
            <li>
              <a href="tel:+380961111111">+38 096 777 77 77</a>
            </li>
          </List>

          <Image
            src={'/autoScroll/horse.jpg'}
            alt={'autoScroll'}
            width="180"
            height="180"
            style={{ transform: 'scaleX(-1)' }}
          />
        </Marquee>
      </Container>
    </div>
  );
};

export default PartnersSlider;

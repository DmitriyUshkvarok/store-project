'use client';
import Container from '../Container/Container';

import Marquee from 'react-fast-marquee';
import { List } from './PartnersSlider.styled';

const PartnersSlider = () => {
  return (
    <div>
      <Container>
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
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
        </Marquee>
      </Container>
    </div>
  );
};

export default PartnersSlider;

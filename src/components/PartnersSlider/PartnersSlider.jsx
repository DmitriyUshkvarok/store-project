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
                м. Львів вул. Шараневича 1/14,
              </a>
            </li>
            <li>
              <a href="mailto:mail: pigments@email.ua">pigments@email.ua</a>,
            </li>
            <li>
              <a href="tel:+380962097636"> +38 096 209 76 36</a>,
            </li>
            <li>
              <a href="tel:+380505558510">+38 050 555 85 10</a>,
            </li>
          </List>
        </Marquee>
      </Container>
    </div>
  );
};

export default PartnersSlider;

'use client';

import Image from 'next/image';
import Container from '../Container/Container';
import {
  Section,
  ScrollImage,
  Box,
  Title,
  ScrollImageFlag,
  TitleFlag,
} from './HomePromoSlider.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const HomePromoSlider = () => {
  const EmptyArrow = () => <div style={{ display: 'none' }}></div>;

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    prevArrow: <EmptyArrow />,
    nextArrow: <EmptyArrow />,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <Section>
      {/* <Container> */}
      <div>
        <Slider {...settings}>
          <Box>
            <ScrollImageFlag
              src={'/autoScroll/Flag.png'}
              alt={'autoScroll'}
              width="2000"
              height="646"
            />
            <TitleFlag>СЛАВА УКРАЇНІ!</TitleFlag>
          </Box>
          <Box>
            <ScrollImage
              // src={'../../../public/autoScroll/25.jpg'}
              src={'/autoScroll/horse.jpg'}
              alt={'autoScroll'}
              width="2000"
              height="646"
            />
            <Title>PRETIOX TITANIUM WHITE</Title>
          </Box>
          <Box>
            <ScrollImage
              //   src={'../../../public/autoScroll/29.jpg'}
              src={'/autoScroll/strawberry.jpg'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="646"
            />
            <Title>пігменти для фарб</Title>
          </Box>
          <Box>
            <ScrollImage
              src={'/autoScroll/kraska.png'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="646"
            />
            <Title>пігменти для бетону</Title>
          </Box>

          <Box>
            <ScrollImage
              src={'/autoScroll/1.jpg'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="646"
            />
            <Title>пігменти кобальтовий синій</Title>
          </Box>
          <Box>
            <ScrollImage
              src={'/autoScroll/3.jpg'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="646"
            />
            <Title>пігменти для асфальту</Title>
          </Box>
          <Box>
            <ScrollImage
              src={'/autoScroll/6.jpg'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="646"
            />
            <Title>пігменти хром зелений</Title>
          </Box>
        </Slider>
      </div>
      {/* </Container> */}
    </Section>
  );
};

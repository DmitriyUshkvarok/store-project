'use client';

import {
  Section,
  ScrollImage,
  Box,
  Title,
  BoxTitle,
} from './HomePromoSlider.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const HomePromoSlider = () => {
  const EmptyArrow = () => <div style={{ display: 'none' }}></div>;

  const settings = {
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
      <div>
        <Slider {...settings}>
          <Box>
            <ScrollImage
              src={'/autoScroll/Flag.jpg'}
              alt={'autoScroll'}
              width="2000"
              height="650"
              priority={true}
            />
            <BoxTitle>
              <Title>СЛАВА УКРАЇНІ!</Title>
            </BoxTitle>
          </Box>
          <Box>
            <ScrollImage
              src={'/autoScroll/horse.jpg'}
              alt={'autoScroll'}
              width="2000"
              height="650"
              priority={true}
            />
            <BoxTitle>
              <Title>PRETIOX TITANIUM WHITE</Title>
            </BoxTitle>
          </Box>
          <Box>
            <ScrollImage
              src={'/autoScroll/strawberry.jpg'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="650"
            />
            <BoxTitle>
              <Title>пігменти для фарб</Title>
            </BoxTitle>
          </Box>
          <Box>
            <ScrollImage
              src={'/autoScroll/promo-farby.jpg'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="650"
            />
            <BoxTitle>
              <Title>пігменти для бетону</Title>
            </BoxTitle>
          </Box>

          <Box>
            <ScrollImage
              src={'/autoScroll/1.jpg'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="650"
            />
            <BoxTitle>
              <Title>пігменти кобальтовий синій</Title>
            </BoxTitle>
          </Box>
          <Box>
            <ScrollImage
              src={'/autoScroll/3.jpg'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="650"
            />
            <BoxTitle>
              <Title>пігменти для асфальту</Title>
            </BoxTitle>
          </Box>
          <Box>
            <ScrollImage
              src={'/autoScroll/6.jpg'}
              alt={'PRETIOX TITANIUM WHITE'}
              width="2000"
              height="650"
            />
            <BoxTitle>
              <Title>пігменти хром зелений</Title>
            </BoxTitle>
          </Box>
        </Slider>
      </div>
    </Section>
  );
};

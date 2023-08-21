'use client';

import {
  Section,
  ScrollImage,
  Box,
  Title,
  BoxTitle,
  StyledLink,
} from './HomePromoSlider.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

export const HomePromoSlider = () => {
  const EmptyArrow = () => <div style={{ display: 'none' }}></div>;
  // const router = typeof window !== 'undefined' ? useRouter : undefined;

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <EmptyArrow />,
    nextArrow: <EmptyArrow />,
    // pauseOnHover: false,
    fade: true,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  return (
    <Section>
      <div>
        <Slider {...settings}>
          {/* <StyledLink href={currentSlide === 0 ? '/home' : '#'}> */}
          <StyledLink href={currentSlide === 0 ? '/home' : '#'}>
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
          </StyledLink>
          {/* <StyledLink href="/gallery" passHref> */}
          <StyledLink href={currentSlide === 1 ? '/gallery' : '#'}>
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
          </StyledLink>
          {/* </StyledLink> */}
          <StyledLink href={currentSlide === 2 ? '/allproducts' : '#'}>
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
          </StyledLink>
          <StyledLink href={currentSlide === 3 ? '/oferta' : '#'}>
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
          </StyledLink>
          <StyledLink href={currentSlide === 4 ? '/gallery' : '#'}>
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
          </StyledLink>
          <StyledLink href={currentSlide === 5 ? '/oferta' : '#'}>
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
          </StyledLink>
          <StyledLink href={currentSlide === 6 ? '/allproducts' : '#'}>
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
          </StyledLink>
        </Slider>
      </div>
    </Section>
  );
};

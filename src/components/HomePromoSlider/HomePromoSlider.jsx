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

import imagesData from '../../../imagesData.json';

export const HomePromoSlider = () => {
  const EmptyArrow = () => <div style={{ display: 'none' }}></div>;

  const [currentSlide, setCurrentSlide] = useState(0);

  const SLIDES = imagesData.find((item) => item.id === 'SLIDES').data;

  const settings = {
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <EmptyArrow />,
    nextArrow: <EmptyArrow />,
    pauseOnHover: false,
    fade: true,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  return (
    <Section>
      <div>
        <Slider
          {...settings}
          afterChange={(current) => setCurrentSlide(current)}
        >
          {SLIDES.map((slide, index) => (
            <StyledLink
              key={index}
              href={currentSlide === index ? slide.link : '#'}
            >
              <Box>
                <ScrollImage
                  src={slide.src}
                  alt={slide.alt}
                  width="2000"
                  height="550"
                  priority={true}
                  sizes="100vw"
                />
                <BoxTitle>
                  <Title>{slide.title}</Title>
                </BoxTitle>
              </Box>
            </StyledLink>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

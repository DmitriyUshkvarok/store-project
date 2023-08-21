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
import Link from 'next/link';
import { useRouter } from 'next/router';

export const HomePromoSlider = () => {
  const EmptyArrow = () => <div style={{ display: 'none' }}></div>;

  const router = typeof window !== 'undefined' ? useRouter : undefined;

  const settings = {
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <EmptyArrow />,
    nextArrow: <EmptyArrow />,
    pauseOnHover: false,
    fade: false,
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
            <StyledLink href="/gallery">
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
            </StyledLink>
          </Box>
          <Box>
            <StyledLink href="/allproducts">
              <ScrollImage
                src={'/autoScroll/strawberry.jpg'}
                alt={'PRETIOX TITANIUM WHITE'}
                width="2000"
                height="650"
              />
              <BoxTitle>
                <Title>пігменти для фарб</Title>
              </BoxTitle>
            </StyledLink>
          </Box>

          <Box>
            <StyledLink href="/oferta">
              <ScrollImage
                src={'/autoScroll/promo-farby.jpg'}
                alt={'PRETIOX TITANIUM WHITE'}
                width="2000"
                height="650"
              />
              <BoxTitle>
                <Title>пігменти для бетону</Title>
              </BoxTitle>
            </StyledLink>
          </Box>

          <Box>
            <StyledLink href="/gallery">
              <ScrollImage
                src={'/autoScroll/1.jpg'}
                alt={'PRETIOX TITANIUM WHITE'}
                width="2000"
                height="650"
              />
              <BoxTitle>
                <Title>пігменти кобальтовий синій</Title>
              </BoxTitle>
            </StyledLink>
          </Box>
          <Box>
            <StyledLink href="/oferta">
              <ScrollImage
                src={'/autoScroll/3.jpg'}
                alt={'PRETIOX TITANIUM WHITE'}
                width="2000"
                height="650"
              />
              <BoxTitle>
                <Title>пігменти для асфальту</Title>
              </BoxTitle>
            </StyledLink>
          </Box>
          <Box>
            <StyledLink href="/allproducts">
              <ScrollImage
                src={'/autoScroll/6.jpg'}
                alt={'PRETIOX TITANIUM WHITE'}
                width="2000"
                height="650"
              />
              <BoxTitle>
                <Title>пігменти хром зелений</Title>
              </BoxTitle>
            </StyledLink>
          </Box>
        </Slider>
      </div>
    </Section>
  );
};

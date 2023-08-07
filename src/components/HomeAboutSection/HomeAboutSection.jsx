'use client';

import Container from '../Container/Container';
import {
  BoxOffer,
  Salamander,
  Pigments,
  Chip,
  ItemLink,
  Box,
  Item,
  List,
  Overlay,
  Title,
  BoxCompany,
  Subject,
  Text,
  BoxAssure,
  ListAssure,
  ItemAssure,
  StyledLink,
  SwiperImage,
} from './HomeAboutSection.styled';
import { BsArrowRight } from 'react-icons/bs';

import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeAboutSection = () => {
  const EmptyArrow = () => <div style={{ display: 'none' }}></div>;

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <EmptyArrow />,
    nextArrow: <EmptyArrow />,
    fade: true,
  };
  const images = [
    { src: '/pigment/92f4.jpeg', alt: 'Slide photo 1' },
    { src: '/pigment/000.jpg', alt: 'Slide photo 2' },
    { src: '/pigment/111.jpeg', alt: 'Slide photo 3' },
  ];

  const imagesR = [
    { src: '/pigment/111.jpeg', alt: 'Slide photo 1' },
    { src: '/pigment/abstract.jpeg', alt: 'Slide photo 2' },
    { src: '/pigment/generated.webp', alt: 'Slide photo 3' },
  ];

  const imagesP = [
    { src: '/pigment/poroshkovye.jpeg', alt: 'Slide photo 1' },
    { src: '/pigment/istock4.jpeg', alt: 'Slide photo 2' },
    { src: '/pigment/fc01.jpeg', alt: 'Slide photo 3' },
  ];

  const imagesE = [
    { src: '/pigment/000.jpg', alt: 'Slide photo 1' },
    { src: '/pigment/colourblock.jpeg', alt: 'Slide photo 2' },
    { src: '/pigment/gears.jpg', alt: 'Slide photo 3' },
  ];

  return (
    <Overlay>
      <Container>
        <BoxOffer>
          <Title>Пропозиція</Title>

          <List>
            <Item>
              <ItemLink href={`/oferta`}>
                <Chip> пігменти </Chip>порошок
              </ItemLink>
            </Item>
            <Item>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <SwiperImage
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width="250"
                    height="188"
                  />
                ))}
              </Slider>
            </Item>
            <Item>
              <ItemLink href={`/oferta`}>
                <Chip>пігменти </Chip>рідина
              </ItemLink>
            </Item>
            <Item>
              <Slider {...settings}>
                {imagesR.map((image, index) => (
                  <SwiperImage
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width="250"
                    height="188"
                  />
                ))}
              </Slider>{' '}
            </Item>
            <Item>
              <Slider {...settings}>
                {imagesP.map((image, index) => (
                  <SwiperImage
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width="250"
                    height="188"
                  />
                ))}
              </Slider>
            </Item>

            <Item>
              <ItemLink href={`/oferta`}>
                <Chip>еко-пігменти </Chip>порошок
              </ItemLink>
            </Item>
            <Item>
              <Slider {...settings}>
                {imagesE.map((image, index) => (
                  <SwiperImage
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width="250"
                    height="188"
                  />
                ))}
              </Slider>
            </Item>
            <Item>
              <ItemLink href={`/oferta`}>
                <Chip> еко-пігменти</Chip> рідина
              </ItemLink>
            </Item>
          </List>
        </BoxOffer>
        <Box>
          <BoxCompany>
            <Salamander>
              <Image
                src="/ready.png"
                alt="Salamander"
                width="500"
                height="550"
              />
            </Salamander>

            <Subject>Про компанію</Subject>
            <Text>
              <strong> ZWUKSO Sp. z o. o. Sp.k. </strong> на ринку з 1989 року.
              Ми є провідною компанією, яка займається виробництвом, імпортом та
              дистрибуцією кольорових неорганічних пігментів у Польщі. Наша
              комерційна пропозиція включає широкий спектр кольорів найякісніших
              порошкових, рідких, гранульованих і мікронізованих пігментів -
              переважно з Європейського Союзу. Крім того, ми виробляємо
              екологічні пігменти за допомогою процесу фотокаталізу.
            </Text>
            <StyledLink href={`/about`}>
              більше
              <BsArrowRight size="20px" />
            </StyledLink>
            {/*  переносить на сторінку про нас  */}
          </BoxCompany>
          <BoxAssure>
            <Subject>Запевняємо</Subject>

            <ListAssure>
              <ItemAssure>
                найбільша кольорова палітра синтетичних неорганічних пігментів у
                Польщі
              </ItemAssure>
              <ItemAssure>професійне та доброзичливе обслуговування</ItemAssure>
              <ItemAssure>привабливі ціни та висока якість</ItemAssure>
              <ItemAssure>швидке виконання замовлення</ItemAssure>
              <ItemAssure>
                використовувати для виробництва зеленої енергії з
                фотоелектричних панелей
              </ItemAssure>

              <Pigments>
                <Image
                  src="/box.png"
                  alt="paint pigments"
                  width="160"
                  height="160"
                />
              </Pigments>
            </ListAssure>

            <StyledLink href={`/about`}>
              більше
              {/*  переносить на сторінку Запевняємо */}
              <BsArrowRight size="20px" />
            </StyledLink>
          </BoxAssure>
        </Box>
      </Container>
    </Overlay>
  );
};
export default HomeAboutSection;

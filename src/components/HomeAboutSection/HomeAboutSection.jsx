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
} from './HomeAboutSection.styled';
import { BsArrowRight } from 'react-icons/bs';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const SwiperComponent = ({ photos }) => (
  <Swiper
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 100,
    }}
  >
    {photos.map((photo, index) => (
      <SwiperSlide key={index}>
        <Image
          src={photo}
          alt={`Slide photo ${index + 1}`}
          width="250"
          height="188"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

const HomeAboutSection = () => {
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
              {' '}
              <SwiperComponent
                photos={[
                  '/pigment/92f4.jpeg',
                  '/pigment/000.jpg',
                  '/pigment/111.jpeg',
                ]}
              />{' '}
            </Item>
            <Item>
              {' '}
              <ItemLink href={`/oferta`}>
                {' '}
                <Chip>пігменти </Chip>рідина
              </ItemLink>
            </Item>
            <Item>
              {' '}
              <SwiperComponent
                photos={[
                  '/pigment/111.jpeg',
                  '/pigment/abstract.jpeg',
                  '/pigment/generated.webp',
                ]}
              />{' '}
            </Item>
            <Item>
              {' '}
              <SwiperComponent
                photos={[
                  '/pigment/poroshkovye.jpeg',
                  '/pigment/istock4.jpeg',
                  '/pigment/fc01.jpeg',
                ]}
              />
            </Item>

            <Item>
              <ItemLink href={`/oferta`}>
                {' '}
                <Chip>еко-пігменти </Chip>порошок
              </ItemLink>
            </Item>
            <Item>
              {' '}
              <SwiperComponent
                photos={[
                  '/pigment/000.jpg',
                  '/pigment/colourblock.jpeg',
                  '/pigment/gears.jpg',
                ]}
              />{' '}
            </Item>
            <Item>
              <ItemLink href={`/oferta`}>
                {' '}
                <Chip> еко-пігменти</Chip> рідина{' '}
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
                width="360"
                height="450"
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
                {' '}
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
                  width="130"
                  height="130"
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

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

import imagesData from '../../../imagesData.json';

const HomeAboutSection = () => {
  const EmptyArrow = () => <div style={{ display: 'none' }}></div>;

  const settings = {
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <EmptyArrow />,
    nextArrow: <EmptyArrow />,
    fade: true,
  };

  const images = imagesData.find((item) => item.id === 'images').data;
  const imagesR = imagesData.find((item) => item.id === 'imagesR').data;

  const imagesP = imagesData.find((item) => item.id === 'imagesP').data;
  const imagesE = imagesData.find((item) => item.id === 'imagesE').data;

  return (
    <Overlay>
      <Container>
        <BoxOffer>
          <Title>Пропозиція</Title>

          <List>
            <Item>
              <ItemLink href={`/oferta`}>
                <Chip> Пігменти </Chip>порошкові
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
                    height="200"
                    sizes="100vw"
                  />
                ))}
              </Slider>
            </Item>
            <Item>
              <ItemLink href={`/oferta`}>
                <Chip>Рідкі</Chip>пігменти
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
                    height="200"
                    sizes="100vw"
                  />
                ))}
              </Slider>
            </Item>
            <Item>
              <Slider {...settings}>
                {imagesP.map((image, index) => (
                  <SwiperImage
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width="250"
                    height="200"
                    sizes="100vw"
                  />
                ))}
              </Slider>
            </Item>

            <Item>
              <ItemLink href={`/oferta`}>
                <Chip>Палстифікатори</Chip>
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
                    height="200"
                    sizes="100vw"
                  />
                ))}
              </Slider>
            </Item>
            <Item>
              <ItemLink href={`/oferta`}>
                <Chip> Інші</Chip>товари
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
                height="500"
                sizes="100vw"
              />
            </Salamander>

            <Subject>Про компанію</Subject>
            <Text>
              <strong> Приватне підприємство &rsquo;Хімбрук&rsquo; </strong> на
              ринку з 2006 року. Підприємство займається імпортом та
              дистрибуцією неорганічних синтетичних пігментів та різноманітних
              добавок які використовуються у різних галузях промисловості таких
              як: виробництва виробів з бетону, будівельних матеріалів,
              лакофарбової продукції штучних пластмас та ін.
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
                Широка кольорова палітра неорганічних синтетичних пігментів.
              </ItemAssure>
              <ItemAssure>Професійна консультація</ItemAssure>
              <ItemAssure>Привабливі ціни та висока якість</ItemAssure>
              <ItemAssure>Швидке виконання замовлення</ItemAssure>
              <ItemAssure>
                Здійснюємо доставку по всій країні
                <Pigments>
                  <Image
                    src="/box.png"
                    alt="paint pigments"
                    width="160"
                    height="160"
                    sizes="100vw"
                  />
                </Pigments>
              </ItemAssure>
            </ListAssure>

            <StyledLink href={`/about`}>
              більше
              <BsArrowRight size="20px" />
            </StyledLink>
          </BoxAssure>
        </Box>
      </Container>
    </Overlay>
  );
};
export default HomeAboutSection;

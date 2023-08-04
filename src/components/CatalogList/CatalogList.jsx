'use client';
import { catalog } from './dataCatalogList';
import Link from 'next/link';

import {
  ListCatalog,
  ItemListCatalog,
  StyledImage,
  WrapContentCard,
  ThumbCardImg,
  Container,
  WrapNav,
  CurrentNavDecor,
  StyledLink,
  TitleCard,
  ProductTitleCard,
  DecorSpanBackLink,
} from './CatalogList.styled';

const CatalogList = () => {
  console.log(catalog);
  return (
    <Container>
      <div>
        <WrapNav>
          <Link href={`/home`}>
            <DecorSpanBackLink>Головна /</DecorSpanBackLink>
          </Link>
          <CurrentNavDecor>Каталог</CurrentNavDecor>
        </WrapNav>
        <TitleCard>Каталог</TitleCard>
        <ListCatalog>
          {catalog.map((item) => (
            <ItemListCatalog key={item.id}>
              <StyledLink
                href={{
                  pathname: `/oferta/${item.url}`,
                  query: { id: item.id },
                }}
              >
                <ThumbCardImg>
                  <StyledImage
                    priority
                    src={item.img}
                    alt={item.title}
                    width={350}
                    height={180}
                  />
                </ThumbCardImg>
                <WrapContentCard>
                  <ProductTitleCard>{item.title}</ProductTitleCard>
                </WrapContentCard>
              </StyledLink>
            </ItemListCatalog>
          ))}
        </ListCatalog>
      </div>
    </Container>
  );
};

export default CatalogList;

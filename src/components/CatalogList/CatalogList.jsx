'use client';

import Link from 'next/link';
import { slugify } from 'transliteration';
import BtnBuy from '../BtnBuy/BtnBuy';
import { useGetOfertaQuery } from '@/src/redux/ofertaApi/ofertaApi';
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
import Spinner from '../SpinerOferta/SpinerOferta';

const CatalogList = () => {
  const { data, isError, isLoading } = useGetOfertaQuery();

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
          {isLoading ? (
            <Spinner />
          ) : (
            data?.map((item) => (
              <ItemListCatalog key={item._id}>
                <StyledLink
                  href={{
                    pathname: `/oferta/${slugify(item.name)}`,
                    query: { id: item._id, country: item._id },
                  }}
                >
                  <ThumbCardImg>
                    <StyledImage
                      priority
                      src={item.url}
                      alt={item.name}
                      width={350}
                      height={180}
                    />
                  </ThumbCardImg>
                  <WrapContentCard>
                    <ProductTitleCard>{item.name}</ProductTitleCard>
                    <BtnBuy />
                  </WrapContentCard>
                </StyledLink>
              </ItemListCatalog>
            ))
          )}
        </ListCatalog>
      </div>
    </Container>
  );
};

export default CatalogList;

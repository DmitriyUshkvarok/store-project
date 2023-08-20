'use client';

import Link from 'next/link';
import { slugify } from 'transliteration';
import { useDispatch } from 'react-redux';
import { setDataAndId } from '@/src/redux/ofertaApi/ofertaSlice';
import { useGetOfertaQuery } from '@/src/redux/ofertaApi/ofertaApi';
import {
  ListCatalog,
  ItemListCatalog,
  StyledImage,
  WrapContentCard,
  Container,
  WrapNav,
  CurrentNavDecor,
  StyledLink,
  TitleCard,
  ProductTitleCard,
  DecorSpanBackLink,
  Box,
} from './CatalogList.styled';
import Spinner from '../SpinerOferta/SpinerOferta';

const CatalogList = () => {
  const { data, isLoading } = useGetOfertaQuery();

  const dispatch = useDispatch();
  const handleChooseCategory = (category) => {
    dispatch(setDataAndId(category));
  };
  return (
    <Container>
      <Box>
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
              <ItemListCatalog
                key={item?._id}
                onClick={() => handleChooseCategory(item)}
              >
                <StyledLink
                  href={{
                    pathname: `/oferta/${slugify(item?.name)}`,
                  }}
                >
                  <StyledImage
                    priority
                    src={item?.url}
                    alt={item?.name}
                    width={350}
                    height={180}
                  />

                  <WrapContentCard>
                    <ProductTitleCard>{item?.name}</ProductTitleCard>
                  </WrapContentCard>
                </StyledLink>
              </ItemListCatalog>
            ))
          )}
        </ListCatalog>
      </Box>
    </Container>
  );
};

export default CatalogList;

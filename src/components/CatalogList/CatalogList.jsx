'use client';

import Link from 'next/link';
import { slugify } from 'transliteration';
import BtnBuy from '../BtnBuy/BtnBuy';
import { useDispatch } from 'react-redux';
import { setDataAndId } from '@/src/redux/ofertaApi/ofertaSlice';
import {
  useGetOfertaQuery,
  useGetAllProductQuery,
} from '@/src/redux/ofertaApi/ofertaApi';
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
  const { data, isLoading } = useGetOfertaQuery();

  const dispatch = useDispatch();
  const handleChooseCountry = (country) => {
    dispatch(setDataAndId(country));
  };
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
              <ItemListCatalog
                key={item._id}
                onClick={() => handleChooseCountry(item)}
              >
                <StyledLink
                  href={{
                    pathname: `/oferta/${slugify(item.name)}`,
                  }}
                >
                  <StyledImage
                    priority
                    src={item.url}
                    alt={item.name}
                    width={350}
                    height={180}
                  />

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

'use client';
import Link from 'next/link';
import { slugify } from 'transliteration';
import { useParams, useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { useGetCountryCategoryQuery } from '@/src/redux/ofertaApi/ofertaApi';
import { setDataAndIdCategoty } from '@/src/redux/ofertaApi/ofertaSlice';
import Spinner from '../SpinerOferta/SpinerOferta';
import BtnBuy from '../BtnBuy/BtnBuy';
import {
  WrapNav,
  DecorSpanBackLink,
  CurrentNavDecor,
  ItemListCatalog,
  WrapContentCard,
  ProductTitleCard,
  StyledImage,
  ThumbCardImg,
  ListCatalog,
  Container,
  StyledLink,
  TitleCard,
} from '@/src/components/CatalogList/CatalogList.styled';

const DynamicCatalogList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const countryId = useSearchParams().getAll('country');

  const { data, isError, isLoading } = useGetCountryCategoryQuery(countryId);
  const country = useSelector((state) => state.oferta.countrie);

  const handleChooseCategory = (caterory) => {
    dispatch(setDataAndIdCategoty(caterory));
  };

  return (
    <Container>
      <WrapNav>
        <Link href={`/home`}>
          <DecorSpanBackLink>Головна /</DecorSpanBackLink>
        </Link>
        <Link href={`/oferta`}>
          <DecorSpanBackLink>Каталог /</DecorSpanBackLink>
        </Link>
        <CurrentNavDecor>{country.name}</CurrentNavDecor>
      </WrapNav>
      <TitleCard>{country.name}</TitleCard>
      <ListCatalog>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.map((product) => (
            <ItemListCatalog
              onClick={() => handleChooseCategory(product)}
              key={product._id}
            >
              <StyledLink
                href={{
                  pathname: `/oferta/${params.product}/${slugify(
                    product.name
                  )}`,
                  query: {
                    country: countryId,
                    category: product._id,
                  },
                }}
              >
                <StyledImage
                  priority
                  src={product.url}
                  alt={product.name}
                  width={350}
                  height={180}
                />

                <WrapContentCard>
                  <ProductTitleCard>{product.name}</ProductTitleCard>
                  <BtnBuy />
                </WrapContentCard>
              </StyledLink>
            </ItemListCatalog>
          ))
        )}
      </ListCatalog>
    </Container>
  );
};

export default DynamicCatalogList;

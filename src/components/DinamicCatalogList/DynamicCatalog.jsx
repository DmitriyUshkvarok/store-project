'use client';
import Link from 'next/link';
import { slugify } from 'transliteration';
import { useParams, useSearchParams } from 'next/navigation';
import { useGetCountryCategoryQuery } from '@/src/redux/ofertaApi/ofertaApi';
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
  const countryId = useSearchParams().getAll('country');
  const id = useSearchParams().get('id');
  const { data, isError, isLoading } = useGetCountryCategoryQuery(id);

  return (
    <Container>
      <WrapNav>
        <Link href={`/home`}>
          <DecorSpanBackLink>Головна /</DecorSpanBackLink>
        </Link>
        <Link href={`/oferta`}>
          <DecorSpanBackLink>Каталог /</DecorSpanBackLink>
        </Link>
        <CurrentNavDecor>{data?.name}</CurrentNavDecor>
      </WrapNav>
      <TitleCard>{data?.name}</TitleCard>
      <ListCatalog>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.categories?.map((product) => (
            <ItemListCatalog key={product._id}>
              <StyledLink
                href={{
                  pathname: `/oferta/${params.product}/${slugify(
                    product.name
                  )}`,
                  query: { id: product._id, country: countryId },
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

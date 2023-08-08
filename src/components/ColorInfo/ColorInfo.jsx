'use client';
import Link from 'next/link';
import { slugify } from 'transliteration';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useGetColorQuery } from '@/src/redux/ofertaApi/ofertaApi';
import Spinner from '@/src/components/SpinerOferta/SpinerOferta';

import BtnBuy from '@/src/components/BtnBuy/BtnBuy';
import BtnBackNav from '../BtnBackNav/BtnBackNav';
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
import transliterateToCyrillic from '@/src/helper/translation';

const ColorInfo = () => {
  const params = useParams();
  const router = useRouter();
  const id = useSearchParams().get('id');
  const countryId = useSearchParams().getAll('country');

  const { data, isError, isLoading } = useGetColorQuery(id);

  const handlClickBack = () => {
    router.back();
  };
  const cyrilicaProductName = transliterateToCyrillic(params.product);
  const cyrilicaSubProductName = transliterateToCyrillic(params.subProduct);

  return (
    <Container>
      <WrapNav>
        <Link href={`/home`}>
          <DecorSpanBackLink>Головна /</DecorSpanBackLink>
        </Link>
        <Link href={`/oferta`}>
          <DecorSpanBackLink>Каталог /</DecorSpanBackLink>
        </Link>
        <Link
          href={`/oferta/${params.product}?id=${countryId}&country=${countryId}`}
        >
          <DecorSpanBackLink>{cyrilicaProductName} /</DecorSpanBackLink>
        </Link>
        <DecorSpanBackLink>
          {' '}
          <BtnBackNav click={handlClickBack} text={cyrilicaSubProductName} />
        </DecorSpanBackLink>

        <CurrentNavDecor>/ {data?.name}</CurrentNavDecor>
      </WrapNav>
      <TitleCard>{data?.name}</TitleCard>
      <ListCatalog>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.colors.map((color) => (
            <ItemListCatalog key={color._id}>
              <StyledLink
                href={{
                  pathname: `/oferta/${params.product}/${params.subProduct}/${
                    params.color
                  }/${slugify(color.name)}`,
                  query: { id: color._id, country: countryId },
                }}
              >
                <StyledImage
                  priority
                  src={color.url}
                  alt={color.name}
                  width={350}
                  height={180}
                />

                <WrapContentCard>
                  <ProductTitleCard>{color.name}</ProductTitleCard>
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

export default ColorInfo;

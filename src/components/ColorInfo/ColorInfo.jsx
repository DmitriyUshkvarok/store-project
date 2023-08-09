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
import { useDispatch, useSelector } from 'react-redux';

const ColorInfo = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const countryName = useSelector((state) => state.oferta.countrie.name);
  const categoryName = useSelector((state) => state.oferta.categoty.name);
  const subcategoryName = useSelector((state) => state.oferta.subcategory.name);
  const countryId = useSearchParams().getAll('country');
  const categoryId = useSearchParams().getAll('category');
  const subcategoryId = useSearchParams().getAll('subcategory');

  const { data, isError, isLoading } = useGetColorQuery({
    countryId,
    categoryId,
    subcategoryId,
  });

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
          <DecorSpanBackLink>{countryName} /</DecorSpanBackLink>
        </Link>
        <DecorSpanBackLink>
          <BtnBackNav click={handlClickBack} text={categoryName} />
        </DecorSpanBackLink>

        <CurrentNavDecor>/ {subcategoryName}</CurrentNavDecor>
      </WrapNav>
      <TitleCard>{subcategoryName}</TitleCard>
      <ListCatalog>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.map((color) => (
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

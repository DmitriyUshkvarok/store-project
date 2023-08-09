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
import { setDataAndIdColor } from '@/src/redux/ofertaApi/ofertaSlice';

const ColorInfo = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.oferta.countrie);
  const category = useSelector((state) => state.oferta.categoty);
  const subcategory = useSelector((state) => state.oferta.subcategory);
  // const countryId = useSearchParams().getAll('country');
  // const categoryId = useSearchParams().getAll('category');
  // const subcategoryId = useSearchParams().getAll('subcategory');

  const { data, isError, isLoading } = useGetColorQuery({
    countryId: country.id,
    categoryId: category.id,
    subcategoryId: subcategory.id,
  });

  const handlClickBack = () => {
    router.back();
  };

  const handleChooseSubColor = (color) => {
    dispatch(setDataAndIdColor(color));
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
        <Link href={`/oferta/${params.product}?id=${country.id}`}>
          <DecorSpanBackLink>{country.name} /</DecorSpanBackLink>
        </Link>
        <DecorSpanBackLink>
          <BtnBackNav click={handlClickBack} text={category.name} />
        </DecorSpanBackLink>

        <CurrentNavDecor>/ {subcategory.name}</CurrentNavDecor>
      </WrapNav>
      <TitleCard>{subcategory.name}</TitleCard>
      <ListCatalog>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.map((color) => (
            <ItemListCatalog
              onClick={() => handleChooseSubColor(color)}
              key={color._id}
            >
              <StyledLink
                href={{
                  pathname: `/oferta/${params.product}/${params.subProduct}/${
                    params.color
                  }/${slugify(color.name)}`,
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

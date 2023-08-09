'use client';

import Link from 'next/link';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { slugify } from 'transliteration';
import { useGetSubCategoryQuery } from '@/src/redux/ofertaApi/ofertaApi';
import BtnBackNav from '@/src/components/BtnBackNav/BtnBackNav';
import BtnBuy from '../BtnBuy/BtnBuy';
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
} from '@/src/components/CatalogList/CatalogList.styled';
import Spinner from '../SpinerOferta/SpinerOferta';
import transliterateToCyrillic from '@/src/helper/translation';
import { useSelector, useDispatch } from 'react-redux';
import { setDataAndIdSubCategoty } from '@/src/redux/ofertaApi/ofertaSlice';

const SubProductCatalog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const countrie = useSelector((state) => state.oferta.countrie);
  const category = useSelector((state) => state.oferta.categoty);

  // const countryId = useSearchParams().getAll('country');
  // const categoryId = useSearchParams().getAll('category');

  const router = useRouter();
  const { data, isError, isLoading } = useGetSubCategoryQuery({
    countryId: countrie.id,
    categoryId: category.id,
  });

  const handlClickBack = () => {
    router.back();
  };

  const handleChooseSubCategory = (subcaterory) => {
    dispatch(setDataAndIdSubCategoty(subcaterory));
  };
  return (
    <Container>
      <WrapNav>
        <Link href={`/home`}>
          <DecorSpanBackLink></DecorSpanBackLink>Головна /
        </Link>
        <Link href={`/oferta`}>
          <DecorSpanBackLink> Каталог /</DecorSpanBackLink>
        </Link>
        <BtnBackNav click={handlClickBack} text={countrie.name} />
        <CurrentNavDecor>/ {category.name}</CurrentNavDecor>
      </WrapNav>
      <TitleCard>{category.name}</TitleCard>
      <div>
        <ListCatalog>
          {isLoading ? (
            <Spinner />
          ) : (
            data?.map((product) => (
              <ItemListCatalog
                onClick={() => handleChooseSubCategory(product)}
                key={product._id}
              >
                <StyledLink
                  href={{
                    pathname: `/oferta/${params.product}/${
                      params.subProduct
                    }/${slugify(product.name)}`,
                  }}
                >
                  <StyledImage
                    priority
                    src={product?.url}
                    alt={product?.name}
                    width={350}
                    height={180}
                  />
                  <WrapContentCard>
                    <ProductTitleCard>{product?.name}</ProductTitleCard>
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

export default SubProductCatalog;

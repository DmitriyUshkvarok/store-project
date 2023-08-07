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

const SubProductCatalog = () => {
  const params = useParams();
  const id = useSearchParams().get('id');
  const router = useRouter();
  const { data, isError, isLoading } = useGetSubCategoryQuery(id);

  const handlClickBack = () => {
    router.back();
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
        <BtnBackNav click={handlClickBack} text={params.product} />
        <CurrentNavDecor>/{data?.name}</CurrentNavDecor>
      </WrapNav>
      <TitleCard>{data?.name}</TitleCard>
      <div>
        <ListCatalog>
          {isLoading ? (
            <Spinner />
          ) : (
            data?.subcategories?.map((product) => (
              <ItemListCatalog key={product._id}>
                <StyledLink
                  href={{
                    pathname: `/oferta/${params.product}/${
                      params.subProduct
                    }/${slugify(product.name)}`,
                    query: { id: product._id },
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

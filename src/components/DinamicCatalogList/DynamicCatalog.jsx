'use client';
import { products } from '@/src/components/CatalogList/dataCatalogList';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import {
  WrapNav,
  DecorSpanBackLink,
  CurrentNavDecor,
} from '@/src/components/CatalogList/CatalogList.styled';
import {
  ListDynamic,
  Container,
  StyledLink,
  ItemListDynamic,
} from './DynamicCategory.styled';

const DynamicCatalogList = () => {
  const params = useParams();

  const id = useSearchParams().get('id');
  return (
    <Container>
      <WrapNav>
        <Link href={`/home`}>
          <DecorSpanBackLink>Головна /</DecorSpanBackLink>
        </Link>
        <Link href={`/oferta`}>
          <DecorSpanBackLink>Каталог /</DecorSpanBackLink>
        </Link>
        <CurrentNavDecor>{params.product}</CurrentNavDecor>
      </WrapNav>
      <ListDynamic>
        {products.map((product) => (
          <ItemListDynamic key={product.id}>
            <StyledLink
              href={{
                pathname: `${`/oferta/${params.product}/${product.url}`}`,
                query: { id: product.id },
              }}
            >
              <h3>{product.title}</h3>
              <Image
                src={product.img}
                alt={product.title}
                width={300}
                height={200}
              />
            </StyledLink>
          </ItemListDynamic>
        ))}
      </ListDynamic>
    </Container>
  );
};

export default DynamicCatalogList;

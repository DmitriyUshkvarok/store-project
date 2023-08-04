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

const DynamicCatalogList = () => {
  const params = useParams();

  const id = useSearchParams().get('id');
  return (
    <div>
      <WrapNav>
        <Link href={`/home`}>
          <DecorSpanBackLink>Головна /</DecorSpanBackLink>
        </Link>
        <Link href={`/oferta`}>
          <DecorSpanBackLink>Каталог /</DecorSpanBackLink>
        </Link>
        <CurrentNavDecor>{params.product}</CurrentNavDecor>
      </WrapNav>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicCatalogList;

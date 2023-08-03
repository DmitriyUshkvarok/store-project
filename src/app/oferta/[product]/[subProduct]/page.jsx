'use client';

import { subProduct } from '@/src/components/CatalogList/dataCatalogList';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

const SubProductPage = () => {
  const params = useParams();
  const search = useSearchParams().get('id');
  console.log(search);
  return (
    <div>
      <div>
        <Link href={`/home`}>Головна/</Link>{' '}
        <Link href={`/oferta`}>Каталог/</Link>
        <Link href={`/oferta/${params.product}`}>{params.product}/</Link>
        <span>{params.subProduct}</span>
      </div>
      <div>
        <ul>
          {subProduct.map((product) => (
            <li key={product.id}>
              <Link
                href={{
                  pathname: `${`/oferta/${params.product}/${params.subProduct}/${product.url}`}`,
                  query: { id: product.id },
                }}
              >
                <Image
                  src={product.img}
                  alt={product.title}
                  width={300}
                  height={200}
                />
                <p>{product.title}</p>
                <p>{product.price}</p>
                <button type="button">Купити</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubProductPage;

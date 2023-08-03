'use client';
import { products } from '@/src/components/CatalogList/dataCatalogList';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

const ProductPage = () => {
  const params = useParams();

  const search = useSearchParams().get('id');
  console.log(search);
  return (
    <div>
      <div>
        <Link href={`/home`}>Головна/</Link>
        <Link href={`/oferta`}>Каталог/</Link>
        <span>{params.product}</span>
      </div>
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

export default ProductPage;

'use client';

import { infoProduct } from '@/src/components/CatalogList/dataCatalogList';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

const InfoPage = () => {
  const search = useSearchParams().get('id');
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div>
        <Link href={`/home`}>Головна/</Link>{' '}
        <Link href={`/oferta`}>Каталог/</Link>
        <Link href={`/oferta/${params.product}`}>{params.product}/</Link>
        <Link href={`/oferta/${params.product}/${params.subProduct}`}>
          {params.subProduct}/
        </Link>
        <span>{params.info}</span>
      </div>
      <div>
        <Image
          src={infoProduct.img}
          alt={infoProduct.title}
          width={600}
          height={600}
        />
        <h3>{infoProduct.title}</h3>
        <p>{infoProduct.price}</p>
        <input type="number" />
        <button type="button">Купити</button>
        <p>Артикуль: {infoProduct.articl}</p>
        <p>Категорія: {infoProduct.category}</p>
      </div>
      <div>
        <p>Опис</p>
        <p>{infoProduct.desc}</p>
      </div>
    </div>
  );
};

export default InfoPage;

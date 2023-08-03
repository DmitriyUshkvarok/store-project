'use client';
import { catalog } from './dataCatalogList';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CatalogList = () => {
  <div>
    <Link href={`/home`}>Головна</Link>;
  </div>;

  return (
    <div>
      <div>
        <Link href={`/home`}>Головна/</Link> <span>Каталог</span>
      </div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {catalog.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: `/oferta/${item.url}`,
                query: { id: item.id },
              }}
            >
              <h2>{item.title}</h2>
              <Image src={item.img} alt={item.title} width={300} height={200} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;

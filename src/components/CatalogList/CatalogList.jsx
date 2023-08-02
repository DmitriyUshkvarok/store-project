import { items } from './dataCatalogList';
import Link from 'next/link';
import Image from 'next/image';

const CatalogList = () => {
  return (
    <div>
      <h1>Catalog List</h1>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/offer/${item.title}`}>
              <h2>{item.title}</h2>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
              />
              <p>{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;

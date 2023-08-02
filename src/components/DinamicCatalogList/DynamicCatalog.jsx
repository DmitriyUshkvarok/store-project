'use client';
import { items } from '@/src/components/CatalogList/dataCatalogList';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const DynamicCatalogList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();
  const item = items.find((item) => item.title === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleProductClick = (image) => {
    setSelectedProduct(image);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {item.imageData.map((image) => (
          <li key={image.id} onClick={() => handleProductClick(image)}>
            <h4>{image.title}</h4>
            <Image
              src={image.image}
              alt={image.title}
              width={300}
              height={200}
            />
            <p>{image.description}</p>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <ProductDetail image={selectedProduct} onClose={handleCloseProduct} />
      )}
    </div>
  );
};

export default DynamicCatalogList;

'use client';
import Image from 'next/image';

const ProductDetail = ({ image, onClose }) => {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h4>{image.title}</h4>
      <Image src={image.image} alt={image.title} width={300} height={200} />
      <p>{image.description}</p>
    </div>
  );
};

export default ProductDetail;

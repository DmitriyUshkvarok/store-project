import dynamic from 'next/dynamic';

const ProductDetail = dynamic(() =>
  import('../../../../components/ProductDetail/ProductDetail')
);

const InfoPage = () => {
  return (
    <div>
      <ProductDetail />
    </div>
  );
};

export default InfoPage;

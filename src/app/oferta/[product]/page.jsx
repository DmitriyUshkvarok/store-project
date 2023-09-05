import dynamic from 'next/dynamic';

const DynamicCatalogList = dynamic(() =>
  import('../../../components/DinamicCatalogList/DynamicCatalog')
);

const ProductPage = () => {
  return <DynamicCatalogList />;
};

export default ProductPage;

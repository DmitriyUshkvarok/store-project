import dynamic from 'next/dynamic';

const CatalogList = dynamic(() =>
  import('../../components/CatalogList/CatalogList')
);

const Oferta = () => {
  return (
    <>
      <CatalogList />
    </>
  );
};

export default Oferta;

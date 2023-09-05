import dynamic from 'next/dynamic';

const AllProducts = dynamic(() =>
  import('../../components/AllProducts/AllProducts')
);

const AllProductsComp = () => {
  return (
    <div>
      <AllProducts />
    </div>
  );
};

export default AllProductsComp;

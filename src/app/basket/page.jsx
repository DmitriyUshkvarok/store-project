import dynamic from 'next/dynamic';

const BasketContent = dynamic(() =>
  import('../../components/BasketContent/BasketContent')
);

const Basket = () => {
  return (
    <>
      <BasketContent />
    </>
  );
};

export default Basket;

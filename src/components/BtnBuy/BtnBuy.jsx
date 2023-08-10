import { BsArrowRight } from 'react-icons/bs';
import { Btn } from './BynBuy.styled';

const BtnBuy = ({ handleBuy, isAddedToCart }) => {
  return (
    <Btn type="button" onClick={handleBuy} disabled={isAddedToCart}>
      {isAddedToCart ? 'Товар у кошику' : 'Купити'}
    </Btn>
  );
};

export default BtnBuy;

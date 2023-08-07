import { BsArrowRight } from 'react-icons/bs';
import { Btn } from './BynBuy.styled';

const BtnBuy = ({ handleBuy }) => {
  return (
    <Btn type="button" onClick={handleBuy}>
      Купити
      <BsArrowRight size="18px" />
    </Btn>
  );
};

export default BtnBuy;

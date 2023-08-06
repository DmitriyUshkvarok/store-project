import { Btn } from './BynBuy.styled';

const BtnBuy = ({ handleBuy }) => {
  return (
    <Btn type="button" onClick={handleBuy}>
      Купити
    </Btn>
  );
};

export default BtnBuy;

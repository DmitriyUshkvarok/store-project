import { Btn } from './ButtonWhiteAndBlack.styled';

const ButtonWhiteAndBlack = ({ onClick, disabled, children }) => {
  return (
    <Btn type="button" onClick={onClick} disabled={disabled}>
      {children}
    </Btn>
  );
};

export default ButtonWhiteAndBlack;

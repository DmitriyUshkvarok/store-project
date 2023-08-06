import { Btn } from './BtnBackNav.styled';

const BtnBackNav = ({ text, click }) => {
  return <Btn onClick={click}>{text}</Btn>;
};

export default BtnBackNav;

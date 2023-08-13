'use client';
import { HeaderBox, ImageStyled, StyleHeader } from './Header.styled';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <StyleHeader>
      <HeaderBox>
        <Navigation />
        <ImageStyled
          src="/182ukr.png"
          alt={'роки на ринку'}
          width={150}
          height={250}
        ></ImageStyled>
      </HeaderBox>
    </StyleHeader>
  );
};

export default Header;

'use client';
import {
  BoxForYear,
  HeaderBox,
  ImageStyled,
  StyleHeader,
} from './Header.styled';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <StyleHeader>
      <Container>
        <HeaderBox>
          <Navigation />
          <ImageStyled
            src="/182ukr.png"
            alt={'роки на ринку'}
            width={125}
            height={206}
          ></ImageStyled>
        </HeaderBox>
      </Container>
    </StyleHeader>
  );
};

export default Header;

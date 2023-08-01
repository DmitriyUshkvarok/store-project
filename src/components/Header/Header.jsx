'use client';
import { StyleHeader } from './Header.styled';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div>
      <StyleHeader>
        <Container>
          <Navigation />
        </Container>
      </StyleHeader>
    </div>
  );
};

export default Header;

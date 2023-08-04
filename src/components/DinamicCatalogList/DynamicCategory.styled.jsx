import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 20px;

  background-color: #c0c0c01c;

  @media screen and (min-width: 768px) {
    padding: 40px 62px;
  }

  @media screen and (min-width: 1340px) {
    padding: 40px 143px;
  }
`;

export const ListDynamic = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  transition: color 0.3s ease;

  &:hover {
    color: grey;
  }
`;

export const ItemListDynamic = styled.li`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

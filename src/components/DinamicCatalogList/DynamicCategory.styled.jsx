import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px 20px;

  background-color: #c0c0c01c;

  @media screen and (min-width: 768px) {
    padding: 70px 62px;
  }

  @media screen and (min-width: 1340px) {
    padding: 70px 143px;
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
    color: #414141;
  }
`;

export const ItemListDynamic = styled.li`
  transition: transform 0.3s ease;
  background-color: #c4c3c394;
  border-radius: 5px;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  padding: 10px 8px;
  color: white;

  &:hover {
    transform: scale(1.1);
  }
`;

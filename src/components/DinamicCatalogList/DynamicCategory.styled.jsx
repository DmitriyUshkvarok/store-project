import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px 20px;

  background-color: #80808029;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 70px 62px;
  }

  @media screen and (min-width: 1340px) {
    padding: 70px 118px;
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

export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px 20px;

  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  @media screen and (min-width: 1000px) {
    justify-content: start;
  }
`;

export const Box = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;
  padding-top: 30px;
  border-top: 4px solid gray;
  @media screen and (max-width: 710px) {
    flex-direction: column;
    gap: 40px;
  }
  @media screen and (min-width: 1000px) {
    justify-content: start;
  }
`;

export const Boxer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (min-width: 1060px) {
    justify-content: start;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const BoxAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const Box = styled.div`
  padding-bottom: 100px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const BoxCategory = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const BtnPlus = styled.button`
  border: none;
  background: none;

  &:hover {
    scale: calc(1.3);
  }
`;

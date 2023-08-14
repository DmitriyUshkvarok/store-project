import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: 30px;
  font-size: 18px;
`;
export const Box = styled.div`
  padding-top: 50px;
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

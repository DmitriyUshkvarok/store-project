import Image from 'next/image';
import styled from 'styled-components';

export const StyleHeader = styled.header`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  background-color: #242424;
  width: 100%;
  height: 53px;
  z-index: 999;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    justify-content: flex-end;
  }
`;

export const ImageStyled = styled(Image)`
  @media screen and (min-width: 1100px) {
    margin-left: 105px;
  }
  position: relative;
  margin-left: 35px;
  width: 125px;
  height: 206px;
  /* height: auto; */
  z-index: 1111111;

  @media screen and (max-width: 606px) {
    display: none;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 580px) {
    margin-right: 20px;
  }
`;

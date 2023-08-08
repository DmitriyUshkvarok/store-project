import Image from 'next/image';
import styled from 'styled-components';

export const StyleHeader = styled.header`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  background-color: #242424;
  width: 100%;
  height: 53px;
  z-index: 999;
  display: flex;
`;

export const ImageStyled = styled(Image)`
  position: relative;
  margin-left: 70px;
  width: 125px;
  height: 206px;
  z-index: 1111111;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

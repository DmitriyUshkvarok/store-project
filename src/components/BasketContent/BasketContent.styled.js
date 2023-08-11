import styled from 'styled-components';
import Link from 'next/link';

export const BasketSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-color: #80808029;
  padding-top: 140px;
  padding-bottom: 40px;
`;

export const BasketTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 38px;
  margin-bottom: 20px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
`;

export const InfoTextOddersClear = styled.div`
  text-align: center;
  margin-top: 10px;
  text-transform: uppercase;
  font-weight: 500;
  color: #222;
`;

export const StyleLink = styled(Link)`
  color: lightcoral;
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 10px;
`;

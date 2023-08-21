import styled from 'styled-components';
import Link from 'next/link';

export const BasketSection = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Box = styled.div`
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

export const BasketTitle = styled.h2`
  font-weight: 500;
  font-size: 38px;
  margin-top: 30px;
`;

export const InfoTextOddersClear = styled.div`
  text-align: center;
  margin-top: 10px;
  font-weight: 400;
`;

export const StyleLink = styled(Link)`
  font-size: 12px;
  display: block;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: blue;
  text-decoration: underline;

  &:hover,
  &focus {
    text-decoration: none;
  }
`;

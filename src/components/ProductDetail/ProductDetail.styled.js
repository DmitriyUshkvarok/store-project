import styled from 'styled-components';
import Link from 'next/link';

export const ProductDetailSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-image: url('/background-basket-page.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const LinkPanel = styled.div`
  padding: 7px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StyleLinkDetail = styled(Link)`
  color: aqua;
  font-weight: bold;
  text-decoration: underline;
`;

export const CurrentLink = styled.span`
  color: gold;
`;

export const ProductDetailInfoBlock = styled.div`
  display: flex;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 20px;
`;

export const ProductСharacterization = styled.p`
  color: gold;
  text-align: center;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  text-align: start;
  color: black;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProductArticul = styled.div`
  color: gold;
  margin-bottom: 10px;
`;

export const ProductCategory = styled.p`
  font-weight: bold;
  color: black;
`;

export const CategorySpan = styled.span`
  color: lightcoral;
  font-weight: normal;
`;

export const ProductBlockLeft = styled.div`
  padding: 20px;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7);
  border-radius: 20px;
`;

export const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

export const ProductName = styled.p`
  color: gold;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ProductPrice = styled.p`
  margin-top: 10px;
  color: gold;
  text-transform: uppercase;
  text-align: center;
`;

export const SpanPrice = styled.span`
  color: aqua;
`;

export const ProductBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7);
  border-radius: 20px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  max-width: 100px;
  padding: 5px;
  margin-top: auto;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const BtnIncrement = styled.button`
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: aqua;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(2);
  }
`;

export const InputCounter = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: transparent;
  color: aqua;
  width: 100%;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  text-align: center;
`;

export const BtnDecrement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: aqua;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.7);
  }
`;

export const OrderBtnDetails = styled.button`
  width: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  color: lightgreen;
  text-transform: uppercase;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
  transition: 0.4s;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: green;
  }
`;

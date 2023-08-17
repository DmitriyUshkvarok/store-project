import styled from 'styled-components';
import Image from 'next/image';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export const NotOrderWrapper = styled.div`
  max-width: 800px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
`;

export const NotOrder = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: lightcoral;
`;

export const CartListSection = styled.div`
  margin-top: 30px;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  /* background-color: rgba(0, 0, 0, 0.1); */
  padding: 10px;
  border-radius: 4px;
`;

export const TotalPriceTitle = styled.h4`
  margin-right: 10px;
  font-weight: normal;
  color: gray;
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalWeight = styled.div`
  font-weight: normal;
  color: gray;
  font-size: 1.5rem;
`;

export const SpanTotalWeight = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #222;
  margin-left: 10px;
`;

export const TotalPriceInfo = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #222;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  /* background-color: rgba(0, 0, 0, 0.1); */
  border-radius: 4px;
`;

export const CartListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7);
  border-radius: 4px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyleCartImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 100px;
  border-radius: 10px 0 0 10px;
`;

export const OrdersGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SubOrdersInfo = styled.div`
  color: lightcoral;
`;

export const ProductName = styled.h3`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 100px;
  padding: 5px;
`;

export const BtnIncrement = styled.button`
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: #222;
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
  color: #222;
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
  color: #222;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.7);
  }
`;

export const DataInfo = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: gray;
  text-shadow: 1px, 1px, 1px black;
`;

export const StylePrice = styled.div`
  color: #222;
`;

export const StyleQuantity = styled.div`
  color: gray;
`;

export const StyleRiDeleteBin5Fill = styled(RiDeleteBin5Fill)`
  color: coral;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.3);
  }
`;

import styled from 'styled-components';
import Image from 'next/image';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export const NotOrderWrapper = styled.div`
  max-width: 800px;
  /* padding: 30px; */
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  /* border-radius: 4px; */
`;

export const NotOrder = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #e3010f;
`;

export const CartListSection = styled.div`
  /* margin-top: 30px; */
  padding-top: 30px;
  border-top: 4px solid gray;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const TotalPriceTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalWeight = styled.p`
  font-weight: 400;
  font-size: 14px;
`;

export const SpanTotalWeight = styled.span`
  font-weight: 500;
  font-size: 15px;
  margin-left: 10px;
`;

export const TotalPriceInfo = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-left: 10px;
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
  /* align-items: center; */
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  gap: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyleCartImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 100px;
`;

export const OrdersGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid red; */

  @media screen and (min-width: 1000px) {
    width: 120px;
  }
`;

export const SubOrdersInfo = styled.div`
  font-size: 13px;
  font-weight: 300;
`;

export const ProductName = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 10px;
  /* margin-bottom: 10px; */
  height: 40px;
`;

export const ProductNameTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  margin-top: auto;
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  max-width: 70px;
  padding: 5px;
`;

export const BtnIncrement = styled.button`
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
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
  font-size: 13px;
  background-color: transparent;
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
  font-size: 10px;
  margin-top: 10px;
  font-weight: 700;
  color: gray;
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

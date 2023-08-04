import styled from 'styled-components';
import Image from 'next/image';

export const NotOrderWrapper = styled.div`
  max-width: 800px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
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
  justify-content: end;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
`;

export const TotalPriceTitle = styled.h4`
  color: gold;
  margin-right: 10px;
`;

export const TotalPriceInfo = styled.p`
  font-weight: bold;
  color: aqua;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const CartListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7);
  border-radius: 10px;
`;

export const StyleCartImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 100px;
  border-radius: 10px 0 0 10px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 25px;
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
`;

export const InputCounter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: aqua;
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
`;

export const DataInfo = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: gray;
  text-shadow: 1px, 1px, 1px black;
`;

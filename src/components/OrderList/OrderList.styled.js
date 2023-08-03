import styled from 'styled-components';
import Image from 'next/image';

export const CartListSection = styled.div`
  margin-top: 30px;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const CartListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7);
  border-radius: 10px;
`;

export const StyleCartImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 200px;
  border-radius: 10px 0 0 10px;
`;

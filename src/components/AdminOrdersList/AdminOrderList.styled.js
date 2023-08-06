import styled from 'styled-components';

export const OrderAdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  padding: 20px;
`;

export const UserInfoTitle = styled.h3`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const UserInfoBlock = styled.div`
  margin-bottom: 20px;
`;

export const OrderItemsBlock = styled.div``;

export const OrderItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: lightgray;
  padding: 10px;
  margin-bottom: 20px;
`;

export const OrderItemsListItem = styled.li`
  background-color: lightcoral;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px;
`;

export const OrderItemsTitle = styled.h4`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const TotalPriceBlock = styled.div``;

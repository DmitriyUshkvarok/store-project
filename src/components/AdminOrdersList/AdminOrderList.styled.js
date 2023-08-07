import styled, { css } from 'styled-components';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export const OrderAdminWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding: 40px;
`;

export const BtnStatusBlock = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const BtnStatus = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 5px;
`;

export const UserInfoTitle = styled.h3`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

export const UserInfoBlock = styled.div`
  margin-bottom: 20px;
`;

export const UserInfoName = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

export const UserInfoEmail = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

export const UserInfoPhone = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

export const UserInfLocation = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

export const SpanInfoUser = styled.span`
  color: #222;
  font-weight: normal;
`;

export const OrderItemsBlock = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

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
  border-radius: 4px;
  transition: background-color 0.4s;

  ${({ isPending }) =>
    isPending
      ? css`
          background-color: lightcoral;
        `
      : css`
          background-color: lightgreen;
        `}

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const OrderItemsTitle = styled.h4`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

export const TotalPriceBlock = styled.div``;

export const StyleAdminRiDeleteBin5Fill = styled(RiDeleteBin5Fill)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: coral;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.3);
  }
`;

export const OrderData = styled.p`
  color: gray;
  text-align: center;
`;

export const OrderName = styled.h4`
  text-align: center;
`;

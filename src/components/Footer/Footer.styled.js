import styled from 'styled-components';

export const StyleFooter = styled.footer`
  border-bottom: 1px solid #505050;
  overflow: hidden;
  padding-bottom: 70px;
  padding-top: 90px;
  background: #242424;
  background-image: url('/him.png');
  background-repeat: no-repeat;
  background-position: left;
`;
export const BoxFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-weight: bold;
  width: 170px;
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 10px;
`;

export const ListContact = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemContact = styled.li`
  color: #b4b4b4;
`;

export const Box = styled.div`
  width: 200px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const Item = styled.li`
  color: #b4b4b4;
  font-size: 14px;
  letter-spacing: 0.025em;
`;

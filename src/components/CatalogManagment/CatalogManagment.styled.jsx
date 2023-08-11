import styled from 'styled-components';

export const CaptionWrap = styled.div`
  display: flex;
  gap: 50px;
`;

export const ListOferta = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid #ccc;
`;

export const ItemOferta = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
`;

export const TagContainer = styled.div`
  flex: 1;
  padding: 5px;
`;

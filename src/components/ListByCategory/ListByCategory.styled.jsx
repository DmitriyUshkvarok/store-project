import styled from 'styled-components';
export const Title = styled.h2`
  margin: 0;
  margin-top: 30px;
  font-size: 18px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 90px;
  overflow-y: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 100px;
  border: 1px solid #ccc;
  justify-content: space-between;
`;

export const WrapContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TitleDesc = styled.span`
  margin: 0;
  font-size: 12px;
`;

import styled from 'styled-components';

import { MdDeleteForever, MdCreate } from 'react-icons/md';

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1000px) {
    width: 400px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  justify-content: space-between;
  padding-left: 10px;
  &:hover {
    color: red;
  }
`;

export const WrapContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TitleDesc = styled.h3`
  margin: 0;
  padding: 10px;
  font-size: 16px;
`;

export const Btn = styled.button`
  border: none;
  color: #b7b5b5;
  background: none;

  &:hover {
    scale: calc(1.3);
    color: gray;
  }
`;

export const BoxBtn = styled.div`
  display: flex;
  gap: 15px;
`;

export const DeleteForever = styled(MdDeleteForever)`
  font-size: 25px;
  font-weight: bold;
`;

export const Create = styled(MdCreate)`
  font-size: 25px;
  font-weight: bold;
`;

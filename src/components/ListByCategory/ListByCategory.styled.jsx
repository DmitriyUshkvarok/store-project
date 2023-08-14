import styled from 'styled-components';

import { MdDeleteForever, MdCreate } from 'react-icons/md';

export const Box = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding-right: 10px;
  /*  */

  height: fit-content;
  height: 350px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    background: #ccc;
    width: 6px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 12px;
    background-color: gray;
  }

  ::-webkit-scrollbar-track {
    width: 6px;
    /* height: 300px; */
    flex-shrink: 0;

    border-radius: 12px;
  }
`;

/*  */

export const Item = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
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

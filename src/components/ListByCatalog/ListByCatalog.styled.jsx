import styled from 'styled-components';

import { MdDeleteForever, MdCreate } from 'react-icons/md';

import Image from 'next/image';

export const ResponsiveTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th,
  td {
    border: 1px solid #e0e0e0;
    padding: 15px;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
    font-size: 14px;
    line-height: 18px;
  }
  td {
    font-size: 12px;
    line-height: 14px;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }

  tr:hover {
    background-color: #e6f7ff;
  }

  td:nth-child(3) {
    padding: 0;
  }
  th:nth-child(4) {
    min-width: 70px;
  }

  th:nth-child(9),
  td:nth-child(9),
  th:nth-child(10),
  td:nth-child(10),
  th:nth-child(11),
  td:nth-child(11),
  th:nth-child(12),
  td:nth-child(12) {
    text-align: center;
  }
`;

export const StyledImage = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
  max-width: 100px;
  max-height: 70px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  margin: 0;
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

export const DeleteForever = styled(MdDeleteForever)`
  font-size: 25px;
  font-weight: bold;
`;

export const Create = styled(MdCreate)`
  font-size: 25px;
  font-weight: bold;
`;

/** */

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

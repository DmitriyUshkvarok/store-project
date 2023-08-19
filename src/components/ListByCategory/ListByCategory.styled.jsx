import styled from 'styled-components';
import Image from 'next/image';
import { MdDeleteForever, MdCreate } from 'react-icons/md';

export const Box = styled.div`
  width: 100%;
`;

export const BoxAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

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
  td:nth-child(1) {
    padding: 0;
  }
  td:nth-child(3),
  td:nth-child(4) {
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

export const BtnPlus = styled.button`
  border: none;
  background: none;
  margin-left: 5px;

  &:hover {
    scale: calc(1.3);
  }
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

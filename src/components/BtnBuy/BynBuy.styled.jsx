import styled from 'styled-components';

export const Btn = styled.button`
  cursor: pointer;
  color: #000000;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  font-weight: bold;
  height: 42px;
  letter-spacing: 6px;
  line-height: 42px;
  text-transform: uppercase;
  border: 2px solid;
  padding-left: 15px;
  padding-right: 15px;

  &:hover {
    outline: none;
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

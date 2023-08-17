import styled from 'styled-components';

export const Btn = styled.button`
  cursor: pointer;
  color: #000000;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 42px;
  min-width: 130px;
  border: 2px solid;

  margin: 0 auto;
  &:hover {
    outline: none;
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

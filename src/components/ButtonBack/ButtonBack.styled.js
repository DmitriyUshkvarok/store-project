import styled from 'styled-components';

export const StyleButtonBack = styled.button`
  color: #000000;
  background: transparent;
  justify-content: center;
  display: flex;

  align-items: center;
  gap: 2px;
  font-size: 23px;

  letter-spacing: 3px;

  text-transform: uppercase;

  border: 2px solid black;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  transition: background-color 0.4s;

  &:disabled {
    opacity: 0.3;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

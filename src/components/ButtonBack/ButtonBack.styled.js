import styled from 'styled-components';

export const StyleButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  color: gray;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: #222;
  }
`;

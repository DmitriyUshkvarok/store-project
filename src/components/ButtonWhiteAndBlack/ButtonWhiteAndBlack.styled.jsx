import styled, { css } from 'styled-components';

export const Btn = styled.button`
  cursor: pointer;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 20px;
  /* font-family: gotham; */
  font-size: 14px;
  font-weight: bold;
  height: 42px;
  letter-spacing: 6px;
  line-height: 42px;
  padding-left: 20px;
  text-transform: uppercase;
  width: 250px;
  border: 2px solid;

  &:hover {
    outline: none;
    opacity: 0.7;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      &:hover,
      &:focus {
        opacity: 0.5;
      }
    `}
`;

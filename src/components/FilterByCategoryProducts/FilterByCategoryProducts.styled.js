import styled from 'styled-components';

import Form from 'react-bootstrap/Form';

export const Box = styled.div``;
export const Title = styled.h3`
  color: #131313;
  font-size: 18px;

  letter-spacing: 0.025em;
  line-height: 30px;
  padding-bottom: 5px;
`;

export const BoxText = styled.div`
  color: #131313;
  font-size: 14px;

  letter-spacing: 0.025em;
  line-height: 30px;
  padding-bottom: 5px;
`;
export const StyledRadio = styled(Form.Check)`
  & label {
    color: #131313;
    font-size: 14px;

    letter-spacing: 0.025em;
    padding-bottom: 5px;
  }

  & input[type='radio'] {
    appearance: none;
    background-color: #fff;
    border: 1 solid #fff;
    border-color: #aaaaaa;
    &:checked {
      background-color: #aaaaaa;
      box-shadow: 0 0 0 0.3rem rgb(140 138 138 / 25%);
    }
    &:focus {
      box-shadow: 0 0 0 0.3rem rgb(140 138 138 / 25%);
    }
    &:checked + label {
      font-weight: bold;
    }
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 12px;
  font-weight: bold;
  height: 42px;
  letter-spacing: 6px;
  /* line-height: 42px; */
  text-transform: uppercase;
  width: 120px;
  border: 2px solid;
  text-align: center;
  padding: 5px;

  &:hover,
  &:focus {
    outline: none;
    opacity: 0.7;
  }
`;

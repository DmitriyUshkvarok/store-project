import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyleOrderForm = styled(Form)`
  max-width: 700px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  /* background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7); */
  border-radius: 4px;
  padding: 10px;
`;

export const OrderFormTitle = styled.h2`
  color: #222;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
`;

export const OrderFormSubTitle = styled.p`
  color: gray;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;

export const OrderFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const OrderFormLabel = styled.label`
  color: gray;
  text-transform: uppercase;
  font-weight: 500;
`;

export const OrderStyleField = styled(Field)`
  width: 100%;
  display: flex;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 5px;
  color: #222;

  &::placeholder {
    padding-left: 10px;
    opacity: 0.5;
  }
`;

export const ValidationError = styled.div`
  color: lightcoral;
`;

export const OrderBtn = styled.button`
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

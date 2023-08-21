import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyleOrderForm = styled(Form)`
  max-width: 700px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  margin-bottom: 30px;

  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 4px;
  padding: 10px;
`;

export const OrderFormTitle = styled.p`
  font-weight: 500;
  text-align: center;
  font-size: 15px;
`;

export const OrderFormSubTitle = styled.p`
  font-size: 12px;
  text-align: center;
  font-weight: 400;
`;

export const OrderFormSubTitleRadio = styled.p`
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  margin-top: 15px;
`;

export const OrderFormGroupRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  width: 100%;
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
  font-weight: 400;
`;

export const OrderStyleField = styled(Field)`
  width: 100%;
  display: flex;
  border-color: black;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  text-align: center;

  &::placeholder {
    opacity: 0.4;
  }
`;

export const ValidationError = styled.div`
  color: #e3010f;
  font-size: 10px;
  font-weight: 500;
`;

export const OrderBtn = styled.button`
  color: #000000;
  background: transparent;
  justify-content: center;
  display: flex;

  align-items: center;
  gap: 2px;
  font-size: 13px;

  letter-spacing: 1px;

  border: 2px solid black;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  padding: 10px;

  margin-top: 30px;
  transition: background-color 0.4s;

  &:disabled {
    opacity: 0.3;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

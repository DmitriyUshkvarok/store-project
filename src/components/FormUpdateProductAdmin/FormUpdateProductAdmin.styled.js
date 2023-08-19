import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const Title = styled.h3`
  color: #131313;
  font-size: 18px;

  letter-spacing: 0.025em;
  line-height: 30px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ImageSelector = styled.div`
  cursor: pointer;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  height: 40px;
  line-height: 38px;
  text-transform: uppercase;
  border: 1px solid;

  &:hover {
    outline: none;
    opacity: 0.7;
  }
`;

export const StyledInput = styled(Field)`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
`;
export const StyledError = styled.p`
  color: red;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
`;

export const StyledFileInput = styled.input`
  display: none;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  height: 42px;
  line-height: 42px;
  text-transform: uppercase;
  border: 2px solid;
  margin-top: 1rem;

  &:hover {
    outline: none;
    opacity: 0.7;
  }
`;

export const Link = styled.a`
  /* margin-top: 1rem; */
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
`;

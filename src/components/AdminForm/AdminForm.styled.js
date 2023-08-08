import styled, { keyframes } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const SectionAdminForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-image: url('/background-basket-page.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

export const FormikStyle = styled(Formik)``;

export const FormLogin = styled(Form)`
  max-width: 600px;
  padding: 40px;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const TitleAdminForm = styled.h2`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  color: gold;
  margin-bottom: 10px;
`;

export const FeedbackFormGroup = styled.div`
  width: 100%;
  margin-bottom: 14px;
  position: relative;
`;

export const PasswordWrapper = styled.div``;

export const ToggleShowPassword = styled.span`
  position: absolute;
  top: 16px;
  right: 18px;
  height: 18px;
`;

export const InputEmail = styled(Field)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  border: 1px solid gold;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  outline: none;
  background-color: transparent;
  color: aqua;

  &::placeholder {
    font-size: var(--fontSize14);
  }
`;

export const InputPassword = styled(Field)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  border: 1px solid gold;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  outline: none;
  background-color: transparent;
  color: aqua;

  &::placeholder {
    font-size: var(--fontSize14);
  }
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.p`
  position: absolute;
  width: 100%;
  color: red;
  font-size: 10px;
  margin-top: 1px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1.03);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.03);
  }
`;

export const BtnLogIn = styled.button`
  width: 100%;
  height: 49px;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s;
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7);
  color: lightgreen;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
    top: 0;
    left: -100%;
    transform: rotate(45deg);
    transition: all 0.3s;
    opacity: 0;
  }

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    animation: ${pulseAnimation} 1s ease-in-out infinite;
  }

  &:hover:before,
  &:focus:before {
    left: 100%;
    opacity: 1;
    transition: left 2s ease-in-out, opacity 0.3s ease-in-out;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

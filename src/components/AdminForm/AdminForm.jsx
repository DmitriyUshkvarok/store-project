'use client';
import { SectionAdminForm } from './AdminForm.styled';
import Container from '../Container/Container';
import {
  FormikStyle,
  FormLogin,
  TitleAdminForm,
  FeedbackFormGroup,
  InputEmail,
  InputPassword,
  BtnWrapper,
  BtnLogIn,
  PasswordWrapper,
  ToggleShowPassword,
  StyleErrorMessage,
  Error,
} from './AdminForm.styled';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { toast } from 'react-toastify';
import adminLoginSchema from '@/src/validationSchema/adminLoginSchema';
import { useLoginMutation } from '@/src/redux/adminAuthApi/authApi';

const initialValues = {
  // email: '',
  login: '',
  password: '',
};

const AdminForm = () => {
  const [loginMutation] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const response = await loginMutation(values);

      if (response.error) {
        if (response.error.status === 401) {
          toast.error(response.error.data.message);
        } else {
          toast.error('An error occurred. Please try again.');
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
    resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <SectionAdminForm>
      <Container>
        <>
          <FormikStyle
            initialValues={initialValues}
            validationSchema={adminLoginSchema}
            onSubmit={handleSubmit}
          >
            <FormLogin>
              <TitleAdminForm>Увійти до панелі адміністратора</TitleAdminForm>
              <FeedbackFormGroup>
                <InputEmail
                  // type="email"
                  // name="email"
                  // placeholder="Електрона пошта"
                  type="login"
                  name="login"
                  placeholder="Логін"
                />
                <StyleErrorMessage name="login">
                  {(msg) => <Error>{msg}</Error>}
                </StyleErrorMessage>
              </FeedbackFormGroup>
              <FeedbackFormGroup>
                <PasswordWrapper>
                  <InputPassword
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Проль"
                  />
                  <ToggleShowPassword onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <BsEyeSlash
                        color="#ffffff4d"
                        style={{ width: 18, height: 18, cursor: 'pointer' }}
                      />
                    ) : (
                      <BsEye
                        color="#ffffff4d"
                        style={{ width: 18, height: 18, cursor: 'pointer' }}
                      />
                    )}
                  </ToggleShowPassword>
                </PasswordWrapper>
                <StyleErrorMessage name="password">
                  {(msg) => <Error>{msg}</Error>}
                </StyleErrorMessage>
              </FeedbackFormGroup>
              <BtnWrapper>
                <BtnLogIn type="submit">
                  {isLoading ? <p>Loading...</p> : 'Увійти'}
                </BtnLogIn>
              </BtnWrapper>
            </FormLogin>
          </FormikStyle>
        </>
      </Container>
    </SectionAdminForm>
  );
};

export default AdminForm;

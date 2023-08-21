import * as yup from 'yup';
const adminLoginSchema = yup.object().shape({
  login: yup
    .string()
    .min(4, 'Name should be at least 4 characters')
    .max(64, 'Name should not exceed 64 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)?$/,
      'Invalid name format'
    )
    .required('обов’язкове поле'),
  password: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces')
    .required('обов’язкове поле'),
});

export default adminLoginSchema;

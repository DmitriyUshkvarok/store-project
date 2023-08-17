import * as yup from 'yup';

const orderSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name should be at least 4 characters')
    .max(64, 'Name should not exceed 64 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)?$/,
      'Invalid name format'
    )
    .required('обов’язкове поле'),
  // email: yup
  //   .string()
  //   .email('Invalid email')
  //   .test('email-format', 'Invalid email format', (value) => {
  //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     return emailRegex.test(value);
  //   })
  //   .required('обов’язкове поле'),
  // address: yup.string().required('обов’язкове поле'),
  phone: yup.string().required('обов’язкове поле'),
});

export default orderSchema;

import * as yup from 'yup';

const orderSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Ім'я повинно містити щонайменше 4 символи")
    .max(64, 'Назва не повинна перевищувати 64 символів')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁіІїЇґҐєЄ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁіІїЇґҐєЄ0-9.%+\-_]+)?$/,
      'Invalid name format'
    )
    .required('обов’язкове поле'),
  phone: yup
    .string()
    .matches(/^\d+$/, 'Неправильний формат номера телефону')
    .min(10, 'Номер повинен містити мінімум 10 цифр')
    .required('обов’язкове поле'),
});

export default orderSchema;

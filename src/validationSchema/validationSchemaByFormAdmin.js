import * as yup from 'yup';

export const formAddSchemaProduct = yup.object().shape({
  fullName: yup.string().required('обов’язкове поле'),
  name: yup.string().required('обов’язкове поле'),
  price: yup
    .string()
    .matches(/^[0-9]*$/, 'Тільки цифри')
    .required('обов’язкове поле'),
  type: yup.string().required('обов’язкове поле'),
  description: yup.string().required('обов’язкове поле'),
  density: yup
    .string()
    // .matches(/^[0-9,.]*$/, 'Тільки цифри,крапка і кома')
    .required('обов’язкове поле'),
  brand: yup.string().required('обов’язкове поле'),
  weight: yup
    .string()
    .matches(/^[0-9,.]*$/, 'Тільки цифри,крапка і кома')
    .required('обов’язкове поле'),
  chemicalFormula: yup.string().required('обов’язкове поле'),
  packingType: yup.string().required('обов’язкове поле'),
  country: yup.string().required('обов’язкове поле'),
  category: yup.string().required('обов’язкове поле'),
  color: yup.string().required('обов’язкове поле'),
});

export const formUpdateSchemaProduct = yup.object().shape({
  name: yup.string(),
  price: yup.number(),
  description: yup.string(),
  brand: yup.string(),
  weight: yup.string().matches(/^[0-9,.]*$/, 'Тільки цифри,крапка і кома'),
  packingType: yup.string(),
  country: yup.string(),
  color: yup.string(),
  chemicalFormula: yup.string(),
  density: yup.string(),
  fullName: yup.string(),
  type: yup.string(),
});

export const formAddSchemaAny = yup.object().shape({
  name: yup.string().required('обов’язкове поле'),
});

export const formSchemaUpdateAny = yup.object().shape({
  name: yup.string(),
});

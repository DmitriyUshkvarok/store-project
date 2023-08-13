import * as yup from 'yup';

export const formAddSchemaProduct = yup.object().shape({
  name: yup.string().required('обов’язкове поле'),
  price: yup.number().required('обов’язкове поле'),

  description: yup.string().required('обов’язкове поле'),
  brand: yup.string().required('обов’язкове поле'),
  weight: yup.number().required('обов’язкове поле'),
  packingType: yup.string().required('обов’язкове поле'),
  country: yup.string().required('обов’язкове поле'),
  category: yup.string().required('обов’язкове поле'),
  subcategory: yup.string().required('обов’язкове поле'),
  color: yup.string().required('обов’язкове поле'),
});

export const formUpdateSchemaProduct = yup.object().shape({
  name: yup.string(),
  price: yup.number(),

  description: yup.string(),
  brand: yup.string(),
  weight: yup.number(),
  packingType: yup.string(),
  country: yup.string(),
  category: yup.string(),
  subcategory: yup.string(),
  color: yup.string(),
});

export const formAddSchemaAny = yup.object().shape({
  name: yup.string().required('обов’язкове поле'),
});

export const formSchemaUpdateAny = yup.object().shape({
  name: yup.string(),
});
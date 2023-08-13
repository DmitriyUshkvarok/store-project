'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  useAddCountriesMutation,
  useAddCategotiesMutation,
  useAddSubCategotiesMutation,
  useAddColorosMutation,
} from '@/src/redux/ofertaApi/ofertaApi';
import { formAddSchemaAny } from '@/src/validationSchema/validationSchemaByFormAdmin';

import { COUNTRY, CATEGORY, SUBCATEGORY, COLOR } from '@/src/utils/constant';

const FormAddAny = ({ activeForm, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [addCountry] = useAddCountriesMutation();
  const [addCategory] = useAddCategotiesMutation();
  const [addSubCategory] = useAddSubCategotiesMutation();
  const [addColor, result] = useAddColorosMutation();

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('file', selectedImg);

    if (activeForm === COUNTRY) {
      try {
        const res = await addCountry(formData);
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${COUNTRY} додано`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    if (activeForm === CATEGORY) {
      try {
        const res = await addCategory(formData);
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${CATEGORY} додано`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    if (activeForm === SUBCATEGORY) {
      try {
        const res = await addSubCategory(formData);
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${SUBCATEGORY} додано`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    if (activeForm === COLOR) {
      try {
        const res = await addColor(formData);
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${COLOR} додано`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    handleClose();
  };
  return (
    <div>
      Додати {activeForm}
      <Formik
        validationSchema={formAddSchemaAny}
        initialValues={{
          name: '',
          url: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Назва: <Field type="text" name="name" />
            <ErrorMessage name="name">{(msg) => <div>{msg}</div>}</ErrorMessage>
          </label>
          <label>
            Зображення:{' '}
            <input
              type="file"
              accept="image/*"
              name="url"
              onChange={(e) => setSelectedImg(e.target.files[0])}
            />
            <ErrorMessage name="url">{(msg) => <div>{msg}</div>}</ErrorMessage>
          </label>

          <button type="submit">Додати</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormAddAny;

'use client';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import {
  useAddCountriesMutation,
  useAddCategotiesMutation,
  useAddSubCategotiesMutation,
  useAddColorosMutation,
} from '@/src/redux/ofertaApi/ofertaApi';

const FormAddAny = ({ activeForm, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [addCountry] = useAddCountriesMutation();
  const [addCategory] = useAddCategotiesMutation();
  const [addSubCategory] = useAddSubCategotiesMutation();
  const [addColor] = useAddColorosMutation();

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('file', selectedImg);

    if (activeForm === 'країну') {
      await addCountry(formData);
    }
    if (activeForm === 'категорію') {
      await addCategory(formData);
    }
    if (activeForm === 'підкатегорію') {
      await addSubCategory(formData);
    }
    if (activeForm === 'колір') {
      await addColor(formData);
    }
    handleClose();
  };
  return (
    <div>
      Додати {activeForm}
      <Formik
        initialValues={{
          name: '',
          url: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Назва: <Field type="text" name="name" />
          </label>
          <label>
            Зображення:{' '}
            <input
              type="file"
              accept="image/*"
              name="url"
              onChange={(e) => setSelectedImg(e.target.files[0])}
            />
          </label>

          <button type="submit">Додати</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormAddAny;

'use client';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import {
  useAddCountriesMutation,
  useAddCategotiesMutation,
  useAddSubCategotiesMutation,
  useAddColorosMutation,
} from '@/src/redux/ofertaApi/ofertaApi';

const FormAddAny = ({ activeForm }) => {
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
      return await addCountry(formData);
    }
    if (activeForm === 'категорію') {
      return await addCategory(formData);
    }
    if (activeForm === 'підкатегорію') {
      return await addSubCategory(formData);
    }
    if (activeForm === 'колір') {
      return await addColor(formData);
    }
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
            Name: <Field type="text" name="name" />
          </label>
          <label>
            Image:{' '}
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

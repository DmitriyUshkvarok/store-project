'use client';
import { Formik, Form, Field } from 'formik';
import {
  useUpdateCountriesMutation,
  useUpdateCategoriesMutation,
  useUpdateSubCategoriesMutation,
  useUpdateColorsMutation,
} from '@/src/redux/ofertaApi/ofertaApi';
import { useState } from 'react';

const FormUpdate = ({ activeUpdate, selectItem, selectId, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [updateCountry] = useUpdateCountriesMutation();
  const [updateCategory] = useUpdateCategoriesMutation();
  const [updateSubCategory] = useUpdateSubCategoriesMutation();
  const [updateColor] = useUpdateColorsMutation();

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('file', selectedImg);

    if (activeUpdate === 'Країни') {
      await updateCountry({ formData, countryId: selectId });
    }
    if (activeUpdate === 'Категорії') {
      await updateCategory({ formData, categoryId: selectId });
    }
    if (activeUpdate === 'Підкатегорії') {
      await updateSubCategory({ formData, subcategoryId: selectId });
    }
    if (activeUpdate === 'Колір') {
      await updateColor({ formData, colorId: selectId });
    }
    handleClose();
  };
  return (
    <div>
      Редагувати {activeUpdate}
      <Formik
        initialValues={{
          name: selectItem,
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

export default FormUpdate;

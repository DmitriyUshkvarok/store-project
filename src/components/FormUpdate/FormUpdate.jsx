'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  useUpdateCountriesMutation,
  useUpdateCategoriesMutation,
  useUpdateSubCategoriesMutation,
  useUpdateColorsMutation,
} from '@/src/redux/ofertaApi/ofertaApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { formSchemaUpdateAny } from '@/src/validationSchema/validationSchemaByFormAdmin';
import { COUNTRY, CATEGORY, SUBCATEGORY, COLOR } from '@/src/utils/constant';

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

    if (activeUpdate === COUNTRY) {
      try {
        const res = await updateCountry({ formData, countryId: selectId });
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${COUNTRY} змінено`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    if (activeUpdate === CATEGORY) {
      try {
        const res = await updateCategory({ formData, categoryId: selectId });
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${CATEGORY} змінено`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    if (activeUpdate === SUBCATEGORY) {
      try {
        const res = await updateSubCategory({
          formData,
          subcategoryId: selectId,
        });
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${SUBCATEGORY} змінено`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    if (activeUpdate === COLOR) {
      try {
        const res = await updateColor({ formData, colorId: selectId });
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${COLOR} змінено`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    handleClose();
  };
  return (
    <div>
      Редагувати {activeUpdate}
      <Formik
        validationSchema={formSchemaUpdateAny}
        initialValues={{
          name: selectItem,
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

          <button type="submit">Зберегти</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormUpdate;

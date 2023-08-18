'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useUpdateCategoriesMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { formSchemaUpdateAny } from '@/src/validationSchema/validationSchemaByFormAdmin';

const FormUpdate = ({ selectItem, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const [updateCategory] = useUpdateCategoriesMutation();

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    if (selectedImg) {
      formData.append('file', selectedImg);
    }

    try {
      const res = await updateCategory({
        formData,
        categoryId: selectItem._id,
      });
      if (res.error) {
        throw new Error(res.error.data.message);
      }
      toast.success(`${selectItem.name} змінено`);
    } catch (error) {
      return toast.error(`${error}`);
    }

    handleClose();
  };
  return (
    <div>
      Редагувати категорію
      <Formik
        validationSchema={formSchemaUpdateAny}
        initialValues={{
          name: selectItem.name,
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

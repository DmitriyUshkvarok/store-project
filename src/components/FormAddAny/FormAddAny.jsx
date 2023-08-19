'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAddCategotiesMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { formAddSchemaAny } from '@/src/validationSchema/validationSchemaByFormAdmin';
import { Input, StyledForm } from './FormAddAny.styled';

const FormAddAny = ({ handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [addCategory] = useAddCategotiesMutation();

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('file', selectedImg);

    try {
      const res = await addCategory(formData);
      if (res.error) {
        throw new Error(res.error.data.message);
      }
      toast.success(`${values.name} додано`);
    } catch (error) {
      return toast.error(`${error}`);
    }
    handleClose();
  };
  return (
    <div>
      Додати категорію
      <Formik
        validationSchema={formAddSchemaAny}
        initialValues={{
          name: '',
          url: '',
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <label>
            Назва: <Field type="text" name="name" />
            <ErrorMessage name="name">{(msg) => <div>{msg}</div>}</ErrorMessage>
          </label>
          <label>
            Зображення:
            <Input
              type="file"
              accept="image/*"
              name="url"
              onChange={(e) => setSelectedImg(e.target.files[0])}
            />
            <ErrorMessage name="url">{(msg) => <div>{msg}</div>}</ErrorMessage>
          </label>

          <button type="submit">Додати</button>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default FormAddAny;

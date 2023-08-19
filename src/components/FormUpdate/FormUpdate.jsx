'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useUpdateCategoriesMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { formSchemaUpdateAny } from '@/src/validationSchema/validationSchemaByFormAdmin';
import {
  ImageSelector,
  StyledButton,
  StyledError,
  StyledErrorMessage,
  StyledFileInput,
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
} from './FormUpdate.styled';

import { AiOutlinePlus } from 'react-icons/ai';

const FormUpdate = ({ selectItem, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(selectedImg || '');

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
      <Title>Редагувати категорію</Title>
      <Formik
        validationSchema={formSchemaUpdateAny}
        initialValues={{
          name: selectItem.name,
          url: selectedImg,
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledLabel>
            Назва: <StyledFileInput type="text" name="name" />
            <StyledErrorMessage name="name">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>
          <StyledLabel>
            Зображення:{' '}
            <ImageSelector onClick={() => fileInputRef.current?.click()}>
              {selectedFileName || (
                <>
                  Виберіть зображення <AiOutlinePlus size={20} />
                </>
              )}
            </ImageSelector>
            <StyledInput
              type="file"
              accept="image/*"
              name="url"
              onChange={(e) => {
                setSelectedImg(e.target.files[0]);
                setSelectedFileName(e.target.files[0]?.name || '');
              }}
            />
            <StyledErrorMessage name="url">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>

          <StyledButton type="submit">Зберегти</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default FormUpdate;

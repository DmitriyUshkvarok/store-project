'use client';
import { Formik } from 'formik';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useAddCategotiesMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { formAddSchemaAny } from '@/src/validationSchema/validationSchemaByFormAdmin';
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledFileInput,
  StyledErrorMessage,
  StyledButton,
  Title,
  StyledError,
  ImageSelector,
} from './FormAddAny.styled';

import { AiOutlinePlus } from 'react-icons/ai';

const FormAddAny = ({ handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [addCategory] = useAddCategotiesMutation();
  const fileInputRef = useRef(null);

  const [selectedFileName, setSelectedFileName] = useState('');

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
      <Title> Додати категорію</Title>
      <Formik
        validationSchema={formAddSchemaAny}
        initialValues={{
          name: '',
          url: '',
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
            Зображення:
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

          <StyledButton type="submit">Додати</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default FormAddAny;

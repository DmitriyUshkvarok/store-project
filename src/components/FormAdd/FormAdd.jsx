'use client';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { useAddProductMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { formAddSchemaProduct } from '@/src/validationSchema/validationSchemaByFormAdmin';
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
} from './FormAdd.styled';

import { AiOutlinePlus } from 'react-icons/ai';

const FormAdd = ({ categories, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectPdf, setSelectPdf] = useState(null);
  const [errorByImg, setErrorByImg] = useState('none');
  const [errorByPdf, setErrorByPdf] = useState('none');
  const [add] = useAddProductMutation();

  const fileInputRef = useRef(null);
  const pdfInputRef = useRef(null);

  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedPdfName, setSelectedPdfName] = useState('');

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('file', selectedImg);
    formData.append('pdf', selectPdf);
    formData.append('description', values.description);
    formData.append('brand', values.brand);
    formData.append('weight', values.weight);
    formData.append('packingType', values.packingType);
    formData.append('country', values.country);
    formData.append('category', values.category);
    formData.append('color', values.color);
    formData.append('type', values.type);
    formData.append('density', values.density);
    formData.append('chemicalFormula', values.chemicalFormula);
    formData.append('fullName', values.fullName);
    if (!selectedImg) {
      setErrorByImg('block');
      return;
    }
    if (!selectPdf) {
      setErrorByPdf('block');
      return;
    }
    try {
      const res = await add(formData);
      if (res.error) {
        throw new Error(res.error.data.message);
      }
      toast.success(`Новий товар додано`);
    } catch (error) {
      return toast.error(`${error}`);
    }

    handleClose();
  };
  return (
    <div>
      <Title>Додати продукт</Title>
      <Formik
        validationSchema={formAddSchemaProduct}
        initialValues={{
          category: '',
          chemicalFormula: '',
          color: '',
          country: '',
          density: '',
          fullName: '',
          name: '',
          price: '',
          url: '',
          pdfUrl: '',
          type: '',
          description: '',
          brand: '',
          weight: '',
          packingType: '',
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledLabel>
            Повна назва: <StyledInput type="text" name="fullName" />
            <StyledErrorMessage name="fullName">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>
          <StyledLabel>
            Назва: <StyledInput type="text" name="name" />
            <StyledErrorMessage name="name">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>
          <StyledLabel>
            Категорія:
            <StyledInput component="select" name="category">
              <option>Оберіть категорію</option>
              {categories?.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </StyledInput>
            <StyledErrorMessage name="category">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>
          <StyledLabel>
            Бренд: <StyledInput type="text" name="brand" />
            <StyledErrorMessage name="brand">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>

          <StyledLabel>
            Країна: <StyledInput type="text" name="country" />
            <StyledErrorMessage name="country">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>
          <StyledLabel>
            Колір: <StyledInput type="text" name="color" />
            <StyledErrorMessage name="color">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>
          <StyledLabel>
            Тип: <StyledInput type="text" name="type" />
            <StyledErrorMessage name="type">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>
          <StyledLabel>
            Щільність: <StyledInput type="text" name="density" />
            <StyledErrorMessage name="density">
              {(msg) => <StyledError>введіть тільки цифри</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>
          <StyledLabel>
            Хімічна формула: <StyledInput type="text" name="chemicalFormula" />
            <StyledErrorMessage name="chemicalFormula">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>

          <StyledLabel>
            Опис: <StyledInput type="text" name="description" />
            <StyledErrorMessage name="description">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>

          <StyledLabel>
            Вага: <StyledInput type="text" name="weight" />
            <StyledErrorMessage name="weight">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>
          <StyledLabel>
            Тип пакування: <StyledInput type="text" name="packingType" />
            <StyledErrorMessage name="packingType">
              {(msg) => <StyledError>{msg}</StyledError>}
            </StyledErrorMessage>
          </StyledLabel>

          <StyledLabel>
            Ціна: <StyledInput type="text" name="price" />
            <StyledErrorMessage name="price">
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
            <StyledFileInput
              type="file"
              accept="image/*"
              name="url"
              onChange={(e) => {
                setSelectedImg(e.target.files[0]);
                setSelectedFileName(e.target.files[0]?.name || '');
                setErrorByImg('none');
              }}
            />
            <div style={{ display: errorByImg }}>
              <StyledError>оберіть зображення</StyledError>
            </div>
          </StyledLabel>
          <StyledLabel>
            PDF:
            <ImageSelector onClick={() => pdfInputRef.current?.click()}>
              {selectedPdfName || (
                <>
                  Виберіть PDF файл <AiOutlinePlus size={20} />
                </>
              )}
            </ImageSelector>
            <StyledFileInput
              type="file"
              accept="application/pdf"
              name="pdfUrl"
              onChange={(e) => {
                setSelectPdf(e.target.files[0]);
                setSelectedPdfName(e.target.files[0]?.name || '');
                setErrorByPdf('none');
              }}
            />
          </StyledLabel>
          <div style={{ display: errorByPdf }}>
            <StyledError>оберіть зображення</StyledError>
          </div>
          <StyledButton type="submit">Додати</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default FormAdd;

'use client';
import { Formik } from 'formik';
import { useUpdateProductMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { formUpdateSchemaProduct } from '@/src/validationSchema/validationSchemaByFormAdmin';
import {
  ImageSelector,
  Link,
  StyledButton,
  StyledError,
  StyledErrorMessage,
  StyledFileInput,
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
} from './FormUpdateProductAdmin.styled';

import { AiOutlinePlus } from 'react-icons/ai';

const FormUpdateProductAdmin = ({ selectProduct, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectPdf, setSelectPdf] = useState(null);

  const [updateProduct] = useUpdateProductMutation();

  const fileInputRef = useRef(null);
  const pdfInputRef = useRef(null);

  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedPdfName, setSelectedPdfName] = useState('');

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('fullName', values.fullName);
    formData.append('type', values.type);
    formData.append('density', values.density);
    formData.append('chemicalFormula', values.chemicalFormula);
    formData.append('weight', values.weight);
    formData.append('packingType', values.packingType);
    formData.append('country', values.country);
    formData.append('category', selectProduct.category._id);
    formData.append('color', values.color);
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('description', values.description);
    formData.append('brand', values.brand);
    if (selectedImg) {
      formData.append('file', selectedImg);
    }
    if (selectPdf) {
      formData.append('pdf', selectPdf);
    }

    try {
      const res = await updateProduct({
        formData,
        productId: selectProduct._id,
      });
      if (res.error) {
        throw new Error(res.error.data.message);
      }
      toast.success(`Успішно збереженно`);
    } catch (error) {
      return toast.error(`${error}`);
    }

    handleClose();
  };
  return (
    selectProduct && (
      <>
        <Title> Редагувати:</Title>
        <Formik
          validationSchema={formUpdateSchemaProduct}
          initialValues={{
            category: selectProduct.category.name,
            chemicalFormula: selectProduct.chemicalFormula,
            color: selectProduct.color,
            country: selectProduct.country,
            density: selectProduct.density,
            fullName: selectProduct.fullName,
            name: selectProduct.name,
            price: selectProduct.price,
            url: '',
            pdfUrl: '',
            type: selectProduct.type,
            description: selectProduct.description,
            brand: selectProduct.brand,
            weight: selectProduct.weight,
            packingType: selectProduct.packingType,
          }}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
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
              {/*  */}
              <StyledLabel>
                Категорія: <StyledInput readOnly type="text" name="category" />
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
                  {(msg) => <StyledError>введіть дані</StyledError>}
                </StyledErrorMessage>
              </StyledLabel>
              <StyledLabel>
                Хімічна формула:{' '}
                <StyledInput type="text" name="chemicalFormula" />
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
                  {(msg) => <StyledError>введіть тільки цифри</StyledError>}
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
                <StyledFileInput
                  type="file"
                  accept="image/*"
                  name="url"
                  onChange={(e) => {
                    setSelectedImg(e.target.files[0]);
                    setSelectedFileName(e.target.files[0]?.name || '');
                  }}
                />
              </StyledLabel>
              <StyledLabel>
                PDF:{' '}
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
                  }}
                />
              </StyledLabel>
              Переглянути:
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={selectProduct.pdfUrl}
              >
                <span> PGF файл</span>
              </Link>
              <StyledButton type="submit">Зберегти</StyledButton>
            </StyledForm>
          )}
        </Formik>{' '}
      </>
    )
  );
};

export default FormUpdateProductAdmin;

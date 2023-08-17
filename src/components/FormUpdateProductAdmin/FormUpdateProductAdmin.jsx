'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useUpdateProductMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { formUpdateSchemaProduct } from '@/src/validationSchema/validationSchemaByFormAdmin';

const FormUpdateProductAdmin = ({ selectProduct, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectPdf, setSelectPdf] = useState(null);

  const [updateProduct] = useUpdateProductMutation();

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
          <Form>
            <label>
              Повна назва: <Field type="text" name="fullName" />
              <ErrorMessage name="fullName">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Назва: <Field type="text" name="name" />
              <ErrorMessage name="name">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Категорія: <Field readOnly type="text" name="category" />
            </label>
            <label>
              Країна: <Field type="text" name="country" />
              <ErrorMessage name="country">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Колір: <Field type="text" name="color" />
              <ErrorMessage name="color">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Тип: <Field type="text" name="type" />
              <ErrorMessage name="type">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Щільність: <Field type="text" name="density" />
              <ErrorMessage name="density">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Хімічна формула: <Field type="text" name="chemicalFormula" />
              <ErrorMessage name="chemicalFormula">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Ціна: <Field type="text" name="price" />
              <ErrorMessage name="price">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
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
            <label>
              PDF:{' '}
              <input
                type="file"
                accept="application/pdf"
                name="pdfUrl"
                onChange={(e) => setSelectPdf(e.target.files[0])}
              />
            </label>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={selectProduct.pdfUrl}
            >
              <span>Переглянути PGF файл</span>
            </a>

            <label>
              Опис: <Field type="text" name="description" />
              <ErrorMessage name="description">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Бренд: <Field type="text" name="brand" />
              <ErrorMessage name="brand">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Вага: <Field type="text" name="weight" />
              <ErrorMessage name="weight">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <label>
              Тип пакування: <Field type="text" name="packingType" />
              <ErrorMessage name="packingType">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </label>
            <button type="submit">Зберегти</button>
          </Form>
        )}
      </Formik>
    )
  );
};

export default FormUpdateProductAdmin;

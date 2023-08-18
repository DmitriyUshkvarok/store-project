'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useAddProductMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { formAddSchemaProduct } from '@/src/validationSchema/validationSchemaByFormAdmin';

const FormAdd = ({ categories, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectPdf, setSelectPdf] = useState(null);
  const [add] = useAddProductMutation();

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
      <h2>Додати продукт</h2>
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
        <Form>
          <label>
            Повна назва: <Field type="text" name="fullName" />
            <ErrorMessage name="fullName">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </label>
          <label>
            Назва: <Field type="text" name="name" />
            <ErrorMessage name="name">{(msg) => <div>{msg}</div>}</ErrorMessage>
          </label>
          <label>
            Категорія:{' '}
            <Field as="select" name="category">
              <option>Оберіть категорію</option>
              {categories?.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name="category">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
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
            <ErrorMessage name="type">{(msg) => <div>{msg}</div>}</ErrorMessage>
          </label>
          <label>
            Щільність: <Field type="text" name="density" />
            <ErrorMessage name="density">
              {(msg) => <div>введіть тільки цифри</div>}
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
            <ErrorMessage name="url">{(msg) => <div>{msg}</div>}</ErrorMessage>
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
          <button type="submit">Додати</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormAdd;

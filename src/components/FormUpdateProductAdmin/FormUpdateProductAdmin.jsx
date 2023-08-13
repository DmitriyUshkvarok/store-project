'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useUpdateProductMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { formUpdateSchemaProduct } from '@/src/validationSchema/validationSchemaByFormAdmin';

const FormUpdateProductAdmin = ({ selectProduct, handleClose }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('file', selectedImg);
    formData.append('description', values.description);
    formData.append('brand', values.brand);
    formData.append('weight', values.weight);
    formData.append('packingType', values.packingType);
    formData.append('country', values.country);
    formData.append('category', values.category);
    formData.append('subcategory', values.subcategory);
    formData.append('color', values.color);

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
          name: selectProduct.name,
          price: selectProduct.price,
          url: '',
          description: selectProduct.description,
          brand: selectProduct.brand,
          weight: selectProduct.weight,
          packingType: selectProduct.packingType,
          country: selectProduct.country._id,
          category: selectProduct.category._id,
          subcategory: selectProduct.subcategory._id,
          color: selectProduct.color._id,
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Назва: <Field type="text" name="name" />
            <ErrorMessage name="name">{(msg) => <div>{msg}</div>}</ErrorMessage>
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

          <label>
            Країна:{' '}
            <Field as="select" name="country">
              <option value={selectProduct.country._id}>
                {selectProduct.country.name}
              </option>
            </Field>
            <ErrorMessage name="country">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </label>
          <label>
            Категорія:{' '}
            <Field as="select" name="category">
              <option value={selectProduct.category._id}>
                {selectProduct.category.name}
              </option>
            </Field>
            <ErrorMessage name="category">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </label>
          <label>
            Підкатегорія:{' '}
            <Field as="select" name="subcategory">
              <option value={selectProduct.subcategory._id}>
                {selectProduct.subcategory.name}
              </option>
            </Field>
            <ErrorMessage name="subcategory">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </label>
          <label>
            Колір:{' '}
            <Field as="select" name="color">
              <option value={selectProduct.color._id}>
                {selectProduct.color.name}
              </option>
            </Field>
            <ErrorMessage name="color">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </label>
          <button type="submit">Зберегти</button>
        </Form>
      </Formik>
    )
  );
};

export default FormUpdateProductAdmin;

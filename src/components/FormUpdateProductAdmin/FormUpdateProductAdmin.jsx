'use client';
import { Formik, Form, Field } from 'formik';
import { useUpdateProductMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { useState } from 'react';

const FormUpdateProductAdmin = ({ selectProduct }) => {
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
    await updateProduct({ formData, productId: selectProduct._id });
  };
  return (
    selectProduct && (
      <Formik
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
            Name: <Field type="text" name="name" />
          </label>
          <label>
            Price: <Field type="text" name="price" />
          </label>
          <label>
            Image:{' '}
            <input
              type="file"
              accept="image/*"
              name="url"
              onChange={(e) => setSelectedImg(e.target.files[0])}
            />
          </label>
          <label>
            description: <Field type="text" name="description" />
          </label>
          <label>
            brand: <Field type="text" name="brand" />
          </label>
          <label>
            weight: <Field type="text" name="weight" />
          </label>
          <label>
            packingType: <Field type="text" name="packingType" />
          </label>

          <label>
            Country:{' '}
            <Field as="select" name="country">
              <option value={selectProduct.country._id}>
                {selectProduct.country.name}
              </option>
            </Field>
          </label>
          <label>
            Category:{' '}
            <Field as="select" name="category">
              <option value={selectProduct.category._id}>
                {selectProduct.category.name}
              </option>
            </Field>
          </label>
          <label>
            Subcategory:{' '}
            <Field as="select" name="subcategory">
              <option value={selectProduct.subcategory._id}>
                {selectProduct.subcategory.name}
              </option>
            </Field>
          </label>
          <label>
            Color:{' '}
            <Field as="select" name="color">
              <option value={selectProduct.color._id}>
                {selectProduct.color.name}
              </option>
            </Field>
          </label>
          <button type="submit">Update</button>
        </Form>
      </Formik>
    )
  );
};

export default FormUpdateProductAdmin;

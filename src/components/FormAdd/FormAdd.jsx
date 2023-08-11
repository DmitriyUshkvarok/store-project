'use client';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import {
  useGetAllCountriesQuery,
  useGetAllCategoryQuery,
  useGetAllColorQuery,
  useGetAllSubcategoryQuery,
  useAddProductMutation,
} from '@/src/redux/ofertaApi/ofertaApi';

const FormAdd = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [add] = useAddProductMutation();

  const { data: countries } = useGetAllCountriesQuery();
  const { data: categories } = useGetAllCategoryQuery();
  const { data: subcategories } = useGetAllSubcategoryQuery();
  const { data: colors } = useGetAllColorQuery();

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

    await add(formData);
  };
  return (
    <div>
      <h2>Додати продукт</h2>
      <Formik
        initialValues={{
          name: '',
          price: '',
          url: '',
          description: '',
          brand: '',
          weight: '',
          packingType: '',
          country: '',
          category: '',
          subcategory: '',
          color: '',
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
              {countries?.map((country) => (
                <option value={country._id} key={country._id}>
                  {country.name}
                </option>
              ))}
            </Field>
          </label>
          <label>
            Category:{' '}
            <Field as="select" name="category">
              {categories?.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </Field>
          </label>
          <label>
            Subcategory:{' '}
            <Field as="select" name="subcategory">
              {subcategories?.map((subcategory) => (
                <option value={subcategory._id} key={subcategory._id}>
                  {subcategory.name}
                </option>
              ))}
            </Field>
          </label>
          <label>
            Color:{' '}
            <Field as="select" name="color">
              {colors?.map((color) => (
                <option value={color._id} key={color._id}>
                  {color.name}
                </option>
              ))}
            </Field>
          </label>
          <button type="submit">Зберегти</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormAdd;

'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field } from 'formik';

import {
  useGetAllCountriesQuery,
  useGetAllCategoryQuery,
  useGetAllSubcategoryQuery,
  useGetAllColorQuery,
  useUpdateProductMutation,
} from '@/src/redux/ofertaApi/ofertaApi';
import { useState } from 'react';

const ModalUpdateForm = ({ show, handleClose, selectProduct }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { data: counties } = useGetAllCountriesQuery();
  const { data: categories } = useGetAllCategoryQuery();
  const { data: subcategories } = useGetAllSubcategoryQuery();
  const { data: colors } = useGetAllColorQuery();
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (values) => {
    console.log(values.url);
    console.log(selectedImg);
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
    console.log(values);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectProduct && (
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
                    {counties?.map((country) => (
                      <option key={country._id} value={country._id}>
                        {country.name}
                      </option>
                    ))}
                  </Field>
                </label>
                <label>
                  Category:{' '}
                  <Field as="select" name="category">
                    <option value={selectProduct.category._id}>
                      {selectProduct.category.name}
                    </option>
                    {categories?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </Field>
                </label>
                <label>
                  Subcategory:{' '}
                  <Field as="select" name="subcategory">
                    <option value={selectProduct.subcategory._id}>
                      {selectProduct.subcategory.name}
                    </option>
                    {subcategories?.map((subcategory) => (
                      <option key={subcategory._id} value={subcategory._id}>
                        {subcategory.name}
                      </option>
                    ))}
                  </Field>
                </label>
                <label>
                  Color:{' '}
                  <Field as="select" name="color">
                    <option value={selectProduct.color._id}>
                      {selectProduct.color.name}
                    </option>
                    {colors?.map((color) => (
                      <option key={color._id} value={color._id}>
                        {color.name}
                      </option>
                    ))}
                  </Field>
                </label>
                <button type="submit">Update</button>
              </Form>
            </Formik>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateForm;

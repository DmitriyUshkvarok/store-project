import { Formik, Form, Field } from 'formik';

const SearchFormAdmin = ({ filterSearch, handleAllProduct }) => {
  const handleSubmit = (values, action) => {
    filterSearch(values);
    action.resetForm();
  };
  return (
    <div>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field type="text" name="search" />
          </label>
          <button type="submit">Пошук</button>
        </Form>
      </Formik>
      <button onClick={handleAllProduct} type="button">
        Показати увесь товар
      </button>
    </div>
  );
};

export default SearchFormAdmin;

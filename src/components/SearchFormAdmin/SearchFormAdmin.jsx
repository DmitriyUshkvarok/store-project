import { Formik, Form, Field } from 'formik';

const SearchFormAdmin = () => {
  const handleSubmit = (values) => {};
  return (
    <div>
      <Formik initialValues={{ name: 'search' }} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field type="text" name="search" />
          </label>
          <button type="submit">Пошук</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchFormAdmin;

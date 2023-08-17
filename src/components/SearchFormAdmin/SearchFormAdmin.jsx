import { Formik, Form } from 'formik';

const SearchFormAdmin = ({ filterSearch }) => {
  return (
    <div>
      <Formik>
        <Form>
          <label>
            <input
              onChange={(e) => filterSearch(e)}
              type="text"
              name="search"
            />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchFormAdmin;

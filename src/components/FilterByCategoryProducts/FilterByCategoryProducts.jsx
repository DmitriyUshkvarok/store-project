'use client';
import Form from 'react-bootstrap/Form';

const FilterByCategoryProducts = ({
  countries,
  select,
  colors,
  selectColor,
}) => {
  return (
    <div>
      <Form>
        <div key={`radio`} className="mb-3">
          {countries?.map((counrty) => (
            <Form.Check
              key={counrty}
              label={counrty}
              name="group1"
              type={'radio'}
              id={counrty}
              onChange={() => select(counrty)}
            />
          ))}
        </div>
      </Form>
      <Form>
        <div key={`radio`} className="mb-3">
          {colors?.map((color) => (
            <Form.Check
              key={color}
              label={color}
              name="group1"
              type={'radio'}
              id={color}
              onChange={() => selectColor(color)}
            />
          ))}
        </div>
      </Form>
    </div>
  );
};

export default FilterByCategoryProducts;

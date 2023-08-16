'use client';
import Form from 'react-bootstrap/Form';

const FilterByCategoryProducts = ({
  countries,
  select,
  colors,
  selectColor,
  reset,
  selectedCountry,
  selectedColor,
}) => {
  return (
    <div>
      <div>
        <div>
          <p>Країни</p>
          <Form>
            <div key={`radio`} className="mb-3">
              {countries?.map((counrty) => (
                <Form.Check
                  key={counrty}
                  label={counrty}
                  name="group1"
                  type={'radio'}
                  id={counrty}
                  value={counrty}
                  checked={counrty === selectedCountry ? true : false}
                  onChange={() => select(counrty)}
                />
              ))}
            </div>
          </Form>
        </div>
        <div>
          <p>Колір</p>
          <Form>
            <div key={`radio`} className="mb-3">
              {colors?.map((color) => (
                <Form.Check
                  key={color}
                  label={color}
                  name="group1"
                  type={'radio'}
                  id={color}
                  value={color}
                  checked={color === selectedColor ? true : false}
                  onChange={() => selectColor(color)}
                />
              ))}
            </div>
          </Form>
        </div>

        <button onClick={reset} type="button">
          Скинути фільтр
        </button>
      </div>
    </div>
  );
};

export default FilterByCategoryProducts;

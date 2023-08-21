'use client';
import Form from 'react-bootstrap/Form';
import { Btn, StyledRadio, Title } from './FilterByCategoryProducts.styled';

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
        <Title>Країни</Title>
        <Form>
          <div key={`radio`} className="mb-3">
            {countries?.map((counrty) => (
              <StyledRadio
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
        <Title>Колір</Title>
        <Form>
          <div key={`radio`} className="mb-3">
            {colors?.map((color) => (
              <StyledRadio
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
      <Btn onClick={reset} type="button">
        Скинути фільтр
      </Btn>
    </div>
  );
};

export default FilterByCategoryProducts;

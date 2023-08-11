'use client';
import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import Link from 'next/link';
import 'rc-slider/assets/index.css';
import { Box, AboutBox, Title, Products, Picture } from './AllProducts.styled';
import { useGetAllProductsFilteredQuery } from '@/src/redux/ofertaApi/ofertaApi';
import Spinner from '../SpinerOferta/SpinerOferta';
import { useDispatch } from 'react-redux';
import { slugify } from 'transliteration';
import {
  setDataAndId,
  setDataAndIdCategoty,
  setDataAndIdColor,
  setDataAndIdSubCategoty,
} from '@/src/redux/ofertaApi/ofertaSlice';

import {
  useGetCategoriesQuery,
  useGetColorsQuery,
  useGetCountriesQuery,
  useGetSubcategoriesQuery,
} from '@/src/redux/propertiesApi/propertiesApi';

const AllProducts = () => {
  const [allProductsFiltered, setAllProducts] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [qwery, setQwery] = useState({
    countryId: '',
    categoryId: '',
    subcategoryId: '',
    colorId: '',
    minPrice: 0,
    maxPrice: 10000,
    page: currentPage,
  });
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useGetAllProductsFilteredQuery(qwery);
  const countries = useGetCountriesQuery();
  const categories = useGetCategoriesQuery();
  const subCategories = useGetSubcategoriesQuery();
  const colors = useGetColorsQuery();

  useEffect(() => {
    if (data && isLoadingMore) {
      setAllProducts((prevProducts) => [...prevProducts, ...data.products]);
      setIsLoadingMore(false);
    }
    if (data && !isLoadingMore) {
      setQwery((prevQwery) => ({
        ...prevQwery,
        page: 1,
      }));
      setAllProducts(data.products);
    }
  }, [data]);

  const handleChooseProduct = (country, category, subcategory, color) => {
    dispatch(setDataAndId(country));
    dispatch(setDataAndIdCategoty(category));
    dispatch(setDataAndIdSubCategoty(subcategory));
    dispatch(setDataAndIdColor(color));
  };

  const handelMoreLoad = () => {
    setIsLoadingMore(true);
    const nextPage = currentPage + 1;
    setQwery((prevQwery) => ({
      ...prevQwery,
      page: nextPage,
    }));
  };

  console.log(`allProductsFiltered`, allProductsFiltered);
  console.log(`qwery==>>>>`, qwery);
  return (
    <>
      <AboutBox>
        <Box>
          <Title>Увесь товар</Title>
          {/* ===============ФІЛЬР ====================*/}
          <div>
            <p>ФІЛЬТР</p>

            <p>Обери країну</p>
            <select
              value={qwery.countryId}
              onChange={(e) => {
                const selectedCountryId = e.target.value;
                setQwery((prevQwery) => ({
                  ...prevQwery,
                  countryId: selectedCountryId,
                }));
              }}
            >
              <option value="">Всі країни</option>
              {countries.isLoading ? (
                <option value="">Loading</option>
              ) : (
                countries.data.map((country) => (
                  <option key={country._id} value={country._id}>
                    {country.name}
                  </option>
                ))
              )}
            </select>

            <p>Обери кетегорію товару</p>
            <select
              value={qwery.categoryId}
              onChange={(e) => {
                const selectedCategoryId = e.target.value;
                setQwery((prevQwery) => ({
                  ...prevQwery,
                  categoryId: selectedCategoryId,
                }));
              }}
            >
              <option value="">Всі категорії</option>
              {categories.isLoading ? (
                <option value="">Loading</option>
              ) : (
                categories?.data.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))
              )}
            </select>

            <p>Обери вид товару товару</p>
            <select
              value={qwery.subcategoryId}
              onChange={(e) => {
                const selectedSubcategoryId = e.target.value;
                setQwery((prevQwery) => ({
                  ...prevQwery,
                  subcategoryId: selectedSubcategoryId,
                }));
              }}
            >
              <option value="">Всі види</option>
              {subCategories.isLoading ? (
                <option value="">Loading</option>
              ) : (
                subCategories?.data.map((subCategory) => (
                  <option key={subCategory._id} value={subCategory._id}>
                    {subCategory.name}
                  </option>
                ))
              )}
            </select>

            <p>Обери колір</p>
            <select
              value={qwery.colorId}
              onChange={(e) => {
                const selectedCountryId = e.target.value;
                setQwery((prevQwery) => ({
                  ...prevQwery,
                  colorId: selectedCountryId,
                }));
              }}
            >
              <option value="">Всі кольори</option>
              {colors.isLoading ? (
                <option value="">Loading</option>
              ) : (
                colors.data.map((color) => (
                  <option key={color._id} value={color._id}>
                    {color.name}
                  </option>
                ))
              )}
            </select>
            <div>
              <span>
                Діапазон цін: {qwery.minPrice} грн. - {qwery.maxPrice} грн.
              </span>
              <Slider
                range
                value={[qwery.minPrice, qwery.maxPrice]}
                onChange={(values) => {
                  setQwery((prevQwery) => ({
                    ...prevQwery,
                    minPrice: values[0],
                    maxPrice: values[1],
                  }));
                }}
                min={0}
                max={10000}
              />
            </div>
          </div>

          {/* ===============ФІЛЬР END ====================*/}
          <Products>
            {isLoading ? (
              <Spinner />
            ) : (
              allProductsFiltered.map((product) => (
                <li
                  key={product._id}
                  onClick={() =>
                    handleChooseProduct(
                      product.country,
                      product.category,
                      product.subcategory,
                      product.color
                    )
                  }
                >
                  <Link
                    href={`/oferta/${slugify(product.country.name)}/${slugify(
                      product.category.name
                    )}/${slugify(product.subcategory.name)}/${slugify(
                      product.color.name
                    )}`}
                  >
                    <Picture
                      src={product.url}
                      alt={`Image`}
                      width="230"
                      height="1266"
                    />
                    <h2>{product.name}</h2>
                    <p>Виробник: {product.country.name}</p>
                    <p>Ціна: {product.price} грн.</p>
                  </Link>
                </li>
              ))
            )}
          </Products>
          {data?.products.length >= 10 && (
            <button type="button" onClick={handelMoreLoad}>
              Завантажити ще товар
            </button>
          )}
        </Box>
      </AboutBox>
    </>
  );
};

export default AllProducts;

'use client';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';
import 'rc-slider/assets/index.css';
import {
  Box,
  BoxFilter,
  AboutBox,
  Title,
  ProductsList,
  Picture,
  Item,
  BoxTitle,
  TitleProduct,
  Price,
  Overlay,
  TextOverlay,
  PictureOverlay,
  Btn,
  TitleFilter,
  StyledSelect,
  StyledSlider,
  Chip,
  TitleF,
} from './AllProducts.styled';
import { useGetAllProductsFilteredQuery } from '@/src/redux/ofertaApi/ofertaApi';
import Spinner from '../SpinerOferta/SpinerOferta';
import { useDispatch } from 'react-redux';
import { slugify } from 'transliteration';
import {
  setDataAndIdCategoty,
  setDataAndIdProduct,
} from '@/src/redux/ofertaApi/ofertaSlice';

import {
  useGetCategoriesQuery,
  useGetColorsQuery,
  useGetCountriesQuery,
  useGetSubcategoriesQuery,
} from '@/src/redux/propertiesApi/propertiesApi';

const AllProducts = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [allProductsFiltered, setAllProducts] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [qwery, setQwery] = useState({
    categoryId: '',
    country: '',
    color: '',
    minPrice: 0,
    maxPrice: 10000,
    page: currentPage,
  });
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useGetAllProductsFilteredQuery(qwery);

  console.log(`data`, data);

  const handelMoreLoad = () => {
    setIsLoadingMore(true);
    const nextPage = qwery.page + 1;
    setQwery((prevQwery) => ({
      ...prevQwery,
      page: nextPage,
    }));
    console.log(`qwery==============>`, qwery);
  };

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

  const handleChooseProduct = (product) => {
    // dispatch(setDataAndIdCategoty(category));
    dispatch(setDataAndIdProduct(product));
  };

  return (
    <>
      <AboutBox>
        <Title>Увесь товар</Title>

        <Box>
          {/* ===============ФІЛЬР ====================*/}

          <BoxFilter>
            <TitleF>ФІЛЬТР</TitleF>

            <div>
              <TitleFilter> Країна</TitleFilter>
              <StyledSelect
                value={qwery.country}
                onChange={(e) => {
                  const selectedCountryId = e.target.value;
                  setQwery((prevQwery) => ({
                    ...prevQwery,
                    country: selectedCountryId,
                  }));
                }}
              >
                <option value="">Всі країни</option>
                {isLoading ? (
                  <option value="">Loading</option>
                ) : (
                  data?.countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))
                )}
              </StyledSelect>
            </div>
            <div>
              <TitleFilter>Кетегорію товару</TitleFilter>

              <StyledSelect
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
                {isLoading ? (
                  <option value="">Loading</option>
                ) : (
                  data?.categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))
                )}
              </StyledSelect>
            </div>
            <div>
              <TitleFilter>Колір</TitleFilter>
              <StyledSelect
                value={qwery.color}
                onChange={(e) => {
                  const selectedCountryId = e.target.value;
                  setQwery((prevQwery) => ({
                    ...prevQwery,
                    color: selectedCountryId,
                  }));
                }}
              >
                <option value="">Всі кольори</option>
                {isLoading ? (
                  <option value="">Loading</option>
                ) : (
                  data?.colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))
                )}
              </StyledSelect>
            </div>
            <div>
              <TitleFilter> Ціна: </TitleFilter>
              <Chip>
                {qwery.minPrice} грн. - {qwery.maxPrice} грн.
              </Chip>
              <StyledSlider
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
          </BoxFilter>

          {/* ===============ФІЛЬР END ====================*/}
          <ProductsList>
            {isLoading ? (
              <Spinner />
            ) : (
              allProductsFiltered.map((product) => (
                <Item
                  key={product._id}
                  onClick={() => handleChooseProduct(product)}
                >
                  <Link
                    href={`/oferta/${slugify(product.category.name)}/${slugify(
                      product.name
                    )}`}
                  >
                    <PictureOverlay>
                      <Picture
                        src={product.url}
                        alt={`Image`}
                        width="250"
                        height="1270"
                        priority={true}
                      />
                      <Overlay>
                        <TextOverlay>{product.description}</TextOverlay>
                        <TextOverlay>Виробник: {product.country}</TextOverlay>
                      </Overlay>
                    </PictureOverlay>

                    <BoxTitle>
                      <TitleProduct>{product.name}</TitleProduct>
                      <Price>Ціна: {product.price} грн.</Price>
                    </BoxTitle>
                  </Link>
                </Item>
              ))
            )}
          </ProductsList>
        </Box>
        {data?.products.length >= 10 && (
          <Btn onClick={handelMoreLoad}>Завантажити ще...</Btn>
        )}
      </AboutBox>
    </>
  );
};

export default AllProducts;

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
} from './AllProducts.styled';
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    console.log('click', isFilterOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsFilterOpen(false);
      console.log('click', setIsFilterOpen);
    }
  };
  const handleBackdropClick = (e) => {
    // Припустимо, у вашому компоненті BoxFilter є клас "box-filter"
    if (!e.target.closest('.box-filter')) {
      setIsFilterOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleBackdropClick);

    return () => {
      document.removeEventListener('mousedown', handleBackdropClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  // console.log(`allProductsFiltered`, allProductsFiltered);
  // console.log(`qwery==>>>>`, qwery);
  return (
    <>
      <AboutBox>
        <Title>Увесь товар</Title>
        <button type="button" onClick={toggleFilter}>
          ФІЛЬТР
        </button>
        <Box>
          {/* ===============ФІЛЬР ====================*/}

          {isFilterOpen && (
            <BoxFilter className="box-filter">
              <TitleFilter>ФІЛЬТР</TitleFilter>

              <div>
                <TitleFilter> Країна</TitleFilter>
                <StyledSelect
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
                  {categories.isLoading ? (
                    <option value="">Loading</option>
                  ) : (
                    categories?.data.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))
                  )}
                </StyledSelect>
              </div>
              <div>
                <TitleFilter>Вид товару</TitleFilter>
                <StyledSelect
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
                </StyledSelect>
              </div>
              <div>
                <TitleFilter>Колір</TitleFilter>
                <StyledSelect
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
          )}

          {/* ===============ФІЛЬР END ====================*/}
          <ProductsList>
            {isLoading ? (
              <Spinner />
            ) : (
              allProductsFiltered.map((product) => (
                <Item
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
                    <PictureOverlay>
                      <Picture
                        src={product.url}
                        alt={`Image`}
                        width="230"
                        height="1266"
                      />
                    </PictureOverlay>

                    <BoxTitle>
                      <TitleProduct>{product.name}</TitleProduct>
                      <Price>Ціна: {product.price} грн.</Price>
                    </BoxTitle>

                    <Overlay>
                      <TextOverlay>{product.description}</TextOverlay>
                      <TextOverlay>
                        Виробник: {product.country.name}
                      </TextOverlay>
                    </Overlay>
                    <div></div>
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

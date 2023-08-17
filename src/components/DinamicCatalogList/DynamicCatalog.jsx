'use client';
import Link from 'next/link';
import { slugify } from 'transliteration';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import {
  useGetCategoryProductsQuery,
  useGetFilterCategoryProductsQuery,
} from '@/src/redux/ofertaApi/ofertaApi';
import { setDataAndIdProduct } from '@/src/redux/ofertaApi/ofertaSlice';
import Spinner from '../SpinerOferta/SpinerOferta';
import FilterByCategoryProducts from '@/src/components/FilterByCategoryProducts/FilterByCategoryProducts';
import {
  WrapNav,
  DecorSpanBackLink,
  CurrentNavDecor,
  TitleCard,
} from '@/src/components/CatalogList/CatalogList.styled';
import {
  AboutBox,
  ProductsList,
  Picture,
  Item,
  BoxTitle,
  TitleProduct,
  Price,
  Overlay,
  TextOverlay,
  PictureOverlay,
  Box,
  TitleCountry,
} from '@/src/components/AllProducts/AllProducts.styled';
import { useEffect, useState } from 'react';

const DynamicCatalogList = () => {
  const [selectedCountry, setSelectCountry] = useState('');
  const [selectedColor, setSelectColor] = useState('');
  const [products, setProducts] = useState([]);
  const [listCountries, setListCountries] = useState([]);
  const [listColors, setListColors] = useState([]);

  const params = useParams();
  const dispatch = useDispatch();

  const category = useSelector((state) => state.oferta.category);

  const { data, isError, isLoading } = useGetCategoryProductsQuery({
    categoryId: category.id,
    country: selectedCountry,
    color: selectedColor,
  });

  useEffect(() => {
    setProducts(data?.products);
    if (data?.countries || data?.colors) {
      setListCountries(data?.countries);
      setListColors(data?.colors);
    }

    if (selectedColor !== '' || selectedCountry !== '') {
      setProducts(data);
    }
  }, [data]);

  const handleChooseProduct = (product) => {
    dispatch(setDataAndIdProduct(product));
  };

  const handleChooseCountry = (counrty) => {
    setSelectCountry(counrty);
  };

  const handleChooseColor = (color) => {
    setSelectColor(color);
  };

  const reserFilter = () => {
    setSelectCountry('');
    setSelectColor('');
  };

  return (
    <AboutBox>
      <WrapNav>
        <Link href={`/home`}>
          <DecorSpanBackLink>Головна /</DecorSpanBackLink>
        </Link>
        <Link href={`/oferta`}>
          <DecorSpanBackLink>Каталог /</DecorSpanBackLink>
        </Link>
        <CurrentNavDecor>{category.name}</CurrentNavDecor>
      </WrapNav>
      <TitleCard>{category.name}</TitleCard>
      <Box>
        <FilterByCategoryProducts
          selectedColor={selectedColor}
          selectedCountry={selectedCountry}
          countries={listCountries}
          colors={listColors}
          select={handleChooseCountry}
          selectColor={handleChooseColor}
          reset={reserFilter}
        />
        <ProductsList>
          {isLoading ? (
            <Spinner />
          ) : products?.length !== 0 ? (
            products?.map((product) => (
              <Item
                onClick={() => handleChooseProduct(product)}
                key={product._id}
              >
                <Link
                  href={{
                    pathname: `/oferta/${params.product}/${slugify(
                      product.name
                    )}`,
                  }}
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
                    </Overlay>
                  </PictureOverlay>

                  <BoxTitle>
                    <TitleProduct>{product.name}</TitleProduct>
                    <Price>Ціна: {product.price} грн.</Price>
                    <TitleCountry>Виробник: {product.country}</TitleCountry>
                  </BoxTitle>
                </Link>
              </Item>
            ))
          ) : (
            <div>
              <p>На ваш запит нічого не знайдено</p>
            </div>
          )}
        </ProductsList>
      </Box>
    </AboutBox>
  );
};

export default DynamicCatalogList;

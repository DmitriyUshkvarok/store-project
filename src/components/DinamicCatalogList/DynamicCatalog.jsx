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
} from '@/src/components/AllProducts/AllProducts.styled';
import { useEffect, useState } from 'react';

const DynamicCatalogList = () => {
  const [selectCountry, setSelectCountry] = useState('');
  const [selectColor, setSelectColor] = useState('');

  const params = useParams();
  const dispatch = useDispatch();

  const category = useSelector((state) => state.oferta.category);

  const { data, isError, isLoading } = useGetCategoryProductsQuery({
    categoryId: category.id,
    country: encodeURIComponent(selectCountry),
    color: encodeURIComponent(selectColor),
  });

  useEffect(() => {}, [data]);

  const handleChooseProduct = (product) => {
    dispatch(setDataAndIdProduct(product));
  };

  const handleChooseCountry = (counrty) => {
    setSelectCountry(counrty);
  };

  const handleChooseColor = (color) => {
    setSelectColor(color);
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
          countries={data?.countries}
          colors={data?.colors}
          select={handleChooseCountry}
          selectColor={handleChooseColor}
        />
        <ProductsList>
          {isLoading ? (
            <Spinner />
          ) : (
            data?.products?.map((product) => (
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
    </AboutBox>
  );
};

export default DynamicCatalogList;

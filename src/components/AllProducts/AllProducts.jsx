'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Box,
  AboutBox,
  Title,
  Products,
  Picture,
  ProductDetailSection,
  LinkPanel,
  StyleLinkDetail,
  CurrentLink,
  ProductDetailInfoBlock,
  ImageBlock,
  ProductName,
  ProductBlockLeft,
  ProductBlockRight,
  ProductCharacterization,
  ProductDescription,
  ProductWeight,
  ProductPackingType,
  CategorySpan,
  ProductPrice,
  SpanPrice,
  ProductBrand,
  ProductColor,
  CounterWrapper,
  BtnIncrement,
  InputCounter,
  BtnDecrement,
} from './AllProducts.styled';
import { useGetAllProductsQuery } from '@/src/redux/ofertaApi/ofertaApi';
import Spinner from '../SpinerOferta/SpinerOferta';
import { useDispatch } from 'react-redux';
import { slugify } from 'transliteration';
import {
  setDataAndId,
  setDataAndIdCategoty,
  setDataAndIdColor,
  setDataAndIdSubCategoty,
} from '@/src/redux/ofertaApi/ofertaSlice';
import Link from 'next/link';

const AllProducts = () => {
  const dispatch = useDispatch();
  const { data, isError, isLoading } = useGetAllProductsQuery();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setAllProducts(data.products);
    }
  }, [data]);

  console.log(allProducts);

  const handleChooseProduct = (country, category, subcategory, color) => {
    console.log(`subcategory`, subcategory);
    dispatch(setDataAndId(country));
    dispatch(setDataAndIdCategoty(category));
    dispatch(setDataAndIdSubCategoty(subcategory));
    dispatch(setDataAndIdColor(color));
  };

  return (
    <AboutBox>
      <Box>
        <Title>Увесь товар</Title>
        <Products>
          {isLoading ? (
            <Spinner />
          ) : (
            allProducts.map((product) => (
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
                  <p>Виробник: {product.country[name]}</p>
                  <p>Ціна: {product.price} грн.</p>
                </Link>
              </li>
            ))
          )}
        </Products>
      </Box>
    </AboutBox>
  );
};

export default AllProducts;

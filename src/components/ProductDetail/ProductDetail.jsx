'use client';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  setQuantityById,
} from '@/src/redux/orderQantity/quantitySlice';
import { addToCart } from '@/src/redux/cart/cartSlise';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { useGetInfoProductQuery } from '@/src/redux/ofertaApi/ofertaApi';
import { AiOutlineFilePdf } from 'react-icons/ai';

import {
  ProductDetailSection,
  LinkPanel,
  StyleLinkDetail,
  CurrentLink,
  ProductDetailInfoBlock,
  ProductFullName,
  ProductInfoName,
  ImageBlock,
  ProductName,
  ProductBlockLeft,
  ProductBlockRight,
  StyleImage,
  ProductСharacterization,
  ProductDescription,
  ProductWeight,
  ProductPackingType,
  CategorySpan,
  ProductPrice,
  SpanPrice,
  ProductBrand,
  ProductColor,
  ProductCountry,
  ProductType,
  ProductFormula,
  ProductDensity,
  ProductPdf,
  CounterAndBtnWrapper,
  CounterWrapper,
  BtnIncrement,
  InputCounter,
  BtnDecrement,
  Box,
  Product,
  CategorySpanPdf,
  Boxer,
} from './ProductDetail.styled';
import Container from '../Container/Container';
import BtnBuy from '../BtnBuy/BtnBuy';
import cartSelector from '@/src/redux/cart/cartSelector';
import {
  DecorSpanBackLink,
  CurrentNavDecor,
} from '@/src/components/CatalogList/CatalogList.styled';
import Link from 'next/link';

const ProductDetail = () => {
  const params = useParams();
  const cartItems = useSelector(cartSelector.getIsItems);
  const product = useSelector((state) => state.oferta.product);
  const category = useSelector((state) => state.oferta.category);

  const { data, isLoading } = useGetInfoProductQuery({
    productId: product.id,
  });

  const productInfo = data;

  const isProductInCart = cartItems.some(
    (item) => item.id === productInfo?._id
  );

  const dispatch = useDispatch();
  const quantity = useSelector(
    (state) => state.quantity[productInfo?._id] || 0
  );

  const handleIncrement = () => {
    dispatch(incrementQuantity({ itemId: productInfo?._id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ itemId: productInfo?._id }));
  };

  const handleBuy = () => {
    const date = new Date();
    const formatData = format(new Date(date), 'dd MMMM, yyyy | HH:mm');

    if (quantity === 0) {
      toast.warning('Оберіть кількість товару');
      return;
    }

    const productToAdd = {
      id: productInfo?._id,
      title: productInfo?.name,
      price: productInfo?.price,
      image: productInfo?.url,
      data: formatData,
      brand: productInfo?.brand,
      color: productInfo?.color,
      weight: productInfo?.weight,
    };

    if (isProductInCart) {
      toast.info('Цей товар вже є у кошику');
    } else {
      dispatch(addToCart(productToAdd));
      toast.success('Товар додано до кошику');
    }
  };

  const handleChangeQuantity = (newQuantity) => {
    dispatch(
      setQuantityById({ itemId: productInfo?._id, quantity: newQuantity })
    );
  };

  return (
    <ProductDetailSection>
      <Box>
        <LinkPanel>
          <Link href={`/home`}>
            <DecorSpanBackLink>Головна /</DecorSpanBackLink>
          </Link>
          <Link href={`/oferta`}>
            <DecorSpanBackLink>Каталог /</DecorSpanBackLink>
          </Link>
          <Link href={`/oferta/${params.product}`}>
            <DecorSpanBackLink>{category.name} /</DecorSpanBackLink>
          </Link>
          <CurrentNavDecor>{data?.name}</CurrentNavDecor>
        </LinkPanel>
        <Product>
          {isLoading ? (
            <p>Загрузка данных...</p>
          ) : (
            <Boxer>
              <ProductDetailInfoBlock key={productInfo._id}>
                <ProductBlockLeft>
                  <ImageBlock>
                    <StyleImage
                      src={
                        productInfo?.url ||
                        'https://set-iset.ru/wp-content/uploads/woocommerce-placeholder.png'
                      }
                      alt={productInfo?.name || ''}
                      width={300}
                      height={200}
                    />
                  </ImageBlock>
                  <ProductDescription>
                    {productInfo?.description}
                  </ProductDescription>
                </ProductBlockLeft>
                <ProductBlockRight>
                  <div>
                    <ProductFullName>{productInfo?.fullName}</ProductFullName>
                    <ProductInfoName>
                      {productInfo?.category.name}
                    </ProductInfoName>
                    <ProductName>{productInfo?.name}</ProductName>
                    <ProductWeight>
                      Вага:<CategorySpan>{productInfo?.weight} кг</CategorySpan>
                    </ProductWeight>
                    <ProductBrand>
                      Бренд:<CategorySpan>{productInfo?.brand}</CategorySpan>
                    </ProductBrand>
                    <ProductColor>
                      Колір:<CategorySpan>{productInfo?.color}</CategorySpan>
                    </ProductColor>
                    <ProductCountry>
                      Країна:<CategorySpan>{productInfo?.country}</CategorySpan>
                    </ProductCountry>
                    <ProductPackingType>
                      Тип упаковки:
                      <CategorySpan>{productInfo?.packingType}</CategorySpan>
                    </ProductPackingType>
                    <ProductType>
                      Тип:<CategorySpan>{productInfo?.type}</CategorySpan>
                    </ProductType>
                    <ProductFormula>
                      Хімічна формула:
                      <CategorySpan>
                        {productInfo?.chemicalFormula}
                      </CategorySpan>
                    </ProductFormula>
                    <ProductDensity>
                      Дозування:
                      <CategorySpan>{productInfo?.density}</CategorySpan>
                    </ProductDensity>
                    <ProductPdf>
                      <a
                        href={productInfo?.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineFilePdf size={25} />
                        <CategorySpanPdf>
                          {' '}
                          Посилання на PDF-документ
                        </CategorySpanPdf>
                      </a>
                    </ProductPdf>
                    <ProductPrice>
                      Ціна:<SpanPrice>{productInfo?.price} грн.</SpanPrice>
                    </ProductPrice>
                  </div>
                  <CounterAndBtnWrapper>
                    <CounterWrapper>
                      <BtnIncrement onClick={handleDecrement}>-</BtnIncrement>
                      <InputCounter
                        type="text"
                        value={quantity}
                        onChange={(e) => handleChangeQuantity(e.target.value)}
                      />
                      <BtnDecrement onClick={handleIncrement}>+</BtnDecrement>
                    </CounterWrapper>
                    <BtnBuy
                      handleBuy={handleBuy}
                      isAddedToCart={isProductInCart}
                    />
                  </CounterAndBtnWrapper>
                </ProductBlockRight>
              </ProductDetailInfoBlock>
            </Boxer>
          )}
        </Product>
      </Box>
    </ProductDetailSection>
  );
};

export default ProductDetail;

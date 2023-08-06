'use client';
import { infoProduct } from '@/src/components/CatalogList/dataCatalogList';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  setQuantityById,
} from '@/src/redux/orderQantity/quantitySlice';
import { addToCart } from '@/src/redux/cart/cartSlise';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import {
  ProductDetailSection,
  LinkPanel,
  StyleLinkDetail,
  CurrentLink,
  ProductDetailInfoBlock,
  ImageBlock,
  ProductName,
  ProductBlockLeft,
  ProductBlockRight,
  ProductСharacterization,
  ProductDescription,
  ProductArticul,
  ProductCategory,
  CategorySpan,
  ProductPrice,
  SpanPrice,
  CounterWrapper,
  BtnIncrement,
  InputCounter,
  BtnDecrement,
  OrderBtnDetails,
} from './ProductDetail.styled';
import Container from '../Container/Container';
import BtnBuy from '../BtnBuy/BtnBuy';

const ProductDetail = () => {
  const params = useParams();
  const search = useSearchParams().get('id');

  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity[search] || 0);

  const handleIncrement = () => {
    dispatch(incrementQuantity({ itemId: search }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ itemId: search }));
  };

  const handleBuy = () => {
    const date = new Date();
    const formatData = format(new Date(date), 'dd MMMM, yyyy | HH:mm');

    if (quantity === 0) {
      toast.warning('Оберіть кількість товару');
      return;
    }

    const productToAdd = {
      id: search,
      title: infoProduct.title,
      price: infoProduct.price,
      image: infoProduct.img,
      data: formatData,
    };
    dispatch(addToCart(productToAdd));
    toast.success('Товар додано до кошику');
  };

  const handleChangeQuantity = (newQuantity) => {
    dispatch(setQuantityById({ itemId: search, quantity: newQuantity }));
  };

  return (
    <ProductDetailSection>
      <Container>
        <LinkPanel>
          <StyleLinkDetail href={`/home`}>Головна/</StyleLinkDetail>
          <StyleLinkDetail href={`/oferta`}>Каталог/</StyleLinkDetail>
          <StyleLinkDetail href={`/oferta/${params.product}`}>
            {params.product}/
          </StyleLinkDetail>
          <StyleLinkDetail
            href={`/oferta/${params.product}/${params.subProduct}`}
          >
            {params.subProduct}/
          </StyleLinkDetail>
          <CurrentLink>{params.info}</CurrentLink>
        </LinkPanel>
        <div>
          <ProductDetailInfoBlock>
            <ProductBlockLeft>
              <ImageBlock>
                <Image
                  src={infoProduct.img}
                  alt={infoProduct.title}
                  width={300}
                  height={300}
                />
                <ProductName>{infoProduct.title}</ProductName>
              </ImageBlock>
              <ProductPrice>
                Ціна: <SpanPrice>{infoProduct.price} грн</SpanPrice>
              </ProductPrice>
            </ProductBlockLeft>
            <ProductBlockRight>
              <div>
                <ProductСharacterization>Опис</ProductСharacterization>
                <ProductDescription>{infoProduct.desc}</ProductDescription>
                <ProductArticul>Артикуль: {infoProduct.articl}</ProductArticul>
                <ProductCategory>
                  Категорія: <CategorySpan>{infoProduct.category}</CategorySpan>
                </ProductCategory>
              </div>
              <CounterWrapper>
                <BtnIncrement onClick={handleDecrement}>-</BtnIncrement>
                <InputCounter
                  type="text"
                  value={quantity}
                  onChange={(e) => handleChangeQuantity(e.target.value)}
                />
                <BtnDecrement onClick={handleIncrement}>+</BtnDecrement>
              </CounterWrapper>
              <BtnBuy handleBuy={handleBuy} />
            </ProductBlockRight>
          </ProductDetailInfoBlock>
        </div>
      </Container>
    </ProductDetailSection>
  );
};

export default ProductDetail;

'use client';
import { infoProduct } from '@/src/components/CatalogList/dataCatalogList';
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
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
} from './ProductDetail.styled';
import Container from '../Container/Container';
import BtnBuy from '../BtnBuy/BtnBuy';
import cartSelector from '@/src/redux/cart/cartSelector';
import BtnBackNav from '../BtnBackNav/BtnBackNav';

const ProductDetail = () => {
  const params = useParams();
  const router = useRouter();
  const search = useSearchParams().get('id');
  const cartItems = useSelector(cartSelector.getIsItems);
  const country = useSelector((state) => state.oferta.countrie);
  const category = useSelector((state) => state.oferta.categoty);
  const subcategory = useSelector((state) => state.oferta.subcategory);
  const color = useSelector((state) => state.oferta.color);

  const { data, isError, isLoading } = useGetInfoProductQuery({
    countryId: country.id,
    categoryId: category.id,
    subcategoryId: subcategory.id,
    colorId: color.id,
  });

  console.log(data);
  //Теперь в useSearchParams у нас ничего нет все достаем с селектора который тебе нужен(там храниться name и id)

  const isProductInCart = cartItems.some((item) => item.id === search);

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
      brand: infoProduct.brand,
      color: infoProduct.color,
    };
    // dispatch(addToCart(productToAdd));
    // toast.success('Товар додано до кошику');
    // Проверка наличия товара в корзине по его id

    if (isProductInCart) {
      toast.info('Цей товар вже є у кошику');
    } else {
      dispatch(addToCart(productToAdd));
      toast.success('Товар додано до кошику');
    }
  };

  const handleChangeQuantity = (newQuantity) => {
    dispatch(setQuantityById({ itemId: search, quantity: newQuantity }));
  };

  const handlClickBack = () => {
    router.back();
  };

  return (
    <ProductDetailSection>
      <Container>
        <LinkPanel>
          <StyleLinkDetail href={`/home`}>Головна /</StyleLinkDetail>
          <StyleLinkDetail href={`/oferta`}>Каталог /</StyleLinkDetail>
          <StyleLinkDetail href={`/oferta/${params.product}`}>
            {country.name} /
          </StyleLinkDetail>
          <StyleLinkDetail
            href={`/oferta/${params.product}/${params.subProduct}`}
          >
            {category.name} /
          </StyleLinkDetail>
          <BtnBackNav click={handlClickBack} text={subcategory.name} />

          <CurrentLink>{color.name}</CurrentLink>
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
              <BtnBuy handleBuy={handleBuy} isAddedToCart={isProductInCart} />
            </ProductBlockRight>
          </ProductDetailInfoBlock>
        </div>
      </Container>
    </ProductDetailSection>
  );
};

export default ProductDetail;

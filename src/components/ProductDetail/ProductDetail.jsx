'use client';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
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
} from './ProductDetail.styled';
import Container from '../Container/Container';
import BtnBuy from '../BtnBuy/BtnBuy';
import cartSelector from '@/src/redux/cart/cartSelector';
import BtnBackNav from '../BtnBackNav/BtnBackNav';

const ProductDetail = () => {
  const params = useParams();
  const router = useRouter();
  const cartItems = useSelector(cartSelector.getIsItems);
  const product = useSelector((state) => state.oferta.product);
  const category = useSelector((state) => state.oferta.category);

  const { data, isLoading } = useGetInfoProductQuery({
    productId: product.id,
    // categoryId: category.id,
    // subcategoryId: subcategory.id,
    // colorId: color.id,
  });

  console.log(data);

  const productInfo = data?.[0];

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
      color: color.name,
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
            {category.name} /
          </StyleLinkDetail>

          <CurrentLink>{data?.name}</CurrentLink>
        </LinkPanel>
        <div>
          {isLoading ? (
            <p>Загрузка данных...</p>
          ) : (
            <div>
              {/* {data?.map((productInfo) => (
                <ProductDetailInfoBlock key={productInfo._id}>
                  <ProductBlockLeft>
                    <ImageBlock>
                      <Image
                        src={
                          productInfo?.url ||
                          'https://set-iset.ru/wp-content/uploads/woocommerce-placeholder.png'
                        }
                        alt={productInfo?.name || ''}
                        width={500}
                        height={400}
                        style={{ marginBottom: '10px' }}
                      />
                      <ProductName>{productInfo?.name}</ProductName>
                    </ImageBlock>
                    <ProductPrice>
                      Ціна:<SpanPrice>{productInfo?.price} грн</SpanPrice>
                    </ProductPrice>
                  </ProductBlockLeft>
                  <ProductBlockRight>
                    <div>
                      <ProductСharacterization>Опис</ProductСharacterization>
                      <ProductDescription>
                        {productInfo?.description}
                      </ProductDescription>
                      <ProductWeight>
                        Вага:<CategorySpan>{productInfo?.weight}</CategorySpan>
                      </ProductWeight>
                      <ProductPackingType>
                        Тип упаковки:
                        <CategorySpan>{productInfo?.packingType}</CategorySpan>
                      </ProductPackingType>
                      <ProductBrand>
                        бренд:<CategorySpan>{productInfo?.brand}</CategorySpan>
                      </ProductBrand>
                      <ProductColor>
                        Колір:<CategorySpan>{color.name}</CategorySpan>
                      </ProductColor>
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
                    <BtnBuy
                      handleBuy={handleBuy}
                      isAddedToCart={isProductInCart}
                    />
                  </ProductBlockRight>
                </ProductDetailInfoBlock>
              ))} */}
            </div>
          )}
        </div>
      </Container>
    </ProductDetailSection>
  );
};

export default ProductDetail;

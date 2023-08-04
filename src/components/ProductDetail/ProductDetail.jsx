'use client';
import { infoProduct } from '@/src/components/CatalogList/dataCatalogList';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
} from '@/src/redux/orderQantity/quantitySlice';
import { addToCart } from '@/src/redux/cart/cartSlise';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

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

  return (
    <div>
      <div>
        <Link href={`/home`}>Головна/</Link>
        <Link href={`/oferta`}>Каталог/</Link>
        <Link href={`/oferta/${params.product}`}>{params.product}/</Link>
        <Link href={`/oferta/${params.product}/${params.subProduct}`}>
          {params.subProduct}/
        </Link>
        <span>{params.info}</span>
      </div>
      <div>
        <Image
          src={infoProduct.img}
          alt={infoProduct.title}
          width={600}
          height={600}
        />
        <h3>{infoProduct.title}</h3>
        <p>{infoProduct.price}</p>
        <div>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button type="button" onClick={handleBuy}>
          Купити
        </button>
        <p>Артикуль: {infoProduct.articl}</p>
        <p>Категорія: {infoProduct.category}</p>
      </div>
      <div>
        <p>Опис</p>
        <p>{infoProduct.desc}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

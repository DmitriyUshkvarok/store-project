'use client';

import { useGetAllInfoProductQuery } from '@/src/redux/ofertaApi/ofertaApi';
import Image from 'next/image';
import { useState } from 'react';
import ModalUpdateForm from '@/src/components/ModalAdmin/ModalUpdateForm';
import FormUpdateProductAdmin from '@/src/components/FormUpdateProductAdmin/FormUpdateProductAdmin';
import {
  ListOferta,
  ItemOferta,
  TagContainer,
  CaptionWrap,
} from './CatalogManagment.styled';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
}

const CatalogManagementAdmin = () => {
  const [show, setShow] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectProduct(product);
    setShow(true);
  };
  const { data } = useGetAllInfoProductQuery();

  return (
    <>
      <CaptionWrap>
        <p>Названия</p>
        <p>Вес</p>
        <p>Бренд</p>
        <p>Описание</p>
        <p>Упаковка</p>
        <p>Цена</p>
        <p>Картинка</p>
      </CaptionWrap>
      <ListOferta>
        {data?.products?.map((product) => (
          <ItemOferta key={product._id}>
            <TagContainer>
              <p>{product.name}</p>
            </TagContainer>

            <TagContainer>
              <p>{product.weight}</p>
            </TagContainer>

            <TagContainer>
              <p>{product.brand}</p>
            </TagContainer>

            <TagContainer>
              <p> {truncateText(product.description, 15)}</p>
            </TagContainer>

            <TagContainer>
              <p>{product.packingType}</p>
            </TagContainer>

            <TagContainer>
              <p>{product.price}</p>
            </TagContainer>

            <TagContainer>
              <Image
                src={`${product?.url}`}
                width={50}
                height={50}
                alt={product.name}
              />
            </TagContainer>
            <TagContainer>
              <button onClick={() => handleShow(product)} type="button">
                update
              </button>
              <button type="button">delete</button>
            </TagContainer>
          </ItemOferta>
        ))}
      </ListOferta>
      <ModalUpdateForm show={show} handleClose={handleClose}>
        <FormUpdateProductAdmin selectProduct={selectProduct} />
      </ModalUpdateForm>
    </>
  );
};

export default CatalogManagementAdmin;

'use client';

import { useGetAllInfoProductQuery } from '@/src/redux/ofertaApi/ofertaApi';
import { useState } from 'react';
import ModalAdminByForm from '../ModalAdminByForm/ModalAdminByForm';
import FormUpdateProductAdmin from '@/src/components/FormUpdateProductAdmin/FormUpdateProductAdmin';
import CaptionByCatalog from '../CaptionByCatalog/CaptionByCatalog';
import ListByCatalog from '../ListByCatalog/ListByCatalog';

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
      <CaptionByCatalog />
      <ListByCatalog handleShow={handleShow} data={data} />
      <ModalAdminByForm show={show} handleClose={handleClose}>
        <FormUpdateProductAdmin
          handleClose={handleClose}
          selectProduct={selectProduct}
        />
      </ModalAdminByForm>
    </>
  );
};

export default CatalogManagementAdmin;

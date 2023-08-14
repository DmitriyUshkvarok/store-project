'use client';

import { useGetAllInfoProductQuery } from '@/src/redux/ofertaApi/ofertaApi';
import { useState, useEffect } from 'react';
import ModalAdminByForm from '../ModalAdminByForm/ModalAdminByForm';
import FormUpdateProductAdmin from '@/src/components/FormUpdateProductAdmin/FormUpdateProductAdmin';
import CaptionByCatalog from '../CaptionByCatalog/CaptionByCatalog';
import ListByCatalog from '../ListByCatalog/ListByCatalog';

const CatalogManagementAdmin = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  const productsPerPage = 6;

  const { data } = useGetAllInfoProductQuery({
    page: currentPage,
    limit: productsPerPage,
  });

  useEffect(() => {
    if (data) {
      setProducts(data.products);
      setTotal(data.total);
    }
  }, [data]);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectProduct(product);
    setShow(true);
  };

  const totalPages = Math.ceil(total / productsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <CaptionByCatalog />
      <ListByCatalog handleShow={handleShow} data={products} />
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
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

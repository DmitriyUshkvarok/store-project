'use client';
import Pagination from 'react-bootstrap/Pagination';
import { useGetAllInfoProductQuery } from '@/src/redux/ofertaApi/ofertaApi';
import { useState, useEffect } from 'react';
import ModalAdminByForm from '../ModalAdminByForm/ModalAdminByForm';
import FormUpdateProductAdmin from '@/src/components/FormUpdateProductAdmin/FormUpdateProductAdmin';
import CaptionByCatalog from '../CaptionByCatalog/CaptionByCatalog';
import ListByCatalog from '../ListByCatalog/ListByCatalog';
import SearchFormAdmin from '../SearchFormAdmin/SearchFormAdmin';
import { renderPaginationItems } from '@/src/helper/renderPageButtons';

const CatalogManagementAdmin = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  const productsPerPage = 6;
  const maxVisiblePages = 10;
  const totalPages = Math.ceil(total / productsPerPage);

  const { data } = useGetAllInfoProductQuery({
    page: currentPage,
    limit: productsPerPage,
  });

  console.log(data);

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

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <SearchFormAdmin />
      <CaptionByCatalog />
      <ListByCatalog handleShow={handleShow} data={products} />
      <div>
        <Pagination>
          {renderPaginationItems(
            totalPages,
            maxVisiblePages,
            currentPage,
            handlePageClick
          )}
        </Pagination>
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

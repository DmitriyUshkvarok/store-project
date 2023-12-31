'use client';

import { useGetAllInfoProductQuery } from '@/src/redux/ofertaApi/ofertaApi';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { animateScroll as scroll } from 'react-scroll';
import ModalAdminByForm from '../ModalAdminByForm/ModalAdminByForm';
import FormUpdateProductAdmin from '@/src/components/FormUpdateProductAdmin/FormUpdateProductAdmin';
import ListByCatalog from '../ListByCatalog/ListByCatalog';
import SearchFormAdmin from '../SearchFormAdmin/SearchFormAdmin';
import { renderPaginationItems } from '@/src/helper/renderPageButtons';
import { StyledPagination } from './CatalogManagment.styled';

const CatalogManagementAdmin = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);
  const [filterName, setFilterName] = useState('');
  const [value] = useDebounce(filterName, 1000);

  const productsPerPage = 10;
  const maxVisiblePages = 10;
  const totalPages = Math.ceil(total / productsPerPage);

  const { data } = useGetAllInfoProductQuery({
    page: currentPage,
    limit: productsPerPage,
    name: value,
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

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    scroll.scrollToTop({
      duration: 250,
      smooth: 'easeInOutQuad',
    });
  };

  const filterSearch = (e) => {
    setCurrentPage(1);
    setFilterName(e.target.value);
  };

  return (
    <>
      <SearchFormAdmin filterSearch={filterSearch} />

      {products.length === 0 ? (
        <div>
          <p>Такого товару не знайдено</p>
        </div>
      ) : (
        <ListByCatalog handleShow={handleShow} data={products} />
      )}

      <div>
        <StyledPagination>
          {renderPaginationItems(
            totalPages,
            maxVisiblePages,
            currentPage,
            handlePageClick
          )}
        </StyledPagination>
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

'use client';
import { useGetAllCategoryQuery } from '@/src/redux/ofertaApi/ofertaApi';
import { BsPlusCircleDotted } from 'react-icons/bs';
import ModalAdminByForm from '../ModalAdminByForm/ModalAdminByForm';
import { useState } from 'react';
import FormAdd from '@/src/components/FormAdd/FormAdd';
import FormUpdate from '@/src/components/FormUpdate/FormUpdate';
import FormAddAny from '@/src/components/FormAddAny/FormAddAny';

import ListByCategory from '../ListByCategory/ListByCategory';

import { Box, Container, BoxCategory } from './CategoryManagmentAdmin.styled';

const CategoryManagmentAdmin = () => {
  const [show, setShow] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalAddAny, setShowModalAddAny] = useState(false);
  const [selectItem, setSelectItem] = useState(null);

  const handleShow = (action, activItem) => {
    if (action === 'add product') {
      setShowModalAdd(true);
    }
    if (action === 'add category') {
      setShowModalAddAny(true);
    }
    if (action === 'update') {
      setShowModalUpdate(true);
      setSelectItem(activItem);
    }

    setShow(true);
  };

  const handleClose = () => {
    setShowModalUpdate(false);
    setShowModalAdd(false);
    setShowModalAddAny(false);
    setShow(false);
  };

  const { data } = useGetAllCategoryQuery();

  return (
    <Container>
      <div>
        <p>Додати новий товар</p>
        <button type="button" onClick={() => handleShow('add product')}>
          <BsPlusCircleDotted size={14} />
        </button>
      </div>

      <Box>
        <BoxCategory>
          <ListByCategory
            data={data}
            handleShow={handleShow}
            title="Категорії"
          />
        </BoxCategory>
      </Box>
      <ModalAdminByForm show={show} handleClose={handleClose}>
        {showModalAdd && (
          <FormAdd categories={data} handleClose={handleClose} />
        )}
        {showModalUpdate && (
          <FormUpdate selectItem={selectItem} handleClose={handleClose} />
        )}
        {showModalAddAny && <FormAddAny handleClose={handleClose} />}
      </ModalAdminByForm>
    </Container>
  );
};

export default CategoryManagmentAdmin;

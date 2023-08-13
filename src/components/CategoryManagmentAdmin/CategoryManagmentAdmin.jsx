'use client';
import {
  useGetAllCountriesQuery,
  useGetAllCategoryQuery,
  useGetAllSubcategoryQuery,
  useGetAllColorQuery,
} from '@/src/redux/ofertaApi/ofertaApi';

import ModalAdminByForm from '../ModalAdminByForm/ModalAdminByForm';
import { useState } from 'react';
import FormAdd from '@/src/components/FormAdd/FormAdd';
import FormUpdate from '@/src/components/FormUpdate/FormUpdate';
import FormAddAny from '@/src/components/FormAddAny/FormAddAny';
import CaptionByCategory from '../CaptionByCategory/CaptionByCategory';
import ListByCategory from '../ListByCategory/ListByCategory';
import { COUNTRY, CATEGORY, SUBCATEGORY, COLOR } from '@/src/utils/constant';
import { Container, Title } from './CategoryManagmentAdmin.styled';

const CategoryManagmentAdmin = () => {
  const [show, setShow] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalAddAny, setShowModalAddAny] = useState(null);
  const [showModalUpdateAny, setShowModalUpdateAny] = useState(null);
  const [selectItem, setSelectItem] = useState(null);
  const [selectId, setSelectId] = useState(null);

  const handleShow = (action, title, name, id) => {
    if (action === 'update') {
      setShowModalUpdate(true);
      setShowModalUpdateAny(title);
      setSelectItem(name);
      setSelectId(id);
    }
    if (action === 'add') {
      setShowModalAdd(true);
    }
    if (action !== 'add' && action !== 'update') {
      setShowModalAddAny(action);
    }

    setShow(true);
  };

  const handleClose = () => {
    setShowModalUpdate(false);
    setShowModalAdd(false);
    setShowModalAddAny(null);
    setShow(false);
  };
  const { data: countries } = useGetAllCountriesQuery();
  const { data: categories } = useGetAllCategoryQuery();
  const { data: subcategories } = useGetAllSubcategoryQuery();
  const { data: colors } = useGetAllColorQuery();

  return (
    <Container>
      <CaptionByCategory handleShow={handleShow} />
      <ListByCategory
        data={countries}
        handleShow={handleShow}
        title={COUNTRY}
      />
      <ListByCategory
        data={categories}
        handleShow={handleShow}
        title={CATEGORY}
      />
      <ListByCategory
        data={subcategories}
        handleShow={handleShow}
        title={SUBCATEGORY}
      />

      <ListByCategory data={colors} handleShow={handleShow} title={COLOR} />
      <ModalAdminByForm show={show} handleClose={handleClose}>
        {showModalAdd && (
          <FormAdd
            countries={countries}
            categories={categories}
            subcategories={subcategories}
            colors={colors}
            handleClose={handleClose}
          />
        )}
        {showModalUpdate && (
          <FormUpdate
            activeUpdate={showModalUpdateAny}
            selectItem={selectItem}
            selectId={selectId}
            handleClose={handleClose}
          />
        )}
        {showModalAddAny && (
          <FormAddAny activeForm={showModalAddAny} handleClose={handleClose} />
        )}
      </ModalAdminByForm>
    </Container>
  );
};

export default CategoryManagmentAdmin;

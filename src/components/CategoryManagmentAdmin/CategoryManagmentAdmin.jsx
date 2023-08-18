'use client';
import { useGetAllCategoryQuery } from '@/src/redux/ofertaApi/ofertaApi';
import { BsPlusCircleDotted } from 'react-icons/bs';
import ModalAdminByForm from '../ModalAdminByForm/ModalAdminByForm';
import { useState } from 'react';
import FormAdd from '@/src/components/FormAdd/FormAdd';
import FormUpdate from '@/src/components/FormUpdate/FormUpdate';
import FormAddAny from '@/src/components/FormAddAny/FormAddAny';
import CaptionByCategory from '../CaptionByCategory/CaptionByCategory';
import ListByCategory from '../ListByCategory/ListByCategory';
// import { COUNTRY, CATEGORY, SUBCATEGORY, COLOR } from '@/src/utils/constant';
import { Box, Container, BoxCategory } from './CategoryManagmentAdmin.styled';

const CategoryManagmentAdmin = () => {
  const [show, setShow] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalAddAny, setShowModalAddAny] = useState(null);
  const [showModalUpdateAny, setShowModalUpdateAny] = useState(null);
  const [selectItem, setSelectItem] = useState(null);
  const [selectId, setSelectId] = useState(null);

  const handleShow = (action, title, name, id) => {
    // if (action === 'update') {
    //   setShowModalUpdate(true);
    //   setShowModalUpdateAny(title);
    //   setSelectItem(name);
    //   setSelectId(id);
    // }
    if (action === 'add product') {
      setShowModalAdd(true);
    }
    // if (action !== 'add' && action !== 'update') {
    //   setShowModalAddAny(action);
    // }

    setShow(true);
  };

  const handleClose = () => {
    setShowModalUpdate(false);
    setShowModalAdd(false);
    setShowModalAddAny(null);
    setShow(false);
  };
  // const { data: countries } = useGetAllCountriesQuery();
  const { data } = useGetAllCategoryQuery();
  // const { data: subcategories } = useGetAllSubcategoryQuery();
  // const { data: colors } = useGetAllColorQuery();
  console.log(data);
  return (
    <Container>
      <div>
        <p>Додати новий товар</p>
        <button type="button" onClick={() => handleShow('add product')}>
          <BsPlusCircleDotted size={14} />
        </button>
      </div>
      {/* <CaptionByCategory handleShow={handleShow} /> */}
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
        {/* {showModalUpdate && (
          <FormUpdate
            activeUpdate={showModalUpdateAny}
            selectItem={selectItem}
            selectId={selectId}
            handleClose={handleClose}
          />
        )}
        {showModalAddAny && (
          <FormAddAny activeForm={showModalAddAny} handleClose={handleClose} />
        )} */}
      </ModalAdminByForm>
    </Container>
  );
};

export default CategoryManagmentAdmin;

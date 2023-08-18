'use client';
import {
  useGetAllCategoryQuery,
  useDeleteCategoryMutation,
} from '@/src/redux/ofertaApi/ofertaApi';
import { toast } from 'react-toastify';
import Notiflix from 'notiflix';

import ModalAdminByForm from '../ModalAdminByForm/ModalAdminByForm';
import { useState } from 'react';
import FormAdd from '@/src/components/FormAdd/FormAdd';
import FormUpdate from '@/src/components/FormUpdate/FormUpdate';
import FormAddAny from '@/src/components/FormAddAny/FormAddAny';

import { AiOutlinePlus } from 'react-icons/ai';

import ListByCategory from '../ListByCategory/ListByCategory';

import {
  Box,
  Container,
  BoxCategory,
  Title,
  BoxAdd,
  BtnPlus,
} from './CategoryManagmentAdmin.styled';

const CategoryManagmentAdmin = () => {
  const [show, setShow] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalAddAny, setShowModalAddAny] = useState(false);
  const [selectItem, setSelectItem] = useState(null);

  const { data } = useGetAllCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

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

  const handleDelete = async (item) => {
    Notiflix.Confirm.init({
      backgroundColor: '#f8f8f8',
      borderRadius: '4px',
      titleColor: 'red',
      messageMaxLength: 210,
      okButtonBackground: 'red',
    });
    Notiflix.Confirm.show(
      'Confirmation',
      `Ви впевнені, що бажаєте видалити категорію "${item.name}"?
      Якщо видалити цю категорію, всі продукти цієї категорії також видаляються назавжди.`,
      'Видалити',
      'Відмінити',
      async () => {
        try {
          const res = await deleteCategory({ id: item._id });
          if (res.error) {
            throw new Error(res.error.data.message);
          }
          toast.success(`${item.name} видалено`);
        } catch (error) {
          return toast.error(`${error}`);
        }
      }
    );
  };

  return (
    <Container>
      <BoxAdd>
        <Title>Додати новий товар</Title>
        <BtnPlus type="button" onClick={() => handleShow('add product')}>
          <AiOutlinePlus style={{ width: '30px', height: '30px' }} />
        </BtnPlus>
      </BoxAdd>

      <Box>
        <BoxCategory>
          <ListByCategory
            data={data}
            handleShow={handleShow}
            title="Категорії"
            handleDelete={handleDelete}
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

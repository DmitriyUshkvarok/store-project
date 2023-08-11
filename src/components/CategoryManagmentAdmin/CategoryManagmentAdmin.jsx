'use client';
import { BsPlusCircleDotted } from 'react-icons/bs';
import {
  useGetAllCountriesQuery,
  useGetAllCategoryQuery,
  useGetAllSubcategoryQuery,
  useGetAllColorQuery,
} from '@/src/redux/ofertaApi/ofertaApi';
import Image from 'next/image';
import ModalUpdateForm from '@/src/components/ModalAdmin/ModalUpdateForm';
import { useState } from 'react';
import FormAdd from '@/src/components/FormAdd/FormAdd';
import FormUpdate from '@/src/components/FormUpdate/FormUpdate';
import FormAddAny from '@/src/components/FormAddAny/FormAddAny';
import {
  List,
  Item,
  WrapContent,
  Container,
  WrapAddBtn,
  WrapNavPanelAdmin,
  TitleDesc,
  Title,
} from './CategoryManagmentAdmin.styled';

const CategoryManagmentAdmin = () => {
  const [show, setShow] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalAddAny, setShowModalAddAny] = useState(null);

  const handleShow = (action) => {
    if (action === 'update') {
      setShowModalUpdate(true);
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
  console.log(countries);
  return (
    <Container>
      <WrapNavPanelAdmin>
        <WrapAddBtn>
          <TitleDesc>Додати товар</TitleDesc>
          <button type="button" onClick={() => handleShow('add')}>
            <BsPlusCircleDotted size={14} />
          </button>
        </WrapAddBtn>
        <WrapAddBtn>
          <TitleDesc>Додати країну</TitleDesc>
          <button type="button" onClick={() => handleShow('країну')}>
            <BsPlusCircleDotted size={14} />
          </button>
        </WrapAddBtn>
        <WrapAddBtn>
          <TitleDesc>Додати категорію</TitleDesc>
          <button type="button" onClick={() => handleShow('категорію')}>
            <BsPlusCircleDotted size={14} />
          </button>
        </WrapAddBtn>
        <WrapAddBtn>
          <TitleDesc>Додати підкатегорію</TitleDesc>
          <button type="button" onClick={() => handleShow('підкатегорію')}>
            <BsPlusCircleDotted size={14} />
          </button>
        </WrapAddBtn>
        <WrapAddBtn>
          <TitleDesc>Додати колір</TitleDesc>
          <button type="button" onClick={() => handleShow('колір')}>
            <BsPlusCircleDotted size={14} />
          </button>
        </WrapAddBtn>
      </WrapNavPanelAdmin>
      <Title>Країни</Title>
      <List>
        {countries?.map((country) => (
          <Item key={country._id}>
            <WrapContent>
              <TitleDesc>{country.name}</TitleDesc>
              <Image
                src={country.url}
                alt={country.name}
                width={30}
                height={30}
              />
            </WrapContent>

            <div>
              <button type="button">Delete</button>
              <button onClick={() => handleShow('update')} type="button">
                Update
              </button>
            </div>
          </Item>
        ))}
      </List>
      <Title>Категорії</Title>
      <List>
        {categories?.map((category) => (
          <Item key={category._id}>
            <WrapContent>
              <TitleDesc>{category.name}</TitleDesc>
              <Image
                src={category.url}
                alt={category.name}
                width={30}
                height={30}
              />
            </WrapContent>

            <div>
              <button type="button">Delete</button>
              <button onClick={() => handleShow('update')} type="button">
                Update
              </button>
            </div>
          </Item>
        ))}
      </List>
      <Title>Підкатегорії</Title>
      <List>
        {subcategories?.map((subcategory) => (
          <Item key={subcategory._id}>
            <WrapContent>
              <TitleDesc>{subcategory.name}</TitleDesc>
              <Image
                src={subcategory.url}
                alt={subcategory.name}
                width={30}
                height={30}
              />
            </WrapContent>

            <div>
              <button type="button">Delete</button>
              <button onClick={() => handleShow('update')} type="button">
                Update
              </button>
            </div>
          </Item>
        ))}
      </List>
      <Title>Колір</Title>
      <List>
        {colors?.map((color) => (
          <Item key={color._id}>
            <WrapContent>
              <TitleDesc>{color.name}</TitleDesc>
              <Image src={color.url} alt={color.name} width={30} height={30} />
            </WrapContent>

            <div>
              <button type="button">Delete</button>
              <button onClick={() => handleShow('update')} type="button">
                Update
              </button>
            </div>
          </Item>
        ))}
      </List>
      <ModalUpdateForm show={show} handleClose={handleClose}>
        {showModalAdd && <FormAdd />}
        {showModalUpdate && <FormUpdate />}
        {showModalAddAny && <FormAddAny activeForm={showModalAddAny} />}
      </ModalUpdateForm>
    </Container>
  );
};

export default CategoryManagmentAdmin;

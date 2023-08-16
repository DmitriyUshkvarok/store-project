'use client';
import Image from 'next/image';
import { toast } from 'react-toastify';
import {
  useDeleteCountryMutation,
  useDeleteCategoryMutation,
  useDeleteSubCategoryMutation,
  useDeleteColorMutation,
} from '@/src/redux/ofertaApi/ofertaApi';
import { COUNTRY, CATEGORY, SUBCATEGORY, COLOR } from '@/src/utils/constant';
import {
  Box,
  List,
  Item,
  WrapContent,
  TitleDesc,
  Title,
  Btn,
  DeleteForever,
  Create,
  BoxBtn,
} from './ListByCategory.styled';

const ListByCategory = ({ data, handleShow, title }) => {
  const [deleteCountry] = useDeleteCountryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [deleteSubCategory] = useDeleteSubCategoryMutation();
  const [deleteColor] = useDeleteColorMutation();

  const handleDelete = async (id) => {
    if (COUNTRY === title) {
      try {
        const res = await deleteCountry(id);
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${COUNTRY} видалено`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    if (CATEGORY === title) {
      try {
        const res = await deleteCategory(id);
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${CATEGORY} видалено`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    if (SUBCATEGORY === title) {
      try {
        const res = await deleteSubCategory(id);
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${SUBCATEGORY} видалено`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
    if (COLOR === title) {
      try {
        const res = await deleteColor(id);
        if (res.error) {
          throw new Error(res.error.data.message);
        }
        toast.success(`${SUBCATEGORY} видалено`);
      } catch (error) {
        return toast.error(`${error}`);
      }
    }
  };
  return (
    <Box>
      <Title>{title}</Title>
      <List>
        {data?.map((item) => (
          <Item key={item._id}>
            <WrapContent>
              <Image src={item.url} alt={item.name} width={30} height={30} />
              <TitleDesc>{item.name}</TitleDesc>
            </WrapContent>

            <BoxBtn>
              <Btn onClick={() => handleDelete(item._id, title)} type="button">
                <DeleteForever />
              </Btn>
              <Btn
                onClick={() => handleShow('update', title, item.name, item._id)}
                type="button"
              >
                <Create />
              </Btn>
            </BoxBtn>
          </Item>
        ))}
      </List>
    </Box>
  );
};

export default ListByCategory;

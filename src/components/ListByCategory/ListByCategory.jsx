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
  List,
  Item,
  WrapContent,
  TitleDesc,
  Title,
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
    <>
      <Title>{title}</Title>
      <List>
        {data?.map((item) => (
          <Item key={item._id}>
            <WrapContent>
              <TitleDesc>{item.name}</TitleDesc>
              <Image src={item.url} alt={item.name} width={30} height={30} />
            </WrapContent>

            <div>
              <button
                onClick={() => handleDelete(item._id, title)}
                type="button"
              >
                Delete
              </button>
              <button
                onClick={() => handleShow('update', title, item.name, item._id)}
                type="button"
              >
                Update
              </button>
            </div>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ListByCategory;

'use client';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { useDeleteCategoryMutation } from '@/src/redux/ofertaApi/ofertaApi';
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
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = async (item) => {
    try {
      const res = await deleteCategory({ id: item._id });
      if (res.error) {
        throw new Error(res.error.data.message);
      }
      toast.success(`${item.name} видалено`);
    } catch (error) {
      return toast.error(`${error}`);
    }
  };
  return (
    <Box>
      <div>
        <Title>{title}</Title>
        <div>
          <p>Додати </p>
          <button type="button" onClick={() => handleShow('add category')}>
            <BsPlusCircleDotted size={14} />
          </button>
        </div>
      </div>

      <List>
        {data?.map((item) => (
          <Item key={item._id}>
            <WrapContent>
              <Image src={item.url} alt={item.name} width={30} height={30} />
              <TitleDesc>{item.name}</TitleDesc>
            </WrapContent>

            <BoxBtn>
              <Btn onClick={() => handleDelete(item)} type="button">
                <DeleteForever />
              </Btn>
              <Btn onClick={() => handleShow('update', item)} type="button">
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

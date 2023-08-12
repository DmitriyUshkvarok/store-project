'use client';
import Image from 'next/image';

import {
  List,
  Item,
  WrapContent,
  TitleDesc,
  Title,
} from './ListByCategory.styled';

const ListByCategory = ({ data, handleShow, title }) => {
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
              <button type="button">Delete</button>
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

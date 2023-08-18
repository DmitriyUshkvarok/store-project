'use client';

import {
  Box,
  BtnPlus,
  Btn,
  DeleteForever,
  Create,
  ResponsiveTableContainer,
  StyledTable,
  StyledImage,
} from './ListByCategory.styled';
import { AiOutlinePlus } from 'react-icons/ai';
const ListByCategory = ({ data, handleShow, title, handleDelete }) => {
  return (
    <Box>
      {/* <BoxAdd>
        <Title> Додати {title}</Title>
      </BoxAdd> */}

      <ResponsiveTableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Зображення</th>
              <th>
                Категорії{' '}
                <BtnPlus
                  type="button"
                  onClick={() => handleShow('add category')}
                >
                  <AiOutlinePlus style={{ width: '25px', height: '25px' }} />
                </BtnPlus>
              </th>
              <th>Редагувати</th>
              <th>Видалити</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item._id}>
                <td>
                  <StyledImage
                    src={item.url}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </td>
                <td>{item.name}</td>

                <td>
                  <Btn onClick={() => handleShow('update', item)} type="button">
                    <Create />
                  </Btn>
                </td>
                <td>
                  <Btn onClick={() => handleDelete(item)} type="button">
                    <DeleteForever />
                  </Btn>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </ResponsiveTableContainer>
    </Box>
  );
};

export default ListByCategory;

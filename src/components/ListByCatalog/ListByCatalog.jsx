'use client';
import {
  useDeleteProductMutation,
  useUpdateProductStatusMutation,
} from '@/src/redux/ofertaApi/ofertaApi';
import { toast } from 'react-toastify';
import {
  StyledTable,
  StyledImage,
  DeleteForever,
  Create,
  Btn,
  ResponsiveTableContainer,
} from './ListByCatalog.styled';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
}

const ListByCatalog = ({ data, handleShow }) => {
  const [deleteProduct] = useDeleteProductMutation();
  const [updateStatus] = useUpdateProductStatusMutation();

  const handleDelete = async (productId, product) => {
    try {
      const res = await deleteProduct(productId);
      if (res.error) {
        throw new Error(res.error.data.message);
      }
      toast.success(`${product} видалено`);
    } catch (error) {
      return toast.error(`${error}`);
    }
  };
  const handleChangeInStock = async (item, isCheked) => {
    const newInStock = { inStock: !isCheked };
    await updateStatus({ productId: item._id, newInStock });
  };

  console.log(data);
  return (
    <ResponsiveTableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Категорія</th>
            <th>Назва</th>
            <th>Зображення</th>
            <th>Вага</th>
            <th>Бренд</th>
            <th>Опис</th>
            <th>Тип пакування</th>
            <th>Ціна</th>

            <th>PDF</th>
            <th>Наявність</th>
            <th>Редагувати</th>
            <th>Видалити</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product) => (
            <tr key={product._id}>
              <td>{product.category.name}</td>
              <td>{product.name}</td>
              <td>
                <StyledImage
                  src={`${product?.url}`}
                  width={50}
                  height={50}
                  alt={product.name}
                />
              </td>
              <td>{product.weight}</td>
              <td>{product.brand}</td>
              <td>{truncateText(product.description, 15)}</td>
              <td>{product.packingType}</td>
              <td>{product.price}</td>

              <td>
                <a
                  href={product?.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF
                </a>
              </td>
              <td>
                <label>
                  <input
                    value={product.inStock}
                    onChange={() =>
                      handleChangeInStock(product, product.inStock)
                    }
                    type="checkbox"
                    checked={product.inStock}
                  />
                </label>
              </td>
              <td>
                <Btn onClick={() => handleShow(product)} type="button">
                  <Create />
                </Btn>
              </td>
              <td>
                <Btn
                  onClick={() => handleDelete(product._id, product.name)}
                  type="button"
                >
                  <DeleteForever />
                </Btn>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </ResponsiveTableContainer>
  );
};

export default ListByCatalog;

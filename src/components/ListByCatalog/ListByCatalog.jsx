'use client';
import Image from 'next/image';
import { useDeleteProductMutation } from '@/src/redux/ofertaApi/ofertaApi';
import { toast } from 'react-toastify';
import { ListOferta, ItemOferta, TagContainer } from './ListByCatalog.styled';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
}

const ListByCatalog = ({ data, handleShow }) => {
  const [deleteProduct] = useDeleteProductMutation();

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
  return (
    <ListOferta>
      {data?.map((product) => (
        <ItemOferta key={product._id}>
          <TagContainer>
            <p>{product.name}</p>
          </TagContainer>

          <TagContainer>
            <p>{product.weight}</p>
          </TagContainer>

          <TagContainer>
            <p>{product.brand}</p>
          </TagContainer>

          <TagContainer>
            <p> {truncateText(product.description, 15)}</p>
          </TagContainer>

          <TagContainer>
            <p>{product.packingType}</p>
          </TagContainer>

          <TagContainer>
            <p>{product.price}</p>
          </TagContainer>

          <TagContainer>
            <Image
              src={`${product?.url}`}
              width={50}
              height={50}
              alt={product.name}
            />
          </TagContainer>
          <TagContainer>
            <button onClick={() => handleShow(product)} type="button">
              update
            </button>
            <button
              onClick={() => handleDelete(product._id, product.name)}
              type="button"
            >
              delete
            </button>
          </TagContainer>
        </ItemOferta>
      ))}
    </ListOferta>
  );
};

export default ListByCatalog;

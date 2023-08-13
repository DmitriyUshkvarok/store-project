'use client';
import React, { useState, useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ButtonWhiteAndBlack from '../ButtonWhiteAndBlack/ButtonWhiteAndBlack';
import Spinner from '../SpinerOferta/SpinerOferta';
import {
  useDeleteGalleryItemMutation,
  useGetGalleryQuery,
} from '@/src/redux/galleryApi/galleryApi';
import {
  Box,
  Gallery,
  GalleryBox,
  PageNumber,
  PaginationBox,
  Picture,
  Title,
} from './ProductManagementForGallery.styled';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';

const ProductManagementForGallery = () => {
  const { data, isError, isLoading } = useGetGalleryQuery();
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState([]);

  const [deleteGalleryItem] = useDeleteGalleryItemMutation();

  const handleDeleteImage = async (_id) => {
    try {
      const result = await deleteGalleryItem(_id);
      console.log('Response:', result);
    } catch (error) {
      console.error('Помилка при видаленні зображення:', error);
    }
  };

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.length / itemsPerPage));
      setCurrentPhotos(
        data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      );
    }
  }, [data, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        disableRightClick: true,
        showCounter: false,
        scrollZoom: false,
      });

      lightbox.on('shown.simplelightbox', () => {
        document.body.classList.add('body-lock');
      });

      lightbox.on('close.simplelightbox', () => {
        document.body.classList.remove('body-lock');
      });

      return () => {
        lightbox.destroy();
      };
    }
  }, [currentPhotos]);

  return (
    <GalleryBox>
      <Box>
        <AiOutlinePlus style={{ width: '50px', height: '50px' }} />
        <Gallery className="gallery">
          {isLoading ? (
            <Spinner />
          ) : (
            currentPhotos.map(({ url, _id }) => (
              <li key={_id}>
                <a href={url}>
                  <Picture src={url} alt={`Image`} width="330" height="206" />
                </a>
                <RiDeleteBin2Fill onClick={() => handleDeleteImage(_id)} />
              </li>
            ))
          )}
        </Gallery>
      </Box>

      <PaginationBox className="pagination">
        <ButtonWhiteAndBlack
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Попередні фото
        </ButtonWhiteAndBlack>
        <PageNumber>{`${currentPage} / ${totalPages}`}</PageNumber>
        <ButtonWhiteAndBlack
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Наступні фото
        </ButtonWhiteAndBlack>
      </PaginationBox>
    </GalleryBox>
  );
};

export default ProductManagementForGallery;

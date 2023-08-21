'use client';
import React, { useState, useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Spinner from '../SpinerOferta/SpinerOferta';
import {
  useGetGalleryQuery,
  useAddGalleryItemMutation,
  useDeleteGalleryItemMutation,
} from '@/src/redux/galleryApi/galleryApi';
import {
  Box,
  Btn,
  Gallery,
  GalleryBox,
  Input,
  PageNumber,
  PaginationBox,
  Picture,
  StyledForm,
} from './ProductManagementForGallery.styled';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { Formik } from 'formik';

const ProductManagementForGallery = () => {
  const { data, isLoading } = useGetGalleryQuery();
  const [deleteGalleryItem] = useDeleteGalleryItemMutation();
  const [addGalleryItem] = useAddGalleryItemMutation();

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);

  const [fileName, setFileName] = useState('Виберіть файл');
  const fileInputRef = React.useRef(null);

  const handleDeleteImage = async (_id) => {
    try {
      const result = await deleteGalleryItem(_id);
      console.log('Response:', result);
    } catch (error) {
      console.error('Помилка при видаленні зображення:', error);
    }
  };

  const handleSubmit = async ({ resetForm }) => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('picture', selectedFile);
      await addGalleryItem(formData);
      resetForm();
      setSelectedFile(null);
      setFileName('Виберіть файл');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  useEffect(() => {
    if (data) {
      const reversedData = [...data].reverse();
      setTotalPages(Math.ceil(reversedData.length / itemsPerPage));
      setCurrentPhotos(
        reversedData.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
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
        <Formik
          initialValues={{
            picture: '',
          }}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <label htmlFor="fileInput">{fileName}</label>
            <Input
              id="fileInput"
              type="file"
              accept="image/*"
              name="picture"
              ref={fileInputRef}
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
                setFileName(e.target.files[0]?.name || 'Виберіть файл');
              }}
            />

            <button style={{ border: 'none' }}>
              <AiOutlinePlus style={{ width: '35px', height: '35px' }} />
            </button>
          </StyledForm>
        </Formik>

        <Gallery className="gallery">
          {isLoading ? (
            <Spinner />
          ) : (
            currentPhotos.map(({ url, _id }) => (
              <li key={_id} style={{ textAlign: 'end' }}>
                <a href={url}>
                  <Picture src={url} alt={`Image`} width="330" height="206" />
                </a>
                <RiDeleteBin2Fill
                  style={{ cursor: 'pointer', fontSize: '20px' }}
                  onClick={() => handleDeleteImage(_id)}
                />
              </li>
            ))
          )}
        </Gallery>
      </Box>

      <PaginationBox className="pagination">
        <Btn onClick={handlePrevPage} disabled={currentPage === 1}>
          Попередні фото
        </Btn>
        <PageNumber>{`${currentPage} / ${totalPages}`}</PageNumber>
        <Btn onClick={handleNextPage} disabled={currentPage === totalPages}>
          Наступні фото
        </Btn>
      </PaginationBox>
    </GalleryBox>
  );
};

export default ProductManagementForGallery;

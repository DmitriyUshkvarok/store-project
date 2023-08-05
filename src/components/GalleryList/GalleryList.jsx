'use client';
import React, { useState, useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Image from 'next/image';
import ButtonWhiteAndBlack from '../ButtonWhiteAndBlack/ButtonWhiteAndBlack';
import {
  Box,
  Gallery,
  GalleryBox,
  PageNumber,
  PaginationBox,
  Picture,
  Title,
} from './GalleryList.styled';

const GalleryList = () => {
  const photos = [
    '/photoForGalerryHARD/211.jpg',
    '/photoForGalerryHARD/398.jpg',
    '/photoForGalerryHARD/78.jpg',
    '/photoForGalerryHARD/431.jpg',
    '/photoForGalerryHARD/4151132.jpg',
  ];
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(photos.length / itemsPerPage);

  useEffect(() => {
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
  }, []);

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

  const currentPhotos = photos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <GalleryBox>
      <Box>
        <Title>Галерея</Title>
        <Gallery className="gallery">
          {currentPhotos.map((photo, index) => (
            <li key={index}>
              <a href={photo}>
                <Picture
                  src={photo}
                  alt={`Image ${index + 1}`}
                  width="330"
                  height="206"
                />
              </a>
            </li>
          ))}
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

export default GalleryList;

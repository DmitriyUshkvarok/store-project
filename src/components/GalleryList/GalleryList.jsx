'use client';
import React, { useState, useEffect, useRef } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ButtonWhiteAndBlack from '../ButtonWhiteAndBlack/ButtonWhiteAndBlack';
import Spinner from '../SpinerOferta/SpinerOferta';
import { animateScroll as scroll } from 'react-scroll';
import { useGetGalleryQuery } from '@/src/redux/galleryApi/galleryApi';
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
  const { data, isError, isLoading } = useGetGalleryQuery();
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState([]);

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
      scroll.scrollToTop({
        duration: 0,
        smooth: 'easeInOutQuad',
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scroll.scrollToTop({
        duration: 0,
        smooth: 'easeInOutQuad',
      });
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
        <Title>Галерея</Title>
        <Gallery className="gallery">
          {isLoading ? (
            <Spinner />
          ) : (
            currentPhotos.map(({ url, _id }) => (
              <li key={_id}>
                <a href={url}>
                  <Picture src={url} alt={`Image`} width="330" height="206" />
                </a>
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

export default GalleryList;

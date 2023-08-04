'use client';
import React, { useState, useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Image from 'next/image';

const GalleryList = () => {
  const photos = [
    '/photoForGalerryHARD/211.jpg',
    '/photoForGalerryHARD/398.jpg',
    '/photoForGalerryHARD/78.jpg',
    '/photoForGalerryHARD/431.jpg',
    '/photoForGalerryHARD/4151132.jpg',
  ];
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(photos.length / itemsPerPage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        disableRightClick: true,
        showCounter: false,
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
    <div>
      <div className="gallery">
        {currentPhotos.map((photo, index) => (
          <a href={photo} key={index}>
            <Image
              src={photo}
              alt={`Image ${index + 1}`}
              width="330"
              height="206"
            />
          </a>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Попередні фото
        </button>
        <span>{`${currentPage} / ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Наступні фото
        </button>
      </div>
    </div>
  );
};

export default GalleryList;

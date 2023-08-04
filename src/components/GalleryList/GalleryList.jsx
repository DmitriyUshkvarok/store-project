'use client';
import React, { useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const GalleryList = () => {
  const photos = [
    'photoForGalerryHARD/211.jpg',
    'photoForGalerryHARD/398.jpg',
    'photoForGalerryHARD/78.jpg',
    'photoForGalerryHARD/431.jpg',
    'photoForGalerryHARD/4151132.jpg',
  ];

  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      disableRightClick: true,
    });

    return () => lightbox.destroy();
  }, []);

  return (
    <div className="gallery">
      {photos.map((photo, index) => (
        <a href={photo} key={index}>
          <img
            src={photo}
            alt={`Image ${index + 1}`}
            width="330"
            height="206"
          />
        </a>
      ))}
    </div>
  );
};

export default GalleryList;

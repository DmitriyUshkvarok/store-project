// 'use client';
// import { catalog } from './dataCatalogList';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

export const photos = [
  'photoForGalerryHARD/211.jpg',
  'photoForGalerryHARD/398.jpg',
  'photoForGalerryHARD/78.jpg',
  'photoForGalerryHARD/211.jpg',
  'photoForGalerryHARD/398.jpg',
  'photoForGalerryHARD/78.jpg',
  'photoForGalerryHARD/211.jpg',
  'photoForGalerryHARD/398.jpg',
  'photoForGalerryHARD/78.jpg',
  'photoForGalerryHARD/78.jpg',
  'photoForGalerryHARD/211.jpg',
  'photoForGalerryHARD/398.jpg',
  'photoForGalerryHARD/78.jpg',
  'photoForGalerryHARD/78.jpg',
  'photoForGalerryHARD/211.jpg',
  'photoForGalerryHARD/398.jpg',
  'photoForGalerryHARD/78.jpg',
];

console.log(photos);

const GalleryList = () => {
  console.log(photos);
  return (
    <div>
      {photos.map((photo, index) => (
        <img src={photo} alt="2222" key={index} width="330" height="206" />
      ))}

      <p>111</p>
    </div>
  );
};

export default GalleryList;

import dynamic from 'next/dynamic';

const GalleryList = dynamic(() =>
  import('../../components/GalleryList/GalleryList')
);

const Gallery = () => {
  return (
    <div>
      <GalleryList />
    </div>
  );
};

export default Gallery;

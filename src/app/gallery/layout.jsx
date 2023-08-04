import Footer from '@/src/components/Footer/Footer';
import PartnersSlider from '@/src/components/PartnersSlider/PartnersSlider';
import ContactBlock from '@/src/components/ContactBlock/ContactBlock';
import PromoBlockAllPages from '@/src/components/PromoBlockAllPages/PromoBlockAllPages';

export const metadata = {
  title: 'Shop | Gallery',
  description: 'Generated by create next app',
};

const GalleryLayout = ({ children }) => {
  return (
    <>
      <PromoBlockAllPages />
      <div>{children}</div>
      <ContactBlock />
      <PartnersSlider />
      <Footer />
    </>
  );
};

export default GalleryLayout;
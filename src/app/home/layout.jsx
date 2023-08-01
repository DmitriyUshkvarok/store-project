import Footer from '@/src/components/Footer/Footer';
import PartnersSlider from '@/src/components/PartnersSlider/PartnersSlider';
import ContactBlock from '@/src/components/ContactBlock/ContactBlock';

const HomeLayout = ({ children }) => {
  return (
    <div>
      {children}
      <ContactBlock />
      <PartnersSlider />
      <Footer />
    </div>
  );
};

export default HomeLayout;

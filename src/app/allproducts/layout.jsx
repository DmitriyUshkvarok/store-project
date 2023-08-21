import Footer from '@/src/components/Footer/Footer';
import PartnersSlider from '@/src/components/PartnersSlider/PartnersSlider';
import ContactBlock from '@/src/components/ContactBlock/ContactBlock';
import PromoBlockAllPages from '@/src/components/PromoBlockAllPages/PromoBlockAllPages';

export const metadata = {
  title: 'Shop | All products',
  description:
    'Інтернет-магазин промислових фарбових пігментів у порошках, рідкій та гранульованій формі. Великий асортимент промислових фарбових матеріалів для виробництва та інших промислових потреб.',
};

const AllProductsLayout = ({ children }) => {
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

export default AllProductsLayout;

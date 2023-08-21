import Footer from '@/src/components/Footer/Footer';
import PartnersSlider from '@/src/components/PartnersSlider/PartnersSlider';
import PromoBlockAllPages from '@/src/components/PromoBlockAllPages/PromoBlockAllPages';
export const metadata = {
  title: 'Shop | Basket',
  description:
    'Інтернет-магазин промислових фарбових пігментів у порошках, рідкій та гранульованій формі. Великий асортимент промислових фарбових матеріалів для виробництва та інших промислових потреб.',
};

const BasketLayout = ({ children }) => {
  return (
    <>
      <PromoBlockAllPages />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default BasketLayout;

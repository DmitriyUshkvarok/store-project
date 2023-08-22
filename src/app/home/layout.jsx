import Footer from '@/src/components/Footer/Footer';
import PartnersSlider from '@/src/components/PartnersSlider/PartnersSlider';
import ContactBlock from '@/src/components/ContactBlock/ContactBlock';

export const metadata = {
  title: 'Shop | Home',
  description:
    'Інтернет-магазин промислових фарбових пігментів у порошках, рідкій та гранульованій формі. Великий асортимент промислових фарбових матеріалів для виробництва та інших промислових потреб.',
  keywords: [
    'промислові фарбові пігменти',
    'порошкові фарби',
    'JavaScript',
    'рідкі фарби',
    'гранульовані фарби',
    'промислові матеріали',
  ],
  authors: [
    { name: 'Dmitriy Ushkvarok' },
    { name: 'Oleh Paslavskiy' },
    { name: 'Anastasiia Hudymenko' },
    { name: 'Vitalii Nozhenko' },
    { name: 'Anastasiia Kor' },
  ],
  openGraph: {
    images: '/for-shop.png',
    type: 'website',
    siteName: 'Хімбрук',
    description:
      'Інтернет-магазин промислових фарбових пігментів різних видів для виробництва та промислових потреб. Великий асортимент промислових фарбових матеріалів.',
  },
};

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

import { HomePromoSlider } from '@/src/components/HomePromoSlider/HomePromoSlider';
import dynamic from 'next/dynamic';

const HomeAboutSection = dynamic(() =>
  import('../../components/HomeAboutSection/HomeAboutSection')
);

const HomePage = () => {
  return (
    <>
      <HomePromoSlider />
      <HomeAboutSection />
    </>
  );
};

export default HomePage;

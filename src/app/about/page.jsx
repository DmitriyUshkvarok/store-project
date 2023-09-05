import dynamic from 'next/dynamic';

const AboutInfo = dynamic(() => import('../../components/AboutInfo/AboutInfo'));

const About = () => {
  return (
    <>
      <AboutInfo />
    </>
  );
};

export default About;

import dynamic from 'next/dynamic';

const ContactInfo = dynamic(() =>
  import('../../components/ContactInfo/ContactInfo')
);

const Contact = () => {
  return (
    <div>
      <ContactInfo />
    </div>
  );
};

export default Contact;

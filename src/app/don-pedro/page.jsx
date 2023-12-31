import dynamic from 'next/dynamic';

const LoginOrAdmin = dynamic(() =>
  import('../../components/LoginOrAdmin/LoginOrAdmin')
);

const Admin = () => {
  return (
    <>
      <LoginOrAdmin />
    </>
  );
};

export default Admin;

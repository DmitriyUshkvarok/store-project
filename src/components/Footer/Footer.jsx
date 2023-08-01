import Container from '../Container/Container';
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        paddingTop: '15px',
        paddingBottom: '15px',
      }}
    >
      <Container>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 'bold',
          }}
        >
          Footer
        </h2>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            color: '#ffffff',
            fontWeight: 'bold',
          }}
        >
          <li>qwe</li>
          <li>qwe</li>
          <li>qwe</li>
        </ul>
      </Container>
    </div>
  );
};

export default Footer;

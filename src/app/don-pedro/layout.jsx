import AdminSidebar from '@/src/components/AdminSidebar/AdminSidebar';
import styles from './admin-layout.module.css';
import Container from '@/src/components/Container/Container';

const AdminLayout = ({ children }) => {
  return (
    <>
      <section className={styles.layoutSection}>
        <Container>
          <div className={styles.layoutWrapper}>
            <div>
              <AdminSidebar />
            </div>
            <div className={styles.box}>{children}</div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AdminLayout;

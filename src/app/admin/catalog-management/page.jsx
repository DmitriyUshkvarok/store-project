import CatalogManagementAdmin from '@/src/components/CatalogManagment/CatalogManagment';
import PrivatRoute from '@/src/components/PrivateRoute/PrivatRoute';

const CatalogManagement = () => {
  return (
    <PrivatRoute>
      <CatalogManagementAdmin />
    </PrivatRoute>
  );
};

export default CatalogManagement;

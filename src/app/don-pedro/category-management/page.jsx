import CategoryManagmentAdmin from '@/src/components/CategoryManagmentAdmin/CategoryManagmentAdmin';
import PrivatRoute from '@/src/components/PrivateRoute/PrivatRoute';

const CategoryManagement = () => {
  return (
    <PrivatRoute>
      <CategoryManagmentAdmin />
    </PrivatRoute>
  );
};

export default CategoryManagement;

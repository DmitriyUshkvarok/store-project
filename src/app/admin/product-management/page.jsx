import ProductManagementForGallery from '@/src/components/ProductManagementForGallery/ProductManagementForGallery';
import PrivatRoute from '@/src/components/PrivateRoute/PrivatRoute';

const ProductManagement = () => {
  return (
    <>
      <PrivatRoute>
        <ProductManagementForGallery />
      </PrivatRoute>
    </>
  );
};

export default ProductManagement;

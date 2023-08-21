import AdminOrdersList from '@/src/components/AdminOrdersList/AdminOrdersList';
import PrivatRoute from '@/src/components/PrivateRoute/PrivatRoute';

const Orders = () => {
  return (
    <PrivatRoute>
      <>
        <AdminOrdersList />
      </>
    </PrivatRoute>
  );
};

export default Orders;

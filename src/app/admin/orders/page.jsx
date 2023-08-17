import AdminOrdersList from '@/src/components/AdminOrdersList/AdminOrdersList';
import PrivatRoute from '@/src/components/PrivateRoute/PrivatRoute';

const Orders = () => {
  return (
    <PrivatRoute>
      <div>
        <AdminOrdersList />
      </div>
    </PrivatRoute>
  );
};

export default Orders;

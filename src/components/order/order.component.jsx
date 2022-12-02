import { Outlet } from 'react-router-dom';

const Order = () => {
  return (
    <main>
      <Outlet />
      <div>order.component</div>
    </main>
  );
};

export default Order;

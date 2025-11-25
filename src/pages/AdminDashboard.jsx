import { useState } from 'react';
import AdminLayout from '../components/admin/layout/AdminLayout';
import DashboardPage from '../components/admin/dashboard/DashboardPage';
import MenuPage from '../components/admin/menu/MenuPage';
import OrdersPage from '../components/admin/orders/OrdersPage';
const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'menu':
        return <MenuPage />;
      case 'orders':
        return <OrdersPage />;
      case 'inventory':
        return <div>Inventory Page - Coming Soon</div>;
      case 'users':
        return <div>Users Page - Coming Soon</div>;
      case 'reservations':
        return <div>Reservations Page - Coming Soon</div>;
      case 'reports':
        return <div>Reports Page - Coming Soon</div>;
      case 'settings':
        return <div>Settings Page - Coming Soon</div>;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <AdminLayout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </AdminLayout>
  );
};

export default AdminDashboard;
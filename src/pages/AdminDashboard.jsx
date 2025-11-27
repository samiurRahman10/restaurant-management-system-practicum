import { useState } from 'react';
import AdminLayout from '../components/admin/layout/AdminLayout';
import DashboardPage from '../components/admin/dashboard/DashboardPage';
import MenuPage from '../components/admin/menu/MenuPage';
import OrdersPage from '../components/admin/orders/OrdersPage';
import InventoryPage from '../components/admin/inventory/InventoryPage';
import ReportsPage from '../components/admin/reports/ReportsPage';
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
         return <InventoryPage/>;
      case 'users':
        return <div>Users Page - Coming Soon</div>;
      case 'reservations':
        return <div>Reservations Page - Coming Soon</div>;
      case 'reports':
        return <ReportsPage />;
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
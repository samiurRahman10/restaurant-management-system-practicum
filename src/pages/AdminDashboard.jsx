import { useState } from 'react';
import AdminLayout from '../components/admin/layout/AdminLayout';
import DashboardPage from '../components/admin/dashboard/DashboardPage';

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'menu':
        return <div>Menu Page - Coming Soon</div>;
      case 'orders':
        return <div>Orders Page - Coming Soon</div>;
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
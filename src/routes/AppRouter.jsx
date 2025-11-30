import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import AdminDashboard from '../pages/AdminDashboard';
import NotFoundPage from '../pages/NotFoundPage';

// Admin Layout
import AdminLayout from '../components/admin/layout/AdminLayout';

// Admin Components
import DashboardPage from '../components/admin/dashboard/DashboardPage';
import MenuPage from '../components/admin/menu/MenuPage';
import OrdersPage from '../components/admin/orders/OrdersPage';
import InventoryPage from '../components/admin/inventory/InventoryPage';
import ReportsPage from '../components/admin/reports/ReportsPage';
import SettingsPage from '../components/admin/settings/SettingsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Admin Routes with AdminLayout Wrapper */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/menu" element={<MenuPage />} />
          <Route path="/admin/orders" element={<OrdersPage />} />
          <Route path="/admin/inventory" element={<InventoryPage />} />
          <Route path="/admin/reports" element={<ReportsPage />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
        </Route>

        {/* Catch-all Route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

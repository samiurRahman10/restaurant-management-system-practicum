import { useState } from 'react';
import StatsCards from './StatsCards';
import RevenueChart from './RevenueChart';
import RecentActivities from './RecentActivities';
import RecentOrders from './RecentOrders';
import AnalyticsSection from './AnalyticsSection';
import AlertsFooter from './AlertsFooter';
import QuickAction from './QuickAction';
import PopularItems from './PopularItems';
import LowStockAlert from './LowStockAlert';

const DashboardPage = () => {
  const [activeAnalytics, setActiveAnalytics] = useState('sales');

  return (
    <div className="md:p-2">
      {/* Dashboard Overview */}
      <section className="mb-6 md:mb-8">
        <h1 className=" font-bold mb-2 text-black text-3xl">Restaurant Overview</h1>
        <p className="text-gray-600 mb-4">Welcome back! Here's what's happening in your restaurant today.</p>
        {/* Quick Action Section */}
        <QuickAction />

        {/* Stats Cards */}
        <StatsCards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {/* Revenue Chart */}
          <RevenueChart />
          {/* Popular Items */}
          <PopularItems />
        </div>

      </section>

      {/* Recent Activities & Low Stock Alerts */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <RecentActivities />

        {/* Low Stock Alerts */}
        <LowStockAlert />
      </section>

      {/* Recent Orders */}
      <RecentOrders />

      {/* Analytics Section */}
      <AnalyticsSection
        activeAnalytics={activeAnalytics}
        setActiveAnalytics={setActiveAnalytics}
      />

      {/* Alerts Footer */}
      <AlertsFooter />
    </div>
  );
};

export default DashboardPage;
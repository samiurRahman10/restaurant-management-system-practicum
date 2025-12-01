import { useState, useEffect } from 'react';

const AnalyticsSection = ({ activeAnalytics, setActiveAnalytics }) => {
  // MOCK DATA (REMOVE WHEN BACKEND IS AVAILABLE):
  // - Placeholder analytics content for UI preview.
  // - Replace by calling `apiService.dashboard.getAnalytics(type)` and
  //   set the returned chart data into state.
  const [analyticsData, setAnalyticsData] = useState({
    sales: { title: "Revenue Trend (Last 7 Days)", icon: "fas fa-chart-line", iconColor: "text-orange-500", description: "Interactive revenue chart would appear here" },
    orders: { title: "Order Trend (Last 7 Days)", icon: "fas fa-shopping-basket", iconColor: "text-teal-500", description: "Interactive order chart would appear here" },
    menu: { title: "Menu Performance (Last 7 Days)", icon: "fas fa-utensils", iconColor: "text-indigo-500", description: "Interactive menu performance chart would appear here" }
  });

  const analyticsTypes = [
    { id: 'sales', label: 'Sales Analytics' },
    { id: 'orders', label: 'Order Analytics' },
    { id: 'menu', label: 'Menu Performance' }
  ];

  useEffect(() => {
    fetchAnalyticsData();
  }, [activeAnalytics]);

  const fetchAnalyticsData = async () => {
    try {
      // TODO: API CALL - Get analytics data based on type (sales, orders, menu)
      // TODO: import apiService from '../../../services/apiService';
      // TODO: const response = await apiService.dashboard.getAnalytics(activeAnalytics);
      // TODO: setAnalyticsData(prev => ({ ...prev, [activeAnalytics]: response.chartData }));
      
      // CURRENT: Mock data - remove when API is ready
    } catch (err) {
      // TODO: Handle API errors
      console.error('Failed to fetch analytics data:', err.message);
    }
  };

  // FIXED COLORS (Tailwind-safe)
  const fixedColors = {
    sales: "bg-purple-600 hover:bg-purple-700",
    orders: "bg-teal-600 hover:bg-teal-700",
    menu: "bg-indigo-600 hover:bg-indigo-700"
  };

  const getButtonClass = (type) => {
    const baseClass = "px-6 py-3 rounded-md mr-4 transition-colors";
    const isActive = activeAnalytics === type.id;

    if (isActive) {
      return `${baseClass} text-white ${fixedColors[type.id]}`;
    } else {
      return `${baseClass} bg-gray-200 text-gray-700 hover:bg-gray-300`;
    }
  };

  const getAnalyticsContent = (type) => {
    return analyticsData[type] || {};
  };

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4 text-black">Analytics</h2>

      {/* Analytics Buttons */}
      <div className="mb-4">
        {analyticsTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setActiveAnalytics(type.id)}
            className={getButtonClass(type)}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Analytics Content */}
      {analyticsTypes.map(type => {
        const content = getAnalyticsContent(type.id);
        return (
          <div
            key={type.id}
            className={`bg-white rounded-lg p-4 shadow transition-all duration-300 ${
              activeAnalytics === type.id ? 'block' : 'hidden'
            }`}
          >
            <h2 className="text-xl font-semibold mb-4 text-black">{content.title}</h2>
            <div className="w-full h-64 bg-gray-100 rounded flex items-center justify-center">
              <div className="text-center">
                <i className={`${content.icon} text-4xl ${content.iconColor} mb-2`}></i>
                <p className="text-gray-500">{content.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AnalyticsSection;

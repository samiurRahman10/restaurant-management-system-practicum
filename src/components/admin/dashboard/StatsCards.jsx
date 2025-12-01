import { useState, useEffect } from 'react';

const StatsCards = () => {
  // MOCK DATA (REMOVE WHEN BACKEND IS AVAILABLE):
  // - Used for UI preview during development.
  // - Replace by calling `apiService.dashboard.getStats()` and
  //   setting the returned stats into state, then remove these entries.
  const [stats, setStats] = useState([
    {
      title: "Total Revenue",
      value: "$24,800",
      subtitle: "+5.2% from last week",
      icon: "fas fa-money-bill-wave",
      gradient: "from-orange-400 to-orange-500",
      textColor: "text-green-200"
    },
    {
      title: "Active Orders",
      value: "2",
      subtitle: "Currently processing",
      icon: "fas fa-shopping-basket",
      gradient: "from-blue-400 to-blue-500",
      textColor: "text-white"
    },
    {
      title: "Occupied Tables",
      value: "1/6",
      subtitle: "16% occupancy",
      icon: "fas fa-chair",
      gradient: "from-green-400 to-green-500",
      textColor: "text-green-200"
    },
    {
      title: "Pending Tasks",
      value: "7",
      subtitle: "Staff assignments",
      icon: "fas fa-clock",
      gradient: "from-purple-400 to-purple-500",
      textColor: "text-white"
    }
  ]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // TODO: API CALL - Get dashboard statistics
      // TODO: import apiService from '../../../services/apiService';
      // TODO: const response = await apiService.dashboard.getStats();
      // TODO: setStats(response.stats);
      
      // CURRENT: Mock data - remove when API is ready
      // Data will be fetched from backend
    } catch (err) {
      // TODO: Handle API errors
      console.error('Failed to fetch stats:', err.message);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${stat.gradient} rounded-lg p-4 flex flex-col gap-2 text-white`}
        >
          <i className={`${stat.icon} text-2xl`}></i>
          <p className="text-sm">{stat.title}</p>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className={`text-xs font-semibold ${stat.textColor}`}>{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
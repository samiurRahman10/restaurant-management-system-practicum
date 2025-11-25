const OrderStats = ({ stats }) => {
  const statCards = [
    {
      label: "Total Orders",
      value: stats.total,
      color: "border-blue-500",
      icon: "fas fa-shopping-basket"
    },
    {
      label: "Completed",
      value: stats.completed,
      color: "border-green-500",
      icon: "fas fa-check-circle"
    },
    {
      label: "Pending",
      value: stats.pending,
      color: "border-yellow-500",
      icon: "fas fa-clock"
    },
    {
      label: "Cancelled",
      value: stats.cancelled,
      color: "border-red-500",
      icon: "fas fa-times-circle"
    }
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {statCards.map((stat, index) => (
        <div key={index} className={`bg-white p-4 rounded-lg shadow border-l-4 ${stat.color}`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className="text-2xl font-bold text-black">{stat.value}</div>
            </div>
            <i className={`${stat.icon} text-xl text-gray-400`}></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStats;
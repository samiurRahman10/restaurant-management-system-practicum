const RevenueChart = () => {
  const revenueData = [
    { day: "Mon", height: "60px", revenue: "$3,200" },
    { day: "Tue", height: "90px", revenue: "$4,800" },
    { day: "Wed", height: "70px", revenue: "$3,800" },
    { day: "Thu", height: "120px", revenue: "$5,200" },
    { day: "Fri", height: "100px", revenue: "$4,500" },
    { day: "Sat", height: "140px", revenue: "$6,200" },
    { day: "Sun", height: "110px", revenue: "$5,100" }
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h2 className="font-semibold mb-3 text-black">Revenue Trend</h2>
      <p className="text-gray-600 mb-4 text-sm">Daily revenue this week</p>
      <div className="h-48 flex items-end justify-center space-x-2 md:space-x-6 px-2 md:px-4 overflow-x-auto">
        {revenueData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div 
              className="bg-orange-500 rounded w-8 md:w-12 transition-all duration-300 hover:bg-orange-600 cursor-pointer"
              style={{ height: item.height }}
              title={`Revenue: ${item.revenue}`}
            ></div>
            <span className="text-xs text-gray-600">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;
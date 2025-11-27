import React from 'react';

const SalesReport = ({ data, filters }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No sales data available for the selected period.
      </div>
    );
  }

  // Sort data by date to ensure proper trend calculation
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  const totalRevenue = sortedData.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = sortedData.reduce((sum, day) => sum + day.orders, 0);
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  // Find top performing day
  const topDay = sortedData.reduce((max, day) => day.revenue > max.revenue ? day : max, sortedData[0]);
  
  // Find worst performing day
  const worstDay = sortedData.reduce((min, day) => day.revenue < min.revenue ? day : min, sortedData[0]);

  // Calculate trends
  const revenueGrowth = sortedData.length > 1 
    ? ((sortedData[sortedData.length - 1].revenue - sortedData[0].revenue) / sortedData[0].revenue) * 100
    : 0;

  const averageOrdersPerDay = totalOrders / sortedData.length;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Sales Report</h2>
        <div className="text-sm text-gray-600">
          {filters.startDate} to {filters.endDate} • {sortedData.length} days
        </div>
      </div>

      {/* Enhanced Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-green-700 font-medium">Total Revenue</div>
              <div className="text-2xl font-bold text-green-800">${totalRevenue.toLocaleString()}</div>
            </div>
            <div className="text-green-600">
              <i className="fas fa-dollar-sign text-xl"></i>
            </div>
          </div>
          {revenueGrowth !== 0 && (
            <div className={`text-xs mt-2 ${revenueGrowth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <i className={`fas ${revenueGrowth > 0 ? 'fa-arrow-up' : 'fa-arrow-down'} mr-1`}></i>
              {Math.abs(revenueGrowth).toFixed(1)}% {revenueGrowth > 0 ? 'growth' : 'decline'}
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-blue-700 font-medium">Total Orders</div>
              <div className="text-2xl font-bold text-blue-800">{totalOrders}</div>
            </div>
            <div className="text-blue-600">
              <i className="fas fa-shopping-cart text-xl"></i>
            </div>
          </div>
          <div className="text-xs text-blue-600 mt-2">
            ~{Math.round(averageOrdersPerDay)} orders/day
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-purple-700 font-medium">Average Order</div>
              <div className="text-2xl font-bold text-purple-800">${averageOrderValue.toFixed(2)}</div>
            </div>
            <div className="text-purple-600">
              <i className="fas fa-chart-pie text-xl"></i>
            </div>
          </div>
          <div className="text-xs text-purple-600 mt-2">
            Per customer average
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-orange-700 font-medium">Performance</div>
              <div className="text-lg font-bold text-orange-800">{topDay.date}</div>
              <div className="text-sm text-orange-600">Best: ${topDay.revenue.toLocaleString()}</div>
            </div>
            <div className="text-orange-600">
              <i className="fas fa-trophy text-xl"></i>
            </div>
          </div>
          <div className="text-xs text-orange-600 mt-1">
            Worst: ${worstDay.revenue.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Enhanced Sales Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Day</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Revenue</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Orders</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Avg Order</th>
              {/* <th className="px-4 py-3 font-semibold text-gray-700">Daily Trend</th> */}
              <th className="px-4 py-3 font-semibold text-gray-700">Performance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedData.map((day, index) => {
              const previousDay = index > 0 ? sortedData[index - 1] : null;
              const revenueChange = previousDay 
                ? ((day.revenue - previousDay.revenue) / previousDay.revenue) * 100 
                : 0;
              
              const isBestDay = day.date === topDay.date;
              const isWorstDay = day.date === worstDay.date;
              
              let performanceColor = 'text-gray-600';
              if (isBestDay) performanceColor = 'text-green-600';
              else if (isWorstDay) performanceColor = 'text-red-600';
              else if (day.revenue > averageOrderValue * 10) performanceColor = 'text-blue-600';

              const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
              const dayName = dayNames[new Date(day.date).getDay()];

              return (
                <tr key={day.date} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{day.date}</td>
                  <td className="px-4 py-3 text-gray-600">{dayName}</td>
                  <td className="px-4 py-3 font-semibold text-green-700">${day.revenue.toLocaleString()}</td>
                  <td className="px-4 py-3 text-blue-700">{day.orders}</td>
                  <td className="px-4 py-3 text-purple-700">${day.averageOrder.toFixed(2)}</td>
                  {/* <td className="px-4 py-3 text-black">
                    {previousDay && (
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        revenueChange > 0 
                          ? 'bg-green-100 text-green-800' 
                          : revenueChange < 0 
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <i className={`fas ${
                          revenueChange > 0 ? 'fa-arrow-up' : 
                          revenueChange < 0 ? 'fa-arrow-down' : 'fa-minus'
                        } mr-1`}></i>
                        {revenueChange !== 0 ? Math.abs(revenueChange).toFixed(1) + '%' : '0%'}
                      </span>
                    )}
                  </td> */}
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium ${performanceColor}`}>
                      {isBestDay && <i className="fas fa-crown mr-1"></i>}
                      {isWorstDay && <i className="fas fa-exclamation-triangle mr-1"></i>}
                      {isBestDay ? 'Best Day' : 
                       isWorstDay ? 'Needs Attention' : 
                       day.revenue > averageOrderValue * 15 ? 'Great' : 
                       day.revenue > averageOrderValue * 10 ? 'Good' : 'Average'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Enhanced Revenue Trend Chart */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Trend Analysis</h3>
        
        {/* Chart */}
        <div className="flex items-end justify-between h-48 gap-1 p-4 bg-gray-50 rounded-lg mb-4">
          {sortedData.map((day, index) => {
            const maxRevenue = Math.max(...sortedData.map(d => d.revenue));
            const minRevenue = Math.min(...sortedData.map(d => d.revenue));
            const height = ((day.revenue - minRevenue) / (maxRevenue - minRevenue)) * 80 + 20; // 20-100% height
            
            const isBestDay = day.date === topDay.date;
            const isWorstDay = day.date === worstDay.date;
            
            let barColor = 'bg-orange-500';
            if (isBestDay) barColor = 'bg-green-500';
            else if (isWorstDay) barColor = 'bg-red-500';
            else if (day.revenue > averageOrderValue * 15) barColor = 'bg-blue-500';

            return (
              <div key={day.date} className="flex-1 flex flex-col items-center group relative">
                <div 
                  className={`w-full ${barColor} rounded-t transition-all duration-300 hover:opacity-80 ${isBestDay ? 'shadow-md' : ''}`}
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                    {day.date}: ${day.revenue.toLocaleString()}
                    {isBestDay && ' 👑'}
                    {isWorstDay && ' ⚠️'}
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2 truncate text-center">
                  <div>{new Date(day.date).getDate()}</div>
                  <div className="text-gray-400">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][new Date(day.date).getDay()]}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart Legend */}
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            <span className="text-gray-600">Best Performance</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
            <span className="text-gray-600">Great Performance</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
            <span className="text-gray-600">Average Performance</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
            <span className="text-gray-600">Needs Attention</span>
          </div>
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{Math.round(averageOrdersPerDay)}</div>
            <div className="text-sm text-gray-600">Avg Orders/Day</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {((totalRevenue / sortedData.length) / 1000).toFixed(1)}k
            </div>
            <div className="text-sm text-gray-600">Avg Revenue/Day</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {revenueGrowth > 0 ? '+' : ''}{revenueGrowth.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Period Growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
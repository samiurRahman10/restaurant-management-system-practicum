import React from 'react';

const InventoryReport = ({ data, filters }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No inventory data available.
      </div>
    );
  }

  const totalItems = data.reduce((sum, cat) => sum + cat.totalItems, 0);
  const lowStockItems = data.reduce((sum, cat) => sum + cat.lowStock, 0);
  const outOfStockItems = data.reduce((sum, cat) => sum + cat.outOfStock, 0);
  const totalValue = data.reduce((sum, cat) => sum + cat.value, 0);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Inventory Report</h2>
        <div className="text-sm text-gray-600">
          Current Stock Status
        </div>
      </div>

      {/* Inventory Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-600">{totalItems}</div>
          <div className="text-sm text-gray-600">Total Items</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-yellow-600">{lowStockItems}</div>
          <div className="text-sm text-gray-600">Low Stock</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-red-600">{outOfStockItems}</div>
          <div className="text-sm text-gray-600">Out of Stock</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-green-600">${totalValue.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Value</div>
        </div>
      </div>

      {/* Inventory by Category */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700">Category</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Total Items</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Low Stock</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Out of Stock</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Stock Value</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((category) => {
              const stockPercentage = ((category.totalItems - category.outOfStock) / category.totalItems) * 100;
              let statusColor = 'bg-green-100 text-green-800';
              if (stockPercentage < 50) statusColor = 'bg-red-100 text-red-800';
              else if (stockPercentage < 80) statusColor = 'bg-yellow-100 text-yellow-800';

              return (
                <tr key={category.category} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{category.category}</td>
                  <td className="px-4 py-3">{category.totalItems}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      category.lowStock > 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {category.lowStock}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      category.outOfStock > 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {category.outOfStock}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold text-green-600">${category.value.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                      {stockPercentage.toFixed(0)}% Stocked
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Stock Distribution Chart */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-black">Inventory Distribution</h3>
        <div className="space-y-2">
          {data.map((category) => {
            const totalItemsAll = data.reduce((sum, cat) => sum + cat.totalItems, 0);
            const percentage = (category.totalItems / totalItemsAll) * 100;
            
            return (
              <div key={category.category} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-24 text-sm font-medium text-gray-700">{category.category}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-orange-500 h-4 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 w-16 text-right">
                  {category.totalItems} ({percentage.toFixed(1)}%)
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InventoryReport;
import React from 'react';

const InventoryStats = ({ inventoryItems }) => {
  const totalItems = inventoryItems.length;
  const inStockItems = inventoryItems.filter(item => item.status === 'in_stock').length;
  const lowStockItems = inventoryItems.filter(item => item.status === 'low_stock').length;
  const outOfStockItems = inventoryItems.filter(item => item.status === 'out_of_stock').length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
        <div className="text-sm text-gray-600">Total Items</div>
        <div className="text-2xl font-bold text-black">{totalItems}</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
        <div className="text-sm text-gray-600">In Stock</div>
        <div className="text-2xl font-bold  text-black">{inStockItems}</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500">
        <div className="text-sm text-gray-600">Low Stock</div>
        <div className="text-2xl font-bold  text-black">{lowStockItems}</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
        <div className="text-sm text-gray-600">Out of Stock</div>
        <div className="text-2xl font-bold  text-black">{outOfStockItems}</div>
      </div>
    </div>
  );
};

export default InventoryStats;
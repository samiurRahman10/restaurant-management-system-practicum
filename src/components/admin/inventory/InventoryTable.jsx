import React from 'react';

const InventoryTable = ({ items, onEdit, onDelete }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      'in_stock': { text: 'In Stock', class: 'bg-green-100 text-green-800' },
      'low_stock': { text: 'Low Stock', class: 'bg-yellow-100 text-yellow-800' },
      'out_of_stock': { text: 'Out of Stock', class: 'bg-red-100 text-red-800' }
    };
    
    const config = statusConfig[status] || statusConfig.in_stock;
    return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${config.class}`}>{config.text}</span>;
  };

  const getStockLevelClass = (currentStock, reorderLevel) => {
    if (currentStock === 0) return 'text-red-600';
    if (currentStock <= reorderLevel) return 'text-yellow-600';
    return 'text-green-600';
  };

  if (items.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-8 text-center text-gray-500">
          No inventory items found matching your criteria.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 font-semibold text-gray-700">Item Name</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Category</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Current Stock</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Unit</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Reorder Level</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Supplier</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map(item => {
              const stockLevelClass = getStockLevelClass(item.currentStock, item.reorderLevel);
              
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 capitalize text-gray-500">{item.category.replace('_', ' ')}</td>
                  <td className={`px-6 py-4 font-semibold ${stockLevelClass}`}>{item.currentStock}</td>
                  <td className="px-6 py-4 text-gray-500">{item.unit}</td>
                  <td className="px-6 py-4 text-gray-500">{item.reorderLevel}</td>
                  <td className="px-6 py-4 text-gray-500">{item.supplier}</td>
                  <td className="px-6 py-4">{getStatusBadge(item.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-7">
                      <button 
                        onClick={() => onEdit(item)} 
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        title="Edit"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button 
                        onClick={() => onDelete(item.id)} 
                        className="text-red-600 hover:text-red-800 transition-colors"
                        title="Delete"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
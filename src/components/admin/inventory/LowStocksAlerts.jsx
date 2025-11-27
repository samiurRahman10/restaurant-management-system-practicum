import React from 'react';

const LowStocksAlerts = ({ inventoryItems, onReorder }) => {
  const lowStockItems = inventoryItems.filter(item => 
    item.status === 'low_stock' || item.status === 'out_of_stock'
  );

  return (
    <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-yellow-800 flex items-center gap-2">
          <i className="fas fa-exclamation-triangle"></i>
          Low Stock Alerts
        </h3>
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-semibold">
          {lowStockItems.length} items
        </span>
      </div>
      <div className="space-y-2">
        {lowStockItems.length === 0 ? (
          <p className="text-yellow-700">No low stock alerts at this time.</p>
        ) : (
          lowStockItems.map(item => (
            <div key={item.id} className="flex justify-between items-center p-3 bg-yellow-100 rounded-lg">
              <div>
                <span className="font-semibold text-yellow-800">{item.name}</span>
                <span className="text-yellow-700 text-sm ml-2">{item.currentStock} {item.unit} remaining</span>
              </div>
              <button 
                onClick={() => onReorder(item.id)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Reorder
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LowStocksAlerts;
import React from 'react';

const ReportStats = ({ reportType, data }) => {
  const getSalesStats = () => {
    if (!data || data.length === 0) return { totalRevenue: 0, totalOrders: 0, averageOrder: 0 };
    
    const totalRevenue = data.reduce((sum, day) => sum + day.revenue, 0);
    const totalOrders = data.reduce((sum, day) => sum + day.orders, 0);
    const averageOrder = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    
    return { totalRevenue, totalOrders, averageOrder };
  };

  const getInventoryStats = () => {
    if (!data || data.length === 0) return { totalItems: 0, lowStock: 0, outOfStock: 0, totalValue: 0 };
    
    const totalItems = data.reduce((sum, cat) => sum + cat.totalItems, 0);
    const lowStock = data.reduce((sum, cat) => sum + cat.lowStock, 0);
    const outOfStock = data.reduce((sum, cat) => sum + cat.outOfStock, 0);
    const totalValue = data.reduce((sum, cat) => sum + cat.value, 0);
    
    return { totalItems, lowStock, outOfStock, totalValue };
  };

  const getFinancialStats = () => {
    if (!data) return { revenue: 0, expenses: 0, profit: 0, netProfit: 0 };
    
    return {
      revenue: data.revenue || 0,
      expenses: data.expenses || 0,
      profit: data.profit || 0,
      netProfit: data.netProfit || 0
    };
  };

  const renderSalesStats = () => {
    const stats = getSalesStats();
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow">
          <div className="text-sm text-blue-600 font-medium">Total Revenue</div>
          <div className="text-2xl font-bold text-blue-700">${stats.totalRevenue.toLocaleString()}</div>
        </div>
        <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow">
          <div className="text-sm text-green-600 font-medium">Total Orders</div>
          <div className="text-2xl font-bold text-green-700">{stats.totalOrders}</div>
        </div>
        <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow">
          <div className="text-sm text-purple-600 font-medium">Avg Order Value</div>
          <div className="text-2xl font-bold text-purple-700">${stats.averageOrder.toFixed(2)}</div>
        </div>
      </div>
    );
  };

  const renderInventoryStats = () => {
    const stats = getInventoryStats();
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-4 rounded-lg border-l-4 border-blue-500">
          <div className="text-sm text-blue-600 font-medium">Total Items</div>
          <div className="text-2xl font-bold text-blue-700">{stats.totalItems}</div>
        </div>
        <div className="bg-white shadow p-4 rounded-lg border-l-4 border-yellow-500">
          <div className="text-sm text-yellow-600 font-medium">Low Stock</div>
          <div className="text-2xl font-bold text-yellow-700">{stats.lowStock}</div>
        </div>
        <div className="bg-white shadow p-4 rounded-lg border-l-4 border-red-500">
          <div className="text-sm text-red-600 font-medium">Out of Stock</div>
          <div className="text-2xl font-bold text-red-700">{stats.outOfStock}</div>
        </div>
        <div className="bg-white shadow p-4 rounded-lg border-l-4 border-green-500">
          <div className="text-sm text-green-600 font-medium">Total Value</div>
          <div className="text-2xl font-bold text-green-700">${stats.totalValue.toLocaleString()}</div>
        </div>
      </div>
    );
  };

  const renderFinancialStats = () => {
    const stats = getFinancialStats();
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-4 rounded-lg border-l-4 border-green-500">
          <div className="text-sm text-green-600 font-medium">Total Revenue</div>
          <div className="text-2xl font-bold text-green-700">${stats.revenue.toLocaleString()}</div>
        </div>
        <div className="bg-white shadow p-4 rounded-lg border-l-4 border-red-500">
          <div className="text-sm text-red-600 font-medium">Total Expenses</div>
          <div className="text-2xl font-bold text-red-700">${stats.expenses.toLocaleString()}</div>
        </div>
        <div className="bg-shadow shadow p-4 rounded-lg border-l-4 border-blue-500">
          <div className="text-sm text-blue-600 font-medium">Gross Profit</div>
          <div className="text-2xl font-bold text-blue-700">${stats.profit.toLocaleString()}</div>
        </div>
        <div className="bg-white shadow p-4 rounded-lg border-l-4 border-purple-500">
          <div className="text-sm text-purple-600 font-medium">Net Profit</div>
          <div className="text-2xl font-bold text-purple-700">${stats.netProfit.toLocaleString()}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-6">
      {reportType === 'sales' && renderSalesStats()}
      {reportType === 'inventory' && renderInventoryStats()}
      {reportType === 'financial' && renderFinancialStats()}
    </div>
  );
};

export default ReportStats;
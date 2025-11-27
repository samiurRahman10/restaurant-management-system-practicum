import React from 'react';

const FinancialReport = ({ data, filters }) => {
  if (!data) {
    return (
      <div className="p-6 text-center text-gray-500">
        No financial data available.
      </div>
    );
  }

  const { revenue, expenses, profit, tax, netProfit, breakdown } = data;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Financial Report</h2>
        <div className="text-sm text-gray-600">
          {filters.startDate} to {filters.endDate}
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-sm text-green-600 font-medium">Total Revenue</div>
          <div className="text-2xl font-bold text-green-700">${revenue.toLocaleString()}</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-sm text-red-600 font-medium">Total Expenses</div>
          <div className="text-2xl font-bold text-red-700">${expenses.toLocaleString()}</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="text-sm text-blue-600 font-medium">Gross Profit</div>
          <div className="text-2xl font-bold text-blue-700">${profit.toLocaleString()}</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="text-sm text-purple-600 font-medium">Net Profit</div>
          <div className="text-2xl font-bold text-purple-700">${netProfit.toLocaleString()}</div>
        </div>
      </div>

      {/* Profit & Loss Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-black">Profit & Loss Statement</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">Total Revenue</span>
              <span className="font-semibold text-green-600">${revenue.toLocaleString()}</span>
            </div>
            
            <div className="pl-4 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Food Sales</span>
                <span className="font-medium text-black">${(revenue * 0.8).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Beverage Sales</span>
                <span className="font-medium text-black">${(revenue * 0.2).toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">Total Expenses</span>
              <span className="font-semibold text-red-600">${expenses.toLocaleString()}</span>
            </div>
            
            <div className="pl-4 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Ingredient Costs</span>
                <span className="font-medium text-black">${(expenses * 0.53).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Labor Costs</span>
                <span className="font-medium text-black">${(expenses * 0.29).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Rent & Utilities</span>
                <span className="font-medium text-black">${(expenses * 0.18).toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">Gross Profit</span>
              <span className="font-semibold text-blue-600">${profit.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">Tax</span>
              <span className="font-semibold text-orange-600">${tax.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center py-2 font-bold text-lg">
              <span className="text-gray-800">Net Profit</span>
              <span className="text-purple-600 ">${netProfit.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-black">Expense Breakdown</h3>
          <div className="space-y-4">
            {breakdown.map((item, index) => (
              <div key={item.category} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{item.category}</span>
                  <span className="text-sm font-semibold text-black">${item.amount.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      index === 0 ? 'bg-green-500' :
                      index === 1 ? 'bg-blue-500' :
                      index === 2 ? 'bg-red-500' :
                      index === 3 ? 'bg-yellow-500' : 'bg-purple-500'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{item.percentage}% of revenue</span>
                  <span>${item.amount.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4 text-black">Key Financial Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg shadow">
            <div className="text-sm text-gray-600">Profit Margin</div>
            <div className="text-xl font-bold text-green-600">
              {((profit / revenue) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg shadow">
            <div className="text-sm text-gray-600">Net Margin</div>
            <div className="text-xl font-bold text-purple-600">
              {((netProfit / revenue) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg shadow">
            <div className="text-sm text-gray-600">Expense Ratio</div>
            <div className="text-xl font-bold text-red-600">
              {((expenses / revenue) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg shadow">
            <div className="text-sm text-gray-600">ROI</div>
            <div className="text-xl font-bold text-blue-600">
              {((netProfit / expenses) * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReport;
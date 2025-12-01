import React, { useState, useEffect } from 'react';
import SalesReport from './SalesReport';
import InventoryReport from './InventoryReport';
import FinancialReport from './FinancialReport';
import ReportFilters from './ReportFilters';
import ReportStats from './ReportStats';

const ReportsPage = () => {
  const [activeReport, setActiveReport] = useState('sales');
  const [filters, setFilters] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    category: 'all',
    reportType: 'daily'
  });
  const [reportData, setReportData] = useState({
    sales: [],
    inventory: [],
    financial: {}
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // MOCK DATA (REMOVE WHEN BACKEND IS AVAILABLE):
  // - These generators create placeholder report data for UI previews.
  // - Replace with `apiService.reports.getReport(activeReport, filters)` responses
  //   and remove the generator functions.
  const generateSalesData = () => {
    const days = [];
    const start = new Date(filters.startDate);
    const end = new Date(filters.endDate);
    
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      days.push({
        date: date.toISOString().split('T')[0],
        revenue: Math.floor(Math.random() * 5000) + 1000,
        orders: Math.floor(Math.random() * 50) + 20,
        averageOrder: Math.floor(Math.random() * 50) + 25
      });
    }
    
    return days;
  };

  const generateInventoryData = () => {
    return [
      { category: 'Vegetables', totalItems: 15, lowStock: 3, outOfStock: 1, value: 450 },
      { category: 'Meat & Poultry', totalItems: 8, lowStock: 2, outOfStock: 0, value: 1200 },
      { category: 'Dairy', totalItems: 12, lowStock: 1, outOfStock: 1, value: 300 },
      { category: 'Beverages', totalItems: 20, lowStock: 0, outOfStock: 0, value: 600 },
      { category: 'Spices', totalItems: 25, lowStock: 2, outOfStock: 0, value: 150 },
      { category: 'Other', totalItems: 10, lowStock: 1, outOfStock: 0, value: 200 }
    ];
  };

  const generateFinancialData = () => {
    return {
      revenue: 125000,
      expenses: 85000,
      profit: 40000,
      tax: 10000,
      netProfit: 30000,
      breakdown: [
        { category: 'Food Sales', amount: 100000, percentage: 80 },
        { category: 'Beverage Sales', amount: 25000, percentage: 20 },
        { category: 'Ingredient Costs', amount: 45000, percentage: 36 },
        { category: 'Labor Costs', amount: 25000, percentage: 20 },
        { category: 'Rent & Utilities', amount: 15000, percentage: 12 }
      ]
    };
  };

  const fetchReports = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // TODO: API CALL - Get report data based on active report and filters
      // TODO: import apiService from '../../../services/apiService';
      // TODO: const response = await apiService.reports.getReport(activeReport, filters);
      // TODO: setReportData(prev => ({ ...prev, [activeReport]: response.data }));
      
      // CURRENT: Mock data - remove when API is ready
      if (activeReport === 'sales') {
        setReportData(prev => ({ ...prev, sales: generateSalesData() }));
      } else if (activeReport === 'inventory') {
        setReportData(prev => ({ ...prev, inventory: generateInventoryData() }));
      } else if (activeReport === 'financial') {
        setReportData(prev => ({ ...prev, financial: generateFinancialData() }));
      }
    } catch (err) {
      // TODO: Handle API errors
      setError(err.message || 'Failed to fetch reports');
      console.error('Failed to fetch reports:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Now useEffect can safely use the function
  useEffect(() => {
    fetchReports();
  }, [activeReport, filters]);
 

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const exportReport = () => {
    const data = {
      filters,
      reportType: activeReport,
      data: reportData[activeReport],
      generatedAt: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `${activeReport}-report-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const printReport = () => {
    window.print();
  };

  const reports = [
    { id: 'sales', name: 'Sales Report', icon: 'fas fa-chart-line' },
    { id: 'inventory', name: 'Inventory Report', icon: 'fas fa-boxes' },
    { id: 'financial', name: 'Financial Report', icon: 'fas fa-money-bill-wave' }
  ];

  const renderActiveReport = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Generating report...</p>
          </div>
        </div>
      );
    }

    switch (activeReport) {
      case 'sales':
        return <SalesReport data={reportData.sales} filters={filters} />;
      case 'inventory':
        return <InventoryReport data={reportData.inventory} filters={filters} />;
      case 'financial':
        return <FinancialReport data={reportData.financial} filters={filters} />;
      default:
        return <SalesReport data={reportData.sales} filters={filters} />;
    }
  };

  return (
    <div className="page-content md:p-2">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
            <p className="text-gray-600">Comprehensive insights into your restaurant performance</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button 
              onClick={exportReport}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <i className="fas fa-download"></i> Export
            </button>
            <button 
              onClick={printReport}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <i className="fas fa-print"></i> Print
            </button>
          </div>
        </div>

        <ReportStats reportType={activeReport} data={reportData[activeReport]} />
      </div>

      {/* Report Filters */}
      <ReportFilters filters={filters} onFilterChange={handleFilterChange} />

      {/* Report Navigation */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="flex border-b border-gray-200">
          {reports.map(report => (
            <button
              key={report.id}
              onClick={() => setActiveReport(report.id)}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeReport === report.id
                  ? 'border-b-2 border-orange-500 text-orange-600 bg-orange-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <i className={`${report.icon} mr-2`}></i>
              {report.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Report Content */}
      <div className="bg-white rounded-lg shadow">
        {renderActiveReport()}
      </div>
    </div>
  );
};

export default ReportsPage;
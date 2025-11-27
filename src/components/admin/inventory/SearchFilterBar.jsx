import React, { useState } from 'react';

const SearchFilterBar = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilter(value, categoryFilter, statusFilter);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryFilter(value);
    onFilter(searchTerm, value, statusFilter);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatusFilter(value);
    onFilter(searchTerm, categoryFilter, value);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input 
            type="text" 
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search inventory items..."
            className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black placeholder:text-black"
          />
        </div>
        <div className="flex gap-2">
          <select 
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black"
          >
            <option value="all">All Categories</option>
            <option value="vegetables">Vegetables</option>
            <option value="meat">Meat & Poultry</option>
            <option value="dairy">Dairy</option>
            <option value="beverages">Beverages</option>
            <option value="spices">Spices</option>
            <option value="other">Other</option>
          </select>
          <select 
            value={statusFilter}
            onChange={handleStatusChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black"
          >
            <option value="all">All Status</option>
            <option value="in_stock">In Stock</option>
            <option value="low_stock">Low Stock</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
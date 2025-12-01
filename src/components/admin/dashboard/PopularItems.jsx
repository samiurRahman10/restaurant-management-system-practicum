import React, { useState, useEffect } from 'react';

const PopularItems = () => {
    // MOCK DATA (REMOVE WHEN BACKEND IS AVAILABLE):
    // - Located here for development and UI preview.
    // - When integrating the backend, replace this initial state
    //   with data fetched from `apiService.dashboard.getPopularItems()`
    //   and remove these mock entries.
    const [popularItems, setPopularItems] = useState([
      { name: 'Grilled Salmon', color: 'text-orange-500', orders: 42 },
      { name: 'Beef Burger', color: 'text-purple-500', orders: 38 },
      { name: 'Caesar Salad', color: 'text-green-500', orders: 35 },
      { name: 'Margherita Pizza', color: 'text-blue-500', orders: 30 },
      { name: 'Chocolate Cake', color: 'text-gray-600', orders: 25 }
    ]);

    async function fetchPopularItems() {
      try {
        // TODO: API CALL - Get popular menu items
        // TODO: import apiService from '../../../services/apiService';
        // TODO: const response = await apiService.dashboard.getPopularItems();
        // TODO: setPopularItems(response.items);

        // CURRENT: Mock data - remove when API is ready
      } catch (err) {
        // TODO: Handle API errors
        console.error('Failed to fetch popular items:', err.message);
      }
    }

    useEffect(() => {
      fetchPopularItems();
    }, []);
    return (
        <div>
            <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="font-semibold mb-3 text-black">Popular Menu Items</h2>
            <p className="text-gray-600 mb-4 text-sm">Top ordered dishes this week</p>
            <div className="flex items-center justify-center h-48">
              <ul className="space-y-2 text-sm w-full">
                {popularItems.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span className={item.color}>{item.name}</span>
                    <span className="font-semibold text-black">{item.orders} orders</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    );
};

export default PopularItems;
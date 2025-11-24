import React from 'react';

const PopularItems = () => {
    return (
        <div>
            <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="font-semibold mb-3 text-black">Popular Menu Items</h2>
            <p className="text-gray-600 mb-4 text-sm">Top ordered dishes this week</p>
            <div className="flex items-center justify-center h-48">
              <ul className="space-y-2 text-sm w-full">
                <li className="flex justify-between"><span className="text-orange-500">Grilled Salmon</span><span className="font-semibold text-black">42 orders</span></li>
                <li className="flex justify-between"><span className="text-purple-500">Beef Burger</span><span className="font-semibold text-black">38 orders</span></li>
                <li className="flex justify-between"><span className="text-green-500">Caesar Salad</span><span className="font-semibold text-black">35 orders</span></li>
                <li className="flex justify-between"><span className="text-blue-500">Margherita Pizza</span><span className="font-semibold text-black">30 orders</span></li>
                <li className="flex justify-between"><span className="text-gray-600">Chocolate Cake</span><span className="font-semibold text-black">25 orders</span></li>
              </ul>
            </div>
          </div>
        </div>
    );
};

export default PopularItems;
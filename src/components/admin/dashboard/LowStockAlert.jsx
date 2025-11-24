import React from 'react';

const LowStockAlert = () => {
    return (
        <div>
            <div className="bg-white shadow rounded-lg p-4 md:p-6">
          <h3 className="font-semibold mb-4 text-black">Low Stock Alerts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[300px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-2 text-black">Ingredient</th>
                  <th className="pb-2 text-black">Current</th>
                  <th className="pb-2 text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 text-black">Truffle Oil</td>
                  <td className="py-1 text-black">3 L</td>
                  <td className="py-1 text-black"><span className="text-red-600 font-semibold">Critical</span></td>
                </tr>
                <tr>
                  <td className="py-1 text-black">Salmon Fillet</td>
                  <td className="py-1 text-black">5 kg</td>
                  <td className="py-1 text-black"><span className="text-yellow-600 font-semibold">Warning</span></td>
                </tr>
                <tr>
                  <td className="py-1 text-black">Parmesan Cheese</td>
                  <td className="py-1 text-black">2 kg</td>
                  <td className="py-1 text-black"><span className="text-yellow-600 font-semibold">Warning</span></td>
                </tr>
                <tr>
                  <td className="py-1 text-black">Fresh Basil</td>
                  <td className="py-1 text-black">100 g</td>
                  <td className="py-1 text-black"><span className="text-red-600 font-semibold">Critical</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
    );
};

export default LowStockAlert;
import React, { useState, useEffect } from 'react';

const LowStockAlert = () => {
    // MOCK DATA (REMOVE WHEN BACKEND IS AVAILABLE):
    // - Replace with `apiService.inventory.getLowStockAlerts()` response.
    const [alerts, setAlerts] = useState([
        { ingredient: 'Truffle Oil', current: '3 L', status: 'Critical', statusColor: 'text-red-600' },
        { ingredient: 'Salmon Fillet', current: '5 kg', status: 'Warning', statusColor: 'text-yellow-600' },
        { ingredient: 'Parmesan Cheese', current: '2 kg', status: 'Warning', statusColor: 'text-yellow-600' },
        { ingredient: 'Fresh Basil', current: '100 g', status: 'Critical', statusColor: 'text-red-600' }
    ]);

    async function fetchLowStockAlerts() {
        try {
            // TODO: API CALL - Get low stock inventory items
            // TODO: import apiService from '../../../services/apiService';
            // TODO: const response = await apiService.inventory.getLowStockAlerts();
            // TODO: setAlerts(response.alerts);

            // CURRENT: Mock data - remove when API is ready
        } catch (err) {
            // TODO: Handle API errors
            console.error('Failed to fetch low stock alerts:', err.message);
        }
    }

    useEffect(() => {
        fetchLowStockAlerts();
    }, []);

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
                            {alerts.map((alert, index) => (
                                <tr key={index}>
                                    <td className="py-1 text-black">{alert.ingredient}</td>
                                    <td className="py-1 text-black">{alert.current}</td>
                                    <td className="py-1 text-black"><span className={`${alert.statusColor} font-semibold`}>{alert.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
  };
  export default LowStockAlert;
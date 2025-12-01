import { useState, useEffect } from 'react';

const RecentOrders = () => {
  // MOCK DATA (REMOVE WHEN BACKEND IS AVAILABLE):
  // - Replace by fetching recent orders via `apiService.orders.getRecentOrders()`
  const [orders, setOrders] = useState([
    {
      id: "#1245",
      customer: "Customer One",
      amount: "$50.00",
      progress: 75,
      status: "Preparing",
      statusColor: "text-green-600"
    },
    {
      id: "#1244",
      customer: "Safin Ahmed",
      amount: "$60.00",
      progress: 100,
      status: "Completed",
      statusColor: "text-green-600"
    },
    {
      id: "#1243",
      customer: "Eti Khatun",
      amount: "$70.00",
      progress: 100,
      status: "Completed",
      statusColor: "text-green-600"
    },
    {
      id: "#1242",
      customer: "Rubel Ahmed",
      amount: "$45.50",
      progress: 25,
      status: "Pending",
      statusColor: "text-yellow-600"
    }
  ]);

  useEffect(() => {
    fetchRecentOrders();
  }, []);

  const fetchRecentOrders = async () => {
    try {
      // TODO: API CALL - Get recent orders (limited to last 5-10)
      // TODO: import apiService from '../../../services/apiService';
      // TODO: const response = await apiService.orders.getRecentOrders();
      // TODO: setOrders(response.orders);
      
      // CURRENT: Mock data - remove when API is ready
    } catch (err) {
      // TODO: Handle API errors
      console.error('Failed to fetch recent orders:', err.message);
    }
  };

  return (
    <section className="bg-white shadow rounded-lg p-4 md:p-6 mb-6 md:mb-8">
      <h3 className="font-semibold mb-4 text-black">Recent Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 text-black">Order ID</th>
              <th className="pb-2 text-black">Customer</th>
              <th className="pb-2 text-black">Amount</th>
              <th className="pb-2 text-black">Progress</th>
              <th className="pb-2 text-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="py-2 text-black">{order.id}</td>
                <td className="py-2 text-black">{order.customer}</td>
                <td className="py-2 text-black">{order.amount}</td>
                <td className="py-2 text-black">
                  <div className="w-24 md:w-32 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="py-2">
                  <span className={`font-semibold ${order.statusColor}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentOrders;
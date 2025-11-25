const OrderTable = ({ orders, onStatusUpdate }) => {
  const getStatusBadge = (status) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      preparing: 'bg-blue-100 text-blue-800',
      ready: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <i className="fas fa-shopping-basket text-4xl text-gray-300 mb-4"></i>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No orders found</h3>
        <p className="text-gray-500">No orders match the current filter</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="font-semibold mb-4 text-lg text-black">All Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-3 text-gray-700">Order ID</th>
              <th className="pb-3 text-gray-700">Customer</th>
              <th className="pb-3 text-gray-700">Type</th>
              <th className="pb-3 text-gray-700">Amount</th>
              <th className="pb-3 text-gray-700">Status</th>
              <th className="pb-3 text-gray-700">Time</th>
              <th className="pb-3 text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 text-gray-800">#{order.id}</td>
                <td className="py-3 text-gray-800">{order.customerName}</td>
                <td className="py-3 text-gray-800">
                  <span className={`px-2 py-1 rounded text-xs ${
                    order.type === 'dine-in' ? 'bg-blue-100 text-blue-800' :
                    order.type === 'takeaway' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {order.type}
                  </span>
                </td>
                <td className="py-3 text-gray-800 font-semibold">${order.total.toFixed(2)}</td>
                <td className="py-3">{getStatusBadge(order.status)}</td>
                <td className="py-3 text-gray-600">{order.orderTime}</td>
                <td className="py-3">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-800 transition-colors">
                      <i className="fas fa-edit"></i>
                    </button>
                    {order.status === 'pending' && (
                      <button 
                        onClick={() => onStatusUpdate(order.id, 'preparing')}
                        className="text-orange-600 hover:text-orange-800 transition-colors"
                      >
                        <i className="fas fa-play"></i>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
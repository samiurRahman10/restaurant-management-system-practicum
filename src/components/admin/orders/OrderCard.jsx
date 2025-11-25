const OrderCard = ({ order, onStatusUpdate }) => {
  const getStatusColor = (status) => {
    const colors = {
      pending: { border: 'border-yellow-500', bg: 'bg-yellow-100', text: 'text-yellow-800' },
      preparing: { border: 'border-blue-500', bg: 'bg-blue-100', text: 'text-blue-800' },
      ready: { border: 'border-green-500', bg: 'bg-green-100', text: 'text-green-800' },
      completed: { border: 'border-gray-500', bg: 'bg-gray-100', text: 'text-gray-800' },
      cancelled: { border: 'border-red-500', bg: 'bg-red-100', text: 'text-red-800' }
    };
    return colors[status] || colors.pending;
  };

  const getStatusActions = (status) => {
    const actions = {
      pending: [
        { label: 'Accept', status: 'preparing', color: 'bg-green-500 hover:bg-green-600' },
        { label: 'Decline', status: 'cancelled', color: 'bg-red-500 hover:bg-red-600' }
      ],
      preparing: [
        { label: 'Ready', status: 'ready', color: 'bg-green-500 hover:bg-green-600' },
        { label: 'Delay', status: 'preparing', color: 'bg-gray-500 hover:bg-gray-600' }
      ],
      ready: [
        { label: 'Deliver', status: 'completed', color: 'bg-green-500 hover:bg-green-600' },
        { label: 'Call', action: 'call', color: 'bg-gray-500 hover:bg-gray-600' }
      ]
    };
    return actions[status] || [];
  };

  const statusColor = getStatusColor(order.status);
  const statusActions = getStatusActions(order.status);

  const handleAction = (action) => {
    if (action.status) {
      onStatusUpdate(order.id, action.status);
    } else if (action.action === 'call') {
      alert(`Calling customer: ${order.phone}`);
    }
  };

  return (
    <div className={`order-card bg-white rounded-lg shadow-lg border-l-4 ${statusColor.border} hover:shadow-xl transition-all duration-300`}>
      <div className="p-4">
        {/* Order Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg text-black">Order #{order.id}</h3>
            <p className="text-gray-600 text-sm">
              {order.type === 'dine-in' ? `Table #${order.tableNumber} • ${order.guests} guests` : 
               order.type === 'takeaway' ? `Takeaway • ${order.customerName}` :
               `Delivery • ${order.customerName}`}
            </p>
          </div>
          <span className={`${statusColor.bg} ${statusColor.text} px-2 py-1 rounded-full text-xs font-semibold`}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>

        {/* Order Items */}
        <div className="space-y-2 mb-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className=" text-black">{item.quantity}x {item.name}</span>
              <span className=" text-black">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar (for preparing orders) */}
        {order.status === 'preparing' && order.progress && (
          <div className="mb-3">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Preparation Progress</span>
              <span>{order.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${order.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Estimated Time (for preparing orders) */}
        {order.status === 'preparing' && order.estimatedTime && (
          <div className="text-xs text-gray-600 mb-3">
            Estimated time: {order.estimatedTime} mins
          </div>
        )}

        {/* Waiting Time (for ready orders) */}
        {order.status === 'ready' && order.waitingTime && (
          <div className="text-xs text-red-600 mb-3">
            Waiting: {order.waitingTime} mins
          </div>
        )}

        {/* Order Footer */}
        <div className="border-t pt-3">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold  text-black">Total: ${order.total.toFixed(2)}</div>
            <div className="text-xs text-gray-500">{order.orderTime}</div>
          </div>
          
          {/* Action Buttons */}
          {statusActions.length > 0 && (
            <div className="flex space-x-2">
              {statusActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleAction(action)}
                  className={`${action.color} text-white px-3 py-1 rounded text-sm transition-colors flex-1`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
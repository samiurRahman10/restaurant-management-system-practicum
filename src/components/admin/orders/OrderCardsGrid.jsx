import OrderCard from './OrderCard';

const OrderCardsGrid = ({ orders, onStatusUpdate }) => {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
      {orders.map(order => (
        <OrderCard
          key={order.id}
          order={order}
          onStatusUpdate={onStatusUpdate}
        />
      ))}
    </div>
  );
};

export default OrderCardsGrid;
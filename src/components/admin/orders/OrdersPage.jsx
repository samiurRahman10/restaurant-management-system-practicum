import { useState, useEffect } from 'react';
import OrderStats from './OrderStats';
import OrderFilterTabs from './OrderFilterTabs';
import OrderCardsGrid from './OrderCardsGrid';
import OrderTable from './OrderTable';
import OrderActions from './OrderActions';
import NewOrderModal from './NewOrderModal';

// MOCK DATA (REMOVE WHEN BACKEND IS AVAILABLE):
// - Located here for development and UI preview.
// - Replace by fetching from `apiService.orders.getOrders()` and remove this array.
const mockOrdersData = [
  {
    id: 1245,
    customerName: "Customer One",
    type: "dine-in",
    tableNumber: 5,
    guests: 2,
    items: [
      { name: "Grilled Salmon", quantity: 2, price: 32.00 },
      { name: "Caesar Salad", quantity: 1, price: 12.00 },
      { name: "Soft Drinks", quantity: 2, price: 6.00 }
    ],
    total: 50.00,
    status: "pending",
    timestamp: "2024-01-15T14:30:00Z",
    progress: 75,
    orderTime: "2 mins ago"
  },
  {
    id: 1246,
    customerName: "John Doe",
    type: "takeaway",
    phone: "+1234567890",
    items: [
      { name: "Beef Burger", quantity: 1, price: 18.00 },
      { name: "French Fries", quantity: 1, price: 8.00 },
      { name: "Chocolate Shake", quantity: 1, price: 12.00 }
    ],
    total: 38.00,
    status: "preparing",
    timestamp: "2024-01-15T14:15:00Z",
    progress: 60,
    estimatedTime: 15,
    orderTime: "15 mins ago"
  },
  {
    id: 1247,
    customerName: "Sarah Smith",
    type: "delivery",
    address: "123 Main St, Uttara",
    phone: "+1234567891",
    items: [
      { name: "Margherita Pizza", quantity: 2, price: 24.00 },
      { name: "Garlic Bread", quantity: 1, price: 6.00 }
    ],
    total: 30.00,
    status: "ready",
    timestamp: "2024-01-15T13:45:00Z",
    progress: 100,
    waitingTime: 5,
    orderTime: "30 mins ago"
  },
  {
    id: 1248,
    customerName: "Mike Johnson",
    type: "dine-in",
    tableNumber: 3,
    guests: 4,
    items: [
      { name: "Grilled Salmon", quantity: 2, price: 32.00 },
      { name: "Beef Burger", quantity: 2, price: 36.00 },
      { name: "Caesar Salad", quantity: 1, price: 12.00 },
      { name: "Fresh Orange Juice", quantity: 4, price: 19.96 }
    ],
    total: 99.96,
    status: "completed",
    timestamp: "2024-01-15T13:00:00Z",
    progress: 100,
    orderTime: "1 hour ago"
  },
  {
    id: 1249,
    customerName: "Emma Wilson",
    type: "delivery",
    address: "456 Oak Road, Uttara",
    phone: "+1234567892",
    items: [
      { name: "Chocolate Cake", quantity: 1, price: 8.99 },
      { name: "Garlic Bread", quantity: 2, price: 12.00 }
    ],
    total: 20.99,
    status: "pending",
    timestamp: "2024-01-15T14:35:00Z",
    progress: 25,
    orderTime: "Just now"
  }
];

const OrdersPage = () => {
  const [orders, setOrders] = useState(mockOrdersData);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'
  const [_loading, setLoading] = useState(false);
  const [_error, setError] = useState(null);
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      // TODO: API CALL - Fetch all orders
      // TODO: import apiService from '../../../services/apiService';
      // TODO: const response = await apiService.orders.getOrders();
      // TODO: setOrders(response.orders);
      
      // CURRENT: Mock data - remove when API is ready
      setOrders(mockOrdersData);
      setError(null);
    } catch (err) {
      // TODO: Handle API errors
      setError(err.message || 'Failed to fetch orders');
      console.error('Failed to fetch orders:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter orders based on selected status
  const filteredOrders = selectedStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedStatus);

  // Calculate order statistics
  const orderStats = {
    total: orders.length,
    completed: orders.filter(order => order.status === 'completed').length,
    pending: orders.filter(order => order.status === 'pending').length,
    preparing: orders.filter(order => order.status === 'preparing').length,
    ready: orders.filter(order => order.status === 'ready').length,
    cancelled: orders.filter(order => order.status === 'cancelled').length
  };

  // Update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      // TODO: API CALL - Update order status
      // TODO: import apiService from '../../../services/apiService';
      // TODO: await apiService.orders.updateOrderStatus(orderId, newStatus);
      
      // CURRENT: Mock update - remove when API is ready
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
      setError(null);
    } catch (err) {
      // TODO: Handle API errors
      setError(err.message || 'Failed to update order status');
      console.error('Failed to update order status:', err);
    }
  };

  // Add new order
  const addNewOrder = () => {
    setIsNewOrderModalOpen(true);
  };

  // Handle new order creation
  const handleOrderCreated = (newOrder) => {
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    setError(null);
  };

  // Print orders
  const printOrders = () => {
    window.print();
  };

  return (
    <div className=" md:p-2">
      {/* Orders Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
            <p className="text-gray-600">Manage and track all restaurant orders</p>
          </div>
          <OrderActions 
            onAddNewOrder={addNewOrder}
            onPrintOrders={printOrders}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>

        {/* Order Statistics */}
        <OrderStats stats={orderStats} />
      </div>

      {/* Order Filter Tabs */}
      <OrderFilterTabs 
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />

      {/* Orders Display */}
      {viewMode === 'grid' ? (
        <OrderCardsGrid 
          orders={filteredOrders}
          onStatusUpdate={updateOrderStatus}
        />
      ) : (
        <OrderTable 
          orders={filteredOrders}
          onStatusUpdate={updateOrderStatus}
        />
      )}

      {/* New Order Modal */}
      <NewOrderModal 
        isOpen={isNewOrderModalOpen}
        onClose={() => setIsNewOrderModalOpen(false)}
        onOrderCreated={handleOrderCreated}
      />
    </div>
  );
};

export default OrdersPage;
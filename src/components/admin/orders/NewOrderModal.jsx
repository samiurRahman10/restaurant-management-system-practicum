import { useState } from 'react';

// TODO: Uncomment when API is ready
// import apiService from '../../../services/apiService';

const NewOrderModal = ({ isOpen, onClose, onOrderCreated }) => {
  const [orderType, setOrderType] = useState('dine-in');
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    tableNumber: '',
    guests: '',
    address: '',
    items: [],
    specialInstructions: ''
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mock menu items for selection
  const availableItems = [
    { id: 1, name: 'Grilled Salmon', price: 32.00, category: 'Main Course' },
    { id: 2, name: 'Beef Burger', price: 18.00, category: 'Main Course' },
    { id: 3, name: 'Margherita Pizza', price: 24.00, category: 'Main Course' },
    { id: 4, name: 'Caesar Salad', price: 12.00, category: 'Salads' },
    { id: 5, name: 'Garlic Bread', price: 6.00, category: 'Appetizers' },
    { id: 6, name: 'French Fries', price: 8.00, category: 'Sides' },
    { id: 7, name: 'Chocolate Cake', price: 8.99, category: 'Desserts' },
    { id: 8, name: 'Soft Drinks', price: 6.00, category: 'Beverages' },
    { id: 9, name: 'Fresh Orange Juice', price: 5.00, category: 'Beverages' },
    { id: 10, name: 'Chocolate Shake', price: 12.00, category: 'Beverages' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddItem = (item) => {
    const existingItem = selectedItems.find(i => i.id === item.id);
    if (existingItem) {
      setSelectedItems(prev =>
        prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setSelectedItems(prev => [
        ...prev,
        { ...item, quantity: 1 }
      ]);
    }
  };

  const handleRemoveItem = (itemId) => {
    setSelectedItems(prev => prev.filter(i => i.id !== itemId));
  };

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(itemId);
    } else {
      setSelectedItems(prev =>
        prev.map(i =>
          i.id === itemId
            ? { ...i, quantity }
            : i
        )
      );
    }
  };

  const calculateTotal = () => {
    return selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate required fields
    if (!formData.customerName.trim()) {
      setError('Customer name is required');
      return;
    }
    if (selectedItems.length === 0) {
      setError('Please add at least one item to the order');
      return;
    }
    if (orderType === 'dine-in' && !formData.tableNumber) {
      setError('Table number is required for dine-in orders');
      return;
    }
    if (orderType === 'delivery' && !formData.address.trim()) {
      setError('Delivery address is required');
      return;
    }

    try {
      setLoading(true);
      
      // TODO: API CALL - Create new order
      // TODO: import apiService from '../../../services/apiService';
      // Uncomment the line below when backend is ready:
      // const response = await apiService.orders.createOrder({
      //   customerName: formData.customerName,
      //   phone: formData.phone,
      //   email: formData.email,
      //   type: orderType,
      //   tableNumber: orderType === 'dine-in' ? formData.tableNumber : null,
      //   guests: orderType === 'dine-in' ? formData.guests : null,
      //   address: orderType === 'delivery' ? formData.address : null,
      //   items: selectedItems,
      //   specialInstructions: formData.specialInstructions,
      //   total: calculateTotal()
      // });

      // CURRENT: Mock order creation - remove when API is ready
      const newOrder = {
        id: Math.floor(Math.random() * 10000),
        customerName: formData.customerName,
        phone: formData.phone,
        email: formData.email,
        type: orderType,
        tableNumber: orderType === 'dine-in' ? parseInt(formData.tableNumber) : null,
        guests: orderType === 'dine-in' ? parseInt(formData.guests) : null,
        address: orderType === 'delivery' ? formData.address : null,
        items: selectedItems,
        specialInstructions: formData.specialInstructions,
        total: parseFloat(calculateTotal()),
        status: 'pending',
        timestamp: new Date().toISOString(),
        progress: 0,
        orderTime: 'Just now'
      };

      onOrderCreated(newOrder);
      resetForm();
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to create order');
      console.error('Error creating order:', err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      customerName: '',
      phone: '',
      email: '',
      tableNumber: '',
      guests: '',
      address: '',
      items: [],
      specialInstructions: ''
    });
    setSelectedItems([]);
    setOrderType('dine-in');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white flex justify-between items-center">
          <h2 className="text-2xl font-bold">Create New Order</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <i className="fas fa-exclamation-circle mr-2"></i> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Type Selection */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Order Type</label>
              <div className="grid grid-cols-3 gap-3">
                {['dine-in', 'takeaway', 'delivery'].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setOrderType(type)}
                    className={`p-3 rounded-lg text-center capitalize transition-all ${
                      orderType === type
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
                    }`}
                  >
                    <i className={`fas fa-${type === 'dine-in' ? 'utensils' : type === 'takeaway' ? 'shopping-bag' : 'truck'} mr-1`}></i>
                    {type.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Information */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Customer Information</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="customerName"
                  placeholder="Customer Name *"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white"
                />
              </div>
            </div>

            {/* Order Specific Details */}
            {orderType === 'dine-in' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Dine-In Details</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    name="tableNumber"
                    placeholder="Table Number *"
                    value={formData.tableNumber}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white"
                    required
                  />
                  <input
                    type="number"
                    name="guests"
                    placeholder="Number of Guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white"
                  />
                </div>
              </div>
            )}

            {orderType === 'delivery' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Delivery Details</label>
                <textarea
                  name="address"
                  placeholder="Delivery Address *"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  required
                ></textarea>
              </div>
            )}

            {/* Items Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Select Items</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-gray-50 rounded-lg border border-gray-200">
                {availableItems.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleAddItem(item)}
                    className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-orange-50 hover:border-orange-500 transition-all text-left"
                  >
                    <div className="text-sm font-medium text-gray-800">{item.name}</div>
                    <div className="text-xs text-gray-600">${item.price.toFixed(2)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Items */}
            {selectedItems.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Order Items ({selectedItems.length})</label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 grid grid-cols-5 gap-2 p-3 text-xs font-semibold text-gray-700">
                    <div>Item</div>
                    <div className="text-center">Price</div>
                    <div className="text-center">Qty</div>
                    <div className="text-right">Total</div>
                    <div className="text-center">Action</div>
                  </div>
                  {selectedItems.map(item => (
                    <div key={item.id} className="grid grid-cols-5 gap-2 p-3 border-t border-gray-200 items-center">
                      <div className="text-sm text-gray-800">{item.name}</div>
                      <div className="text-sm text-gray-800 text-center">${item.price.toFixed(2)}</div>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-12 px-2 py-1 text-sm border border-gray-300 rounded text-center focus:outline-none focus:border-orange-500"
                      />
                      <div className="text-sm text-gray-800 text-right">${(item.price * item.quantity).toFixed(2)}</div>
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors text-center"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  ))}
                  <div className="bg-orange-50 grid grid-cols-5 gap-2 p-3 border-t border-gray-200 font-semibold">
                    <div></div>
                    <div></div>
                    <div className="text-center">Total:</div>
                    <div className="text-right text-orange-600">${calculateTotal()}</div>
                    <div></div>
                  </div>
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Special Instructions</label>
              <textarea
                name="specialInstructions"
                placeholder="Any special requests or instructions..."
                value={formData.specialInstructions}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">
                      <i className="fas fa-spinner"></i>
                    </span>
                    Creating...
                  </>
                ) : (
                  <>
                    <i className="fas fa-check"></i>
                    Create Order
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewOrderModal;

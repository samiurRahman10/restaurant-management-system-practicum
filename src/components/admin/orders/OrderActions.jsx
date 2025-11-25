const OrderActions = ({ onAddNewOrder, onPrintOrders, viewMode, onViewModeChange }) => {
  return (
    <div className="flex space-x-3 mt-4 md:mt-0">
      {/* View Mode Toggle */}
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => onViewModeChange('grid')}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            viewMode === 'grid'
              ? 'bg-white text-orange-500 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <i className="fas fa-th-large mr-1"></i> Grid
        </button>
        <button
          onClick={() => onViewModeChange('table')}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            viewMode === 'table'
              ? 'bg-white text-orange-500 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <i className="fas fa-table mr-1"></i> Table
        </button>
      </div>

      {/* Action Buttons */}
      <button
        onClick={onAddNewOrder}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <i className="fas fa-plus"></i> New Order
      </button>
      <button
        onClick={onPrintOrders}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <i className="fas fa-print"></i> Print Orders
      </button>
    </div>
  );
};

export default OrderActions;
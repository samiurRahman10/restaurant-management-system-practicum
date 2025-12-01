const MenuHeader = ({ stats, onAddNewItem }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Menu Management</h1>
          <p className="text-gray-600">Manage your restaurant menu items and POS orders</p>
        </div>
        <div className="grid grid-cols-1 mt-2 md:mt-0 md:grid-cols-2 gap-2 ">
          <button 
            onClick={onAddNewItem}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <i className="fas fa-plus"></i> Add New Item
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <i className="fas fa-download"></i> Export Menu
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
          <div className="text-sm text-gray-600">Total Items</div>
          <div className="text-2xl font-bold text-black">{stats.totalItems}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
          <div className="text-sm text-gray-600">Categories</div>
          <div className="text-2xl font-bold text-black">{stats.totalCategories}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
          <div className="text-sm text-gray-600">Available</div>
          <div className="text-2xl font-bold text-black">{stats.availableItems}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
          <div className="text-sm text-gray-600">Out of Stock</div>
          <div className="text-2xl font-bold text-black">{stats.outOfStock}</div>
        </div>
      </div>

      
    </div>
  );
};

export default MenuHeader;
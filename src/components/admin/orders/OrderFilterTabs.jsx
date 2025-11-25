const OrderFilterTabs = ({ selectedStatus, onStatusChange }) => {
  const statusTabs = [
    { id: 'all', label: 'All Orders', count: null },
    { id: 'pending', label: 'Pending', count: null },
    { id: 'preparing', label: 'Preparing', count: null },
    { id: 'ready', label: 'Ready', count: null },
    { id: 'completed', label: 'Completed', count: null }
  ];

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="border-b border-gray-200">
        <nav className="">
          {statusTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onStatusChange(tab.id)}
              className={`flex-1 py-4 px-6 text-center border-b-2 font-medium transition-colors ${
                selectedStatus === tab.id
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {tab.count !== null && (
                <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default OrderFilterTabs;
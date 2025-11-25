const QuickActions = ({ searchQuery, setSearchQuery }) => {
  const quickActions = [
    {
      label: "Quick Order",
      icon: "fas fa-bolt",
      color: "bg-purple-500 hover:bg-purple-600",
      description: "Fast order entry"
    },
    {
      label: "Split Bill",
      icon: "fas fa-receipt",
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Divide bill multiple ways"
    },
    {
      label: "Print Receipt",
      icon: "fas fa-print",
      color: "bg-green-500 hover:bg-green-600",
      description: "Print current order"
    },
    {
      label: "Hold Order",
      icon: "fas fa-pause",
      color: "bg-yellow-500 hover:bg-yellow-600",
      description: "Temporarily hold order"
    }
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">POS Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-105`}
          >
            <i className={`${action.icon} text-xl`}></i>
            <span className="font-semibold text-sm">{action.label}</span>
            <span className="text-xs opacity-90">{action.description}</span>
          </button>
        ))}
      </div>
       {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-4 mt-4">
        <div className="relative">
          <input 
            type="text"
            placeholder="Search menu items by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-black"
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" 
            fill="none"
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
    
  );
};

export default QuickActions;
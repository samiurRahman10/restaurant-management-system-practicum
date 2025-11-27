const Header = ({ setSidebarOpen }) => {
  return (
    <header className="h-16 py-4 flex items-center justify-between px-4 md:px-6 bg-white shadow-sm">
      <div className="flex items-center space-x-4 flex-1">
        {/* Mobile toggle button */}
        <button 
          onClick={() => setSidebarOpen(true)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 text-black"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Search bar */}
        <div className="relative flex-1 max-w-md lg:max-w-lg">
          <input 
            type="text" 
            placeholder="Search menus, orders, customers..."
            className="pl-10 pr-4 py-2.5 w-full border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
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

      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Notifications */}
        <button className="text-gray-600 hover:text-orange-500 relative">
          <i className="fas fa-bell text-xl"></i>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 items-center justify-center text-white text-[9px]">3</span>
          </span>
        </button>

        {/* User profile - desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-sm">
            AD
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-800">Admin User</div>
            <div className="text-xs text-gray-600">Administrator</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
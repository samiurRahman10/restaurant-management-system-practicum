import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-chart-line', path: '/admin/dashboard' },
        { id: 'menu', label: 'Menu', icon: 'fas fa-utensils', path: '/admin/menu' },
        { id: 'orders', label: 'Orders', icon: 'fas fa-shopping-basket', path: '/admin/orders' },
        { id: 'inventory', label: 'Inventory', icon: 'fas fa-boxes', path: '/admin/inventory' },
        { id: 'reports', label: 'Reports', icon: 'fas fa-chart-bar', path: '/admin/reports' },
        { id: 'settings', label: 'Settings', icon: 'fas fa-cog', path: '/admin/settings' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <aside className={`fixed h-full w-64 bg-white text-black shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col sidebar-scroll z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0`}>
            <div className="flex items-center justify-center p-6">
                <h1 className="text-3xl font-bold text-orange-500">DineSmart</h1>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-4 text-gray-700 text-sm overflow-y-auto">
                {menuItems.map(item => (
                    <Link
                        key={item.id}
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md w-full text-left font-semibold transition-colors ${isActive(item.path)
                                ? 'bg-orange-100 text-orange-500 font-bold'
                                : 'hover:bg-gray-100 text-gray-700 font-semibold'
                            }`}
                    >
                        <i className={`${item.icon} w-5`}></i>
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                        AD
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-800">Admin User</div>
                        <div className="text-xs text-gray-600">Administrator</div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
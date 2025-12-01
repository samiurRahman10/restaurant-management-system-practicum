/**
 * API Service Module - apiService.js
 * ===================================
 * Ready for backend API integration
 * Currently uses dummy data
 * Replace BASE_URL and API calls when backend is ready
 */

// Configuration
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const API_TIMEOUT = 30000;

// Helper function for API calls
const apiCall = async (method, endpoint, data = null) => {
  try {
    const token = localStorage.getItem('token');
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      timeout: API_TIMEOUT
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// ============================================
// AUTHENTICATION SERVICES
// ============================================

export const authService = {
  login: (email, password) => {
    // TODO: Replace with real API call
    // return apiCall('POST', '/auth/login', { email, password });
    return Promise.resolve({
      success: true,
      token: 'mock-token-' + Date.now(),
      user: { id: 1, email, restaurantName: 'My Restaurant' }
    });
  },

  register: (restaurantData) => {
    // TODO: Replace with real API call
    // return apiCall('POST', '/auth/register', restaurantData);
    return Promise.resolve({
      success: true,
      token: 'mock-token-' + Date.now(),
      user: { id: 1, email: restaurantData.email, restaurantName: restaurantData.restaurantName }
    });
  },

  forgotPassword: (email) => {
    // TODO: Replace with real API call
    // return apiCall('POST', '/auth/forgot-password', { email });
    return Promise.resolve({
      success: true,
      message: 'Reset code sent to email'
    });
  },

  resetPassword: (email, resetCode, newPassword) => {
    // TODO: Replace with real API call
    // return apiCall('POST', '/auth/reset-password', { email, resetCode, newPassword });
    return Promise.resolve({
      success: true,
      message: 'Password reset successful'
    });
  }
};

// ============================================
// DASHBOARD SERVICES
// ============================================

export const dashboardService = {
  getStats: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/dashboard/stats');
    return Promise.resolve({
      totalRevenue: 24800,
      activeOrders: 2,
      occupiedTables: { current: 1, total: 6 },
      pendingTasks: 7
    });
  },

  getRevenueChart: (period = 'weekly') => {
    // TODO: Replace with real API call
    // return apiCall('GET', `/dashboard/revenue-chart?period=${period}`);
    return Promise.resolve({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490]
    });
  },

  getPopularItems: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/dashboard/popular-items');
    return Promise.resolve([
      { id: 1, name: 'Grilled Salmon', sales: 45, revenue: 1440 },
      { id: 2, name: 'Beef Burger', sales: 78, revenue: 1404 },
      { id: 3, name: 'Caesar Salad', sales: 32, revenue: 384 },
      { id: 4, name: 'Chocolate Cake', sales: 55, revenue: 494 }
    ]);
  },

  getRecentActivities: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/dashboard/recent-activities');
    return Promise.resolve([
      { id: 1, activity: 'Order #1245 completed', timestamp: '2 mins ago', type: 'order' },
      { id: 2, activity: 'Inventory updated: Salmon Fillet', timestamp: '15 mins ago', type: 'inventory' },
      { id: 3, activity: 'Staff checked in: John Doe', timestamp: '1 hour ago', type: 'staff' }
    ]);
  },

  getRecentOrders: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/dashboard/recent-orders');
    return Promise.resolve([
      { id: 1245, customerName: 'Customer One', total: 50.00, status: 'completed', time: '2 mins ago' },
      { id: 1246, customerName: 'John Doe', total: 38.00, status: 'preparing', time: '15 mins ago' }
    ]);
  },

  getLowStockAlerts: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/dashboard/low-stock-alerts');
    return Promise.resolve([
      { id: 1, name: 'Salmon Fillet', currentStock: 5, reorderLevel: 10 },
      { id: 2, name: 'Truffle Oil', currentStock: 3, reorderLevel: 5 }
    ]);
  },

  getAnalytics: (type = 'sales') => {
    // TODO: Replace with real API call
    // return apiCall('GET', `/dashboard/analytics?type=${type}`);
    return Promise.resolve({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: type.charAt(0).toUpperCase() + type.slice(1),
          data: [65, 59, 80, 81, 56, 55],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.1)'
        }
      ]
    });
  }
};

// ============================================
// ORDERS SERVICES
// ============================================

export const ordersService = {
  getOrders: (status = 'all') => {
    // TODO: Replace with real API call
    // return apiCall('GET', `/orders?status=${status}`);
    return Promise.resolve([]);
  },

  createOrder: (orderData) => {
    // TODO: Replace with real API call
    // return apiCall('POST', '/orders', orderData);
    return Promise.resolve({ success: true, orderId: 1250 });
  },

  updateOrderStatus: (orderId, status) => {
    // TODO: Replace with real API call
    // return apiCall('PATCH', `/orders/${orderId}/status`, { status });
    return Promise.resolve({ success: true });
  },

  getOrderStats: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/orders/stats');
    return Promise.resolve({
      total: 5,
      completed: 1,
      pending: 2,
      preparing: 1,
      ready: 1,
      cancelled: 0
    });
  }
};

// ============================================
// INVENTORY SERVICES
// ============================================

export const inventoryService = {
  getInventory: (filters = {}) => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/inventory?' + new URLSearchParams(filters));
    return Promise.resolve([]);
  },

  createInventoryItem: (itemData) => {
    // TODO: Replace with real API call
    // return apiCall('POST', '/inventory', itemData);
    return Promise.resolve({ success: true, itemId: 100 });
  },

  updateInventoryItem: (itemId, itemData) => {
    // TODO: Replace with real API call
    // return apiCall('PATCH', `/inventory/${itemId}`, itemData);
    return Promise.resolve({ success: true });
  },

  deleteInventoryItem: (itemId) => {
    // TODO: Replace with real API call
    // return apiCall('DELETE', `/inventory/${itemId}`);
    return Promise.resolve({ success: true });
  },

  getInventoryStats: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/inventory/stats');
    return Promise.resolve({
      totalItems: 50,
      lowStockCount: 4,
      outOfStock: 0,
      totalValue: 15000
    });
  },

  getLowStockItems: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/inventory/low-stock');
    return Promise.resolve([]);
  }
};

// ============================================
// MENU SERVICES
// ============================================

export const menuService = {
  getMenu: (filters = {}) => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/menu?' + new URLSearchParams(filters));
    return Promise.resolve([]);
  },

  createMenuItem: (menuData) => {
    // TODO: Replace with real API call
    // return apiCall('POST', '/menu', menuData);
    return Promise.resolve({ success: true, itemId: 200 });
  },

  updateMenuItem: (itemId, menuData) => {
    // TODO: Replace with real API call
    // return apiCall('PATCH', `/menu/${itemId}`, menuData);
    return Promise.resolve({ success: true });
  },

  deleteMenuItem: (itemId) => {
    // TODO: Replace with real API call
    // return apiCall('DELETE', `/menu/${itemId}`);
    return Promise.resolve({ success: true });
  },

  getCategories: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/menu/categories');
    return Promise.resolve(['Main Course', 'Appetizers', 'Desserts', 'Beverages']);
  }
};

// ============================================
// REPORTS SERVICES
// ============================================

export const reportsService = {
  getSalesReport: (filters = {}) => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/reports/sales?' + new URLSearchParams(filters));
    return Promise.resolve({
      totalSales: 50000,
      averageOrderValue: 45.50,
      totalOrders: 1098,
      chartData: { labels: [], data: [] }
    });
  },

  getInventoryReport: (filters = {}) => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/reports/inventory?' + new URLSearchParams(filters));
    return Promise.resolve({
      totalItems: 50,
      lowStockItems: 4,
      wasteage: 250,
      items: []
    });
  },

  getFinancialReport: (filters = {}) => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/reports/financial?' + new URLSearchParams(filters));
    return Promise.resolve({
      totalRevenue: 50000,
      totalExpenses: 25000,
      profit: 25000,
      breakdown: {}
    });
  },

  getReportStats: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/reports/stats');
    return Promise.resolve({
      totalRevenue: 50000,
      totalOrders: 1098,
      totalCustomers: 450
    });
  }
};

// ============================================
// SETTINGS SERVICES
// ============================================

export const settingsService = {
  getSettings: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/settings');
    return Promise.resolve({
      restaurantName: 'My Restaurant',
      email: 'contact@restaurant.com',
      phone: '+1234567890',
      address: '123 Main St',
      timezone: 'UTC-5',
      currency: 'USD',
      theme: 'light'
    });
  },

  updateSettings: (settingsData) => {
    // TODO: Replace with real API call
    // return apiCall('PATCH', '/settings', settingsData);
    return Promise.resolve({ success: true });
  },

  getUsers: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/settings/users');
    return Promise.resolve([]);
  },

  getTables: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/settings/tables');
    return Promise.resolve([]);
  },

  getPaymentMethods: () => {
    // TODO: Replace with real API call
    // return apiCall('GET', '/settings/payment-methods');
    return Promise.resolve([]);
  }
};

// ============================================
// EXPORT ALL SERVICES
// ============================================

export default {
  auth: authService,
  dashboard: dashboardService,
  orders: ordersService,
  inventory: inventoryService,
  menu: menuService,
  reports: reportsService,
  settings: settingsService
};

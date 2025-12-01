# API Integration Checklist

## Overview
This document tracks all pages and components that need API integration. Dummy data is already in place.

---

## 1. AUTHENTICATION PAGES

### LoginPage (`src/pages/LoginPage.jsx`)
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `POST /api/auth/login`
- **Current Mock**: localStorage mock auth
- **Integration Point**: `handleSubmit` function (line 18)
- **Dummy Data Structure**:
  ```
  Email: any string
  Password: min 6 characters
  ```
- **Expected Response**:
  ```json
  {
    "success": true,
    "token": "jwt-token",
    "user": {
      "id": 1,
      "email": "user@email.com",
      "restaurantName": "Restaurant Name"
    }
  }
  ```
- **Replace With**: `apiService.auth.login(email, password)`

---

### RegistrationPage (`src/pages/RegistrationPage.jsx`)
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `POST /api/auth/register`
- **Current Mock**: localStorage mock registration
- **Integration Point**: `handleSubmit` function (line 57)
- **Dummy Data Structure**:
  ```
  restaurantName: string
  ownerName: string
  email: string
  phone: string
  password: string (min 6 chars)
  address: string
  ```
- **Replace With**: `apiService.auth.register(formData)`

---

### ForgotPasswordPage (`src/pages/ForgotPasswordPage.jsx`)
- **Status**: ✅ Dummy data ready
- **API Endpoints**: 
  - `POST /api/auth/forgot-password` (Step 1)
  - `POST /api/auth/reset-password` (Step 2)
- **Current Mock**: Mock email sending and code validation
- **Integration Points**: 
  - `handleEmailSubmit` (line 25)
  - `handlePasswordReset` (line 47)
- **Replace With**:
  - `apiService.auth.forgotPassword(email)`
  - `apiService.auth.resetPassword(email, resetCode, newPassword)`

---

## 2. DASHBOARD PAGES

### DashboardPage & Components (`src/components/admin/dashboard/`)

#### StatsCards.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/dashboard/stats`
- **Current Mock Data** (lines 1-18):
  ```javascript
  stats = [
    { title: "Total Revenue", value: "$24,800", ... },
    { title: "Active Orders", value: "2", ... },
    { title: "Occupied Tables", value: "1/6", ... },
    { title: "Pending Tasks", value: "7", ... }
  ]
  ```
- **Replace With**: `apiService.dashboard.getStats()`

#### RevenueChart.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/dashboard/revenue-chart`
- **Current Mock Data**: 7-day data array
- **Replace With**: `apiService.dashboard.getRevenueChart(period)`

#### PopularItems.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/dashboard/popular-items`
- **Current Mock Data**: Top 4 selling items
- **Replace With**: `apiService.dashboard.getPopularItems()`

#### RecentActivities.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/dashboard/recent-activities`
- **Current Mock Data**: Activity log entries
- **Replace With**: `apiService.dashboard.getRecentActivities()`

#### RecentOrders.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/dashboard/recent-orders`
- **Current Mock Data**: Last 5 orders
- **Replace With**: `apiService.dashboard.getRecentOrders()`

#### LowStockAlert.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/dashboard/low-stock-alerts`
- **Current Mock Data**: Low stock items
- **Replace With**: `apiService.dashboard.getLowStockAlerts()`

#### AnalyticsSection.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/dashboard/analytics?type={sales|orders|customers}`
- **Current Mock Data**: Chart data structure
- **Replace With**: `apiService.dashboard.getAnalytics(type)`

---

## 3. ORDERS PAGES

### OrdersPage & Components (`src/components/admin/orders/`)

#### OrdersPage.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoints**:
  - `GET /api/orders?status={status}` - Main fetch
  - `PATCH /api/orders/:id/status` - Update status
- **Current Mock Data** (lines 3-69): 5 sample orders with all fields
- **Replace With**: `apiService.orders.getOrders(status)` and `apiService.orders.updateOrderStatus(orderId, status)`

#### OrderStats.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/orders/stats`
- **Replace With**: `apiService.orders.getOrderStats()`

#### OrderCard.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `PATCH /api/orders/:id/status`
- **Replace With**: `apiService.orders.updateOrderStatus(orderId, status)`

#### OrderActions.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoints**: Order CRUD operations
- **Replace With**: Appropriate apiService calls

---

## 4. INVENTORY PAGES

### InventoryPage & Components (`src/components/admin/inventory/`)

#### InventoryPage.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoints**:
  - `GET /api/inventory?filters` - Fetch all items
  - `POST /api/inventory` - Add item
  - `PATCH /api/inventory/:id` - Update item
  - `DELETE /api/inventory/:id` - Delete item
- **Current Mock Data** (lines 20-88): 10+ inventory items
- **Replace With**: `apiService.inventory.*` methods

#### InventoryStats.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/inventory/stats`
- **Replace With**: `apiService.inventory.getInventoryStats()`

#### LowStocksAlerts.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `GET /api/inventory/low-stock`
- **Replace With**: `apiService.inventory.getLowStockItems()`

#### AddItemModal.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `POST /api/inventory`
- **Replace With**: `apiService.inventory.createInventoryItem(itemData)`

#### EditItemModal.jsx
- **Status**: ✅ Dummy data ready
- **API Endpoint**: `PATCH /api/inventory/:id`
- **Replace With**: `apiService.inventory.updateInventoryItem(itemId, itemData)`

---

## 5. MENU PAGES

### MenuPage & Components (`src/components/admin/menu/`)

#### MenuPage.jsx
- **Status**: ✅ Ready for integration
- **API Endpoints**:
  - `GET /api/menu` - Fetch menu
  - `POST /api/menu` - Add item
  - `PATCH /api/menu/:id` - Update item
  - `DELETE /api/menu/:id` - Delete item
- **Replace With**: `apiService.menu.*` methods

#### CategoryFilter.jsx
- **Status**: ✅ Ready for integration
- **API Endpoint**: `GET /api/menu/categories`
- **Replace With**: `apiService.menu.getCategories()`

---

## 6. REPORTS PAGES

### ReportsPage & Components (`src/components/admin/reports/`)

#### SalesReport.jsx
- **Status**: ✅ Ready for integration
- **API Endpoint**: `GET /api/reports/sales?startDate&endDate&reportType`
- **Replace With**: `apiService.reports.getSalesReport(filters)`

#### InventoryReport.jsx
- **Status**: ✅ Ready for integration
- **API Endpoint**: `GET /api/reports/inventory?startDate&endDate&category`
- **Replace With**: `apiService.reports.getInventoryReport(filters)`

#### FinancialReport.jsx
- **Status**: ✅ Ready for integration
- **API Endpoint**: `GET /api/reports/financial?startDate&endDate`
- **Replace With**: `apiService.reports.getFinancialReport(filters)`

#### ReportStats.jsx
- **Status**: ✅ Ready for integration
- **API Endpoint**: `GET /api/reports/stats`
- **Replace With**: `apiService.reports.getReportStats()`

#### ReportFilters.jsx
- **Status**: ✅ Ready for integration
- **Functionality**: Date range, report type, category filtering
- **No direct API call** - Used by parent components

---

## 7. SETTINGS PAGES

### SettingsPage (`src/components/admin/settings/SettingsPage.jsx`)
- **Status**: ✅ Dummy data ready
- **API Endpoints**:
  - `GET /api/settings` - Fetch current settings
  - `PATCH /api/settings` - Update settings
  - `GET /api/settings/users` - Get users
  - `GET /api/settings/tables` - Get table config
  - `GET /api/settings/payment-methods` - Get payment methods
- **Replace With**: `apiService.settings.*` methods

---

## Integration Steps

1. **Install Axios or Keep Fetch API** (Already using Fetch in apiService)
   ```bash
   # Already ready with native Fetch API
   ```

2. **Update Environment Variables**
   Create `.env` file in project root:
   ```
   REACT_APP_API_URL=http://your-backend-url/api
   ```

3. **Replace Mock Data in Each Page**
   - Import: `import apiService from '../services/apiService'`
   - Replace: `const data = await apiService.category.method()`
   - Add error handling and loading states

4. **Update LoginPage to Store Token**
   ```javascript
   const { token, user } = await apiService.auth.login(email, password);
   localStorage.setItem('token', token);
   ```

5. **Test Each Endpoint**
   - Use Postman or similar tool
   - Verify request/response formats
   - Check error handling

---

## Quick Integration Template

```javascript
import { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const ComponentName = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiService.category.method();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{/* Render data */}</div>;
};

export default ComponentName;
```

---

## Summary

- **Total Pages**: 4
- **Total Components**: 30+
- **Total API Endpoints**: 35+
- **Dummy Data**: ✅ Ready
- **Mock Services**: ✅ Created in `src/services/apiService.js`
- **Status**: Ready for backend integration

All code is ready - just replace mock data with real API calls!

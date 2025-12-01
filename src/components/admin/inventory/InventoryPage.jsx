import React, { useState, useEffect } from 'react';
import InventoryStats from './InventoryStats';
import SearchFilterBar from './SearchFilterBar';
import InventoryTable from './InventoryTable';
import LowStocksAlerts from './LowStocksAlerts';
import AddItemModal from './AddItemModal';
import EditItemModal from './EditItemModal';
import Notification from './Notification';

// CURRENT: Mock inventory data - remove when API is ready
const mockInventoryData = [
      {
        id: 1,
        name: "Salmon Fillet",
        category: "meat",
        currentStock: 5,
        unit: "kg",
        reorderLevel: 10,
        supplier: "Ocean Fresh Co.",
        status: "low_stock"
      },
      {
        id: 2,
        name: "Truffle Oil",
        category: "spices",
        currentStock: 3,
        unit: "L",
        reorderLevel: 5,
        supplier: "Gourmet Imports",
        status: "low_stock"
      },
      {
        id: 3,
        name: "Parmesan Cheese",
        category: "dairy",
        currentStock: 2,
        unit: "kg",
        reorderLevel: 5,
        supplier: "Italian Delights",
        status: "low_stock"
      },
      {
        id: 4,
        name: "Fresh Basil",
        category: "vegetables",
        currentStock: 0.1,
        unit: "kg",
        reorderLevel: 0.5,
        supplier: "Local Farm",
        status: "low_stock"
      },
      {
        id: 5,
        name: "Beef Patties",
        category: "meat",
        currentStock: 25,
        unit: "kg",
        reorderLevel: 10,
        supplier: "Prime Meats",
        status: "in_stock"
      },
      {
        id: 6,
        name: "Lettuce",
        category: "vegetables",
        currentStock: 8,
        unit: "kg",
        reorderLevel: 5,
        supplier: "Green Valley Farms",
        status: "in_stock"
      },
      {
        id: 7,
        name: "Tomatoes",
        category: "vegetables",
        currentStock: 12,
        unit: "kg",
        reorderLevel: 8,
        supplier: "Sunshine Produce",
        status: "in_stock"
      },
      {
        id: 8,
        name: "Cooking Oil",
        category: "other",
        currentStock: 15,
        unit: "L",
        reorderLevel: 5,
        supplier: "Chef's Choice",
        status: "in_stock"
      },
      {
        id: 9,
        name: "Mozzarella Cheese",
        category: "dairy",
        currentStock: 0,
        unit: "kg",
        reorderLevel: 8,
        supplier: "Italian Delights",
        status: "out_of_stock"
      },
      {
        id: 10,
        name: "Orange Juice",
        category: "beverages",
        currentStock: 24,
        unit: "bottles",
        reorderLevel: 12,
        supplier: "Fresh Squeezed Co.",
        status: "in_stock"
      }
];

const InventoryPage = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [isLoading, setIsLoading] = useState(true);

  const fetchInventory = async () => {
    try {
      setIsLoading(true);
      // TODO: API CALL - Get all inventory items
      // TODO: import apiService from '../../../services/apiService';
      // TODO: const response = await apiService.inventory.getInventory();
      // TODO: setInventoryItems(response.items);
      // TODO: setFilteredItems(response.items);
      
      // CURRENT: Mock data - remove when API is ready
      setInventoryItems(mockInventoryData);
      setFilteredItems(mockInventoryData);
      setIsLoading(false);
    } catch (err) {
      // TODO: Handle API errors
      console.error('Failed to fetch inventory:', err);
      setIsLoading(false);
    }
  };

  // Initialize inventory with TODO for API
  useEffect(() => {
    fetchInventory();
  }, []);

  const saveInventoryToStorage = (items) => {
    localStorage.setItem('dinesmart_inventory', JSON.stringify(items));
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const filterInventory = (searchTerm = '', categoryFilter = 'all', statusFilter = 'all') => {
    const filtered = inventoryItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });

    setFilteredItems(filtered);
  };

  const updateItemStatus = (item) => {
    const status = item.currentStock === 0 
      ? 'out_of_stock' 
      : item.currentStock <= item.reorderLevel 
        ? 'low_stock' 
        : 'in_stock';
    
    return { ...item, status };
  };

  const handleAddItem = (newItemData) => {
    const newItem = {
      id: Date.now(),
      ...newItemData
    };

    const updatedItem = updateItemStatus(newItem);
    const updatedItems = [...inventoryItems, updatedItem];
    
    setInventoryItems(updatedItems);
    setFilteredItems(updatedItems);
    saveInventoryToStorage(updatedItems);
    setShowAddModal(false);
    showNotification('Item added successfully!', 'success');
  };

  const handleEditItem = (updatedItemData) => {
    const updatedItems = inventoryItems.map(item => 
      item.id === editingItem.id 
        ? updateItemStatus({ ...item, ...updatedItemData })
        : item
    );

    setInventoryItems(updatedItems);
    setFilteredItems(updatedItems);
    saveInventoryToStorage(updatedItems);
    setShowEditModal(false);
    setEditingItem(null);
    showNotification('Item updated successfully!', 'success');
  };

  const openEditItemModal = (item) => {
    setEditingItem(item);
    setShowEditModal(true);
  };

  const updateStock = (itemId, change) => {
    const updatedItems = inventoryItems.map(item => {
      if (item.id === itemId) {
        const newStock = Math.max(0, item.currentStock + change);
        const updatedItem = { ...item, currentStock: newStock };
        return updateItemStatus(updatedItem);
      }
      return item;
    });

    const itemName = inventoryItems.find(item => item.id === itemId)?.name;
    
    setInventoryItems(updatedItems);
    setFilteredItems(updatedItems);
    saveInventoryToStorage(updatedItems);
    showNotification(`Stock updated for ${itemName}`, 'success');
  };

  const deleteItem = (itemId) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    const updatedItems = inventoryItems.filter(item => item.id !== itemId);
    setInventoryItems(updatedItems);
    setFilteredItems(updatedItems);
    saveInventoryToStorage(updatedItems);
    showNotification('Item deleted successfully!', 'success');
  };

  const reorderItem = (itemId) => {
    const item = inventoryItems.find(i => i.id === itemId);
    if (!item) return;

    showNotification(`Reorder request sent for ${item.name} to ${item.supplier}`, 'info');
  };

  const exportInventory = () => {
    const dataStr = JSON.stringify(inventoryItems, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'inventory-export.json';
    link.click();
    
    showNotification('Inventory exported successfully!', 'success');
  };

  const refreshInventory = () => {
    initializeInventory();
    showNotification('Inventory refreshed!', 'success');
  };

  if (isLoading) {
    return (
      <div className="page-content p-4 md:p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading inventory...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content  md:p-2">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
            <p className="text-gray-600">Manage your restaurant inventory and track stock levels</p>
          </div>
          <div className="grid grid-cols-1 mt-2 md:mt-0 md:grid-cols-3 gap-2">
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <i className="fas fa-plus"></i> Add New Item
            </button>
            <button 
              onClick={exportInventory}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <i className="fas fa-download"></i> Export Inventory
            </button>
            <button 
              onClick={refreshInventory}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <i className="fas fa-sync"></i> Refresh
            </button>
          </div>
        </div>

        <InventoryStats inventoryItems={inventoryItems} />
      </div>

      <SearchFilterBar onFilter={filterInventory} />
      
      <InventoryTable 
        items={filteredItems}
        onEdit={openEditItemModal}
        onUpdateStock={updateStock}
        onDelete={deleteItem}
      />

      <LowStocksAlerts 
        inventoryItems={inventoryItems}
        onReorder={reorderItem}
      />

      {showAddModal && (
        <AddItemModal 
          onClose={() => setShowAddModal(false)}
          onSave={handleAddItem}
        />
      )}

      {showEditModal && editingItem && (
        <EditItemModal 
          item={editingItem}
          onClose={() => {
            setShowEditModal(false);
            setEditingItem(null);
          }}
          onSave={handleEditItem}
        />
      )}

      {notification.show && (
        <Notification 
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ show: false, message: '', type: '' })}
        />
      )}
    </div>
  );
};

export default InventoryPage;
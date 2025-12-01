import React, { useState } from 'react';

const EditItemModal = ({ item, onClose, onSave }) => {
  // Initialize formData directly from the item prop using function initializer
  const [formData, setFormData] = useState(() => {
    if (item) {
      return {
        name: item.name || '',
        category: item.category || '',
        currentStock: item.currentStock || '',
        unit: item.unit || '',
        reorderLevel: item.reorderLevel || '',
        supplier: item.supplier || ''
      };
    }
    return {
      name: '',
      category: '',
      currentStock: '',
      unit: '',
      reorderLevel: '',
      supplier: ''
    };
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      setError(null);

      // TODO: API CALL - Update inventory item
      // TODO: import apiService from '../../../services/apiService';
      // TODO: await apiService.inventory.updateInventoryItem(item.id, {
      // TODO:   ...formData,
      // TODO:   currentStock: parseFloat(formData.currentStock),
      // TODO:   reorderLevel: parseFloat(formData.reorderLevel)
      // TODO: });

      // CURRENT: Mock save - remove when API is ready
      onSave({
        ...formData,
        currentStock: parseFloat(formData.currentStock),
        reorderLevel: parseFloat(formData.reorderLevel)
      });
    } catch (err) {
      // TODO: Handle API errors
      setError(err.message || 'Failed to update item');
      console.error('Failed to update inventory item:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto mx-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-black">Edit Inventory Item</h3>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              type="button"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Name
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2  bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              >
                <option value="vegetables">Vegetables</option>
                <option value="meat">Meat & Poultry</option>
                <option value="dairy">Dairy</option>
                <option value="beverages">Beverages</option>
                <option value="spices">Spices</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Stock
                </label>
                <input 
                  type="number" 
                  name="currentStock"
                  value={formData.currentStock}
                  onChange={handleChange}
                  required 
                  min="0" 
                  step="0.01"
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit
                </label>
                <select 
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                >
                  <option value="kg">kg</option>
                  <option value="g">g</option>
                  <option value="L">L</option>
                  <option value="ml">ml</option>
                  <option value="pieces">pieces</option>
                  <option value="bottles">bottles</option>
                  <option value="packets">packets</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reorder Level
              </label>
              <input 
                type="number" 
                name="reorderLevel"
                value={formData.reorderLevel}
                onChange={handleChange}
                required 
                min="0" 
                step="0.01"
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Supplier
              </label>
              <input 
                type="text" 
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-black text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                Cancel
              </button>

              <button 
                type="submit"
                className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;
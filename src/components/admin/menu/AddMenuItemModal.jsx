import { useState } from 'react';

const AddMenuItemModal = ({ isOpen, onClose, onItemAdded, categories }) => {
  const [newItemForm, setNewItemForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'main-course',
    image: '',
    preparationTime: '',
    available: true
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormChange = (field, value) => {
    setNewItemForm(prev => ({
      ...prev,
      [field]: value
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate required fields
    if (!newItemForm.name.trim()) {
      setError('Item name is required');
      return;
    }
    if (!newItemForm.price) {
      setError('Price is required');
      return;
    }

    try {
      setLoading(true);

      const newItem = {
        id: Date.now(),
        name: newItemForm.name,
        description: newItemForm.description,
        price: parseFloat(newItemForm.price),
        category: newItemForm.category,
        image: newItemForm.image || 'https://via.placeholder.com/400x300?text=Menu+Item',
        available: newItemForm.available,
        preparationTime: parseInt(newItemForm.preparationTime) || 5
      };

      // TODO: API CALL - Add new menu item
      // TODO: import apiService from '../../../services/apiService';
      // TODO: await apiService.menu.createMenuItem(newItem);

      // CURRENT: Mock add - remove when API is ready
      onItemAdded(newItem);
      resetForm();
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to add menu item');
      console.error('Error adding menu item:', err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setNewItemForm({
      name: '',
      description: '',
      price: '',
      category: 'main-course',
      image: '',
      preparationTime: '',
      available: true
    });
    setError(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white flex justify-between items-center">
          <h2 className="text-2xl font-bold">Add New Menu Item</h2>
          <button
            onClick={handleClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <i className="fas fa-exclamation-circle mr-2"></i> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Item Name and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Item Name *</label>
                <input
                  type="text"
                  value={newItemForm.name}
                  onChange={(e) => handleFormChange('name', e.target.value)}
                  placeholder="e.g., Grilled Salmon"
                  className="w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
                <input
                  type="number"
                  step="0.01"
                  value={newItemForm.price}
                  onChange={(e) => handleFormChange('price', e.target.value)}
                  placeholder="e.g., 249"
                  className="w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newItemForm.description}
                onChange={(e) => handleFormChange('description', e.target.value)}
                placeholder="Item description"
                rows="3"
                className="w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Category and Preparation Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={newItemForm.category}
                  onChange={(e) => handleFormChange('category', e.target.value)}
                  className="w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {categories.filter(cat => cat.id !== 'all').map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preparation Time (mins)</label>
                <input
                  type="number"
                  value={newItemForm.preparationTime}
                  onChange={(e) => handleFormChange('preparationTime', e.target.value)}
                  placeholder="e.g., 15"
                  className="w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                type="url"
                value={newItemForm.image}
                onChange={(e) => handleFormChange('image', e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Image Preview */}
            {newItemForm.image && (
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Image Preview</label>
                <img
                  src={newItemForm.image}
                  alt="Preview"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/400x300?text=Invalid+Image')}
                  className="w-full h-48 object-cover rounded-lg border border-gray-300"
                />
              </div>
            )}

            {/* Available Checkbox */}
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <input
                type="checkbox"
                id="available"
                checked={newItemForm.available}
                onChange={(e) => handleFormChange('available', e.target.checked)}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="available" className="text-sm font-medium text-gray-700 cursor-pointer">
                Available for order
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">
                      <i className="fas fa-spinner"></i>
                    </span>
                    Adding...
                  </>
                ) : (
                  <>
                    <i className="fas fa-plus"></i>
                    Add Item
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMenuItemModal;

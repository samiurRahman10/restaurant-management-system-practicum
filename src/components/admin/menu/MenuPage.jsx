import { useState, useEffect } from 'react';
import MenuHeader from './MenuHeader';
import CategoryFilter from './CategoryFilter';
import MenuGrid from './MenuGrid';
import CartSection from './CartSection';
import QuickActions from './QuickActions';
import AddMenuItemModal from './AddMenuItemModal';

// CURRENT: Mock data - remove when API is ready
const mockCategoriesData = [
    { id: 'all', name: 'All Items', icon: 'fas fa-star' },
    { id: 'appetizers', name: 'Appetizers', icon: 'fas fa-utensils' },
    { id: 'main-course', name: 'Main Course', icon: 'fas fa-drumstick-bite' },
    { id: 'desserts', name: 'Desserts', icon: 'fas fa-ice-cream' },
    { id: 'beverages', name: 'Beverages', icon: 'fas fa-coffee' },
    { id: 'specials', name: 'Today\'s Specials', icon: 'fas fa-crown' }
];

const mockMenuItemsData = [
    {
        id: 1,
        name: "Grilled Salmon",
        description: "Fresh salmon grilled to perfection with herbs and lemon butter sauce",
        price: 249,
        category: "main-course",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        available: true,
        preparationTime: 15
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan",
        price: 129,
        category: "appetizers",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
        available: true,
        preparationTime: 5
    },
    {
        id: 3,
        name: "Beef Burger",
        description: "Juicy beef patty with fresh vegetables, cheese, and special sauce",
        price: 169,
        category: "main-course",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        available: true,
        preparationTime: 10
    },
    {
        id: 4,
        name: "Chocolate Cake",
        description: "Rich chocolate cake with chocolate frosting and vanilla ice cream",
        price: 100,
        category: "desserts",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        available: true,
        preparationTime: 2
    },
    {
        id: 5,
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice, served chilled",
        price: 99,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
        available: true,
        preparationTime: 3
    },
    {
        id: 6,
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter and herbs, served warm",
        price: 399,
        category: "appetizers",
        image: "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4-750x750.jpg",
        available: true,
        preparationTime: 5
    }
];

const MenuPage = () => {
    // Initialize state with TODO for API calls
    const [categories, setCategories] = useState(mockCategoriesData);
    const [menuItems, setMenuItems] = useState(mockMenuItemsData);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [_loading, setLoading] = useState(false);
    const [_error, setError] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        try {
            setLoading(true);
            // TODO: API CALL - Get menu categories and items
            // TODO: import apiService from '../../../services/apiService';
            // TODO: const [categoriesRes, itemsRes] = await Promise.all([
            // TODO:   apiService.menu.getCategories(),
            // TODO:   apiService.menu.getMenuItems()
            // TODO: ]);
            // TODO: setCategories(categoriesRes.categories);
            // TODO: setMenuItems(itemsRes.items);
            
            // CURRENT: Mock data - remove when API is ready
            setCategories(mockCategoriesData);
            setMenuItems(mockMenuItemsData);
            setError(null);
        } catch (err) {
            // TODO: Handle API errors
            console.error('Failed to fetch menu data:', err);
            setError(err.message || 'Failed to fetch menu');
        } finally {
            setLoading(false);
        }
    };

    // Filter menu items based on category and search
    const filteredItems = menuItems.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Add item to cart
    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    // Update item quantity in cart
    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(itemId);
            return;
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Clear entire cart
    const clearCart = () => {
        setCart([]);
    };

    // Calculate total amount
    const getTotalAmount = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Calculate total items
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Calculate menu stats
    const getMenuStats = () => {
        return {
            totalItems: menuItems.length,
            totalCategories: categories.length,
            availableItems: menuItems.filter(item => item.available).length,
            outOfStock: menuItems.filter(item => !item.available).length
        };
    };

    // Handle add new item
    const handleAddNewItem = (newItem) => {
        // TODO: API CALL - Add new menu item
        // TODO: import apiService from '../../../services/apiService';
        // TODO: await apiService.menu.createMenuItem(newItem);

        // CURRENT: Mock add - remove when API is ready
        setMenuItems([...menuItems, newItem]);
    };

    return (
        <div className="md:p-2">
            {/* Menu Header with Stats and Search */}
            <MenuHeader
                stats={getMenuStats()}
                onAddNewItem={() => setShowAddModal(true)}
            />

            {/* Quick Actions */}
            <QuickActions
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
            />

            <div className="flex gap-5 flex-col lg:flex-row">
                {/* Left Side - Menu Content */}
                <div className="w-full lg:w-3/4">
                    {/* Category Filter */}
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />

                    {/* Menu Grid */}
                    <MenuGrid
                        items={filteredItems}
                        onAddToCart={addToCart}
                    />
                </div>

                {/* Right Side - Cart Section */}
                <div className="w-full lg:w-1/4">
                    <CartSection
                        cart={cart}
                        onRemoveFromCart={removeFromCart}
                        onUpdateQuantity={updateQuantity}
                        onClearCart={clearCart}
                        totalAmount={getTotalAmount()}
                        totalItems={getTotalItems()}
                    />
                </div>
            </div>

            {/* Add New Item Modal */}
            <AddMenuItemModal 
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                onItemAdded={handleAddNewItem}
                categories={categories}
            />
        </div>
    );
};

export default MenuPage;
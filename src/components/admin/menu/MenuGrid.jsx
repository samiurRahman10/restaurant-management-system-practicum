const MenuGrid = ({ items, onAddToCart }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';
  };

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <i className="fas fa-utensils text-4xl text-gray-300 mb-4"></i>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
        <p className="text-gray-500">Try changing your search or category filter</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <div 
          key={item.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <img 
              className="h-48 w-full object-cover" 
              src={item.image} 
              alt={item.name}
              onError={handleImageError}
            />
            {!item.available && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Out of Stock
                </span>
              </div>
            )}
            <div className="absolute top-2 right-2">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                item.available 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {item.available ? 'Available' : 'Unavailable'}
              </span>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <span className="text-orange-500 font-bold text-lg">{item.price} <i class="fa-solid fa-bangladeshi-taka-sign"></i></span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <i className="fas fa-clock"></i>
                <span>{item.preparationTime} mins</span>
              </div>
              
              <button 
                onClick={() => onAddToCart(item)}
                disabled={!item.available}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  item.available
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {item.available ? (
                  <>
                    <i className="fas fa-plus mr-1"></i>
                    Add to Cart
                  </>
                ) : (
                  'Unavailable'
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
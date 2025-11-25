import { useState } from 'react';

const CartSection = ({ cart, onRemoveFromCart, onUpdateQuantity, onClearCart, totalAmount, totalItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // In a real POS, this would process payment and create order
    alert(`Order processed successfully! Total: $${totalAmount.toFixed(2)}`);
    onClearCart();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
      {/* Cart Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-800">Order Cart</h2>
          {totalItems > 0 && (
            <span className="bg-orange-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={toggleCart}
            className="text-gray-500 hover:text-orange-500 transition-colors"
          >
            <i className={`fas fa-chevron-${isCartOpen ? 'up' : 'down'}`}></i>
          </button>
          <button 
            onClick={onClearCart}
            disabled={cart.length === 0}
            className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>

      {isCartOpen && (
        <>
          {/* Cart Items */}
          <div className="max-h-96 overflow-y-auto mb-4">
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <i className="fas fa-shopping-cart text-4xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Your cart is empty</p>
                <p className="text-sm text-gray-400">Add items from the menu</p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-1 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 truncate ">{item.name}</h4>
                      <p className=" text-black font-bold">{item.price} <i class="fa-solid fa-bangladeshi-taka-sign"></i></p>
                    </div>
                    <div className="flex items-center">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-300 text-black"
                      >
                        -
                      </button>
                      <span className="font-semibold w-8 text-center text-black">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-300 text-black"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemoveFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors ml-2"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <>
              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold text-black"><i class="fa-solid fa-bangladeshi-taka-sign"></i> {totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Tax (8%):</span>
                  <span className="font-semibold text-black"><i class="fa-solid fa-bangladeshi-taka-sign"></i> {(totalAmount * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className='text-gray-600'>Total:</span>
                  <span className="text-black"><i class="fa-solid fa-bangladeshi-taka-sign"></i> {(totalAmount * 1.08).toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <i className="fas fa-credit-card"></i>
                  Process Payment
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                    Save Order
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                    Split Bill
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CartSection;
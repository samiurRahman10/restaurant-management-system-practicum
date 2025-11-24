import React from 'react';

const QuickAction = () => {
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg shadow-lg flex items-center justify-center gap-2">
                        <i className="fas fa-chair"></i>Manage Tables
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg shadow-lg flex items-center justify-center gap-2">
                        <i className="fas fa-utensils"></i>Manage Menu
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-lg flex items-center justify-center gap-2">
                        <i className="fas fa-boxes"></i>Manage Inventory
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickAction;
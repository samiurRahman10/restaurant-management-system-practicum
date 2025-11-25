const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-gray-100 rounded-2xl p-4 mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-500 hover:text-white hover:shadow-md'
            }`}
          >
            <i className={`${category.icon} text-sm`}></i>
            <span className="text-sm">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
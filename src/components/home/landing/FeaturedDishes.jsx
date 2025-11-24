const FeaturedDishes = () => {
  const dishes = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
      name: "Hummus & Pita",
      description: "Creamy chickpea hummus served with warm pita slices and olive oil",
      price: "500"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
      name: "Hummus & Pita",
      description: "Creamy chickpea hummus served with warm pita slices and olive oil",
      price: "500"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
      name: "Hummus & Pita",
      description: "Creamy chickpea hummus served with warm pita slices and olive oil",
      price: "500"
    }
  ];

  return (
    <section className="text-center py-20 px-8 bg-gray-100">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Dishes</h2>
      <p className="text-xl sm:text-2xl mb-10">Taste our most popular creations</p>
      <div className="flex flex-wrap justify-center gap-8">
        {dishes.map(dish => (
          <div key={dish.id} className="bg-white shadow-lg rounded-md p-6 w-full sm:w-[350px] md:w-[370px] hover:scale-110 transition-transform duration-300">
            <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
            <p className="text-gray-600 mb-4">{dish.description}</p>
            <p className="text-lg font-bold mb-4">
              {dish.price} <i className="fa-solid fa-bangladeshi-taka-sign"></i>
            </p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
              Add
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg hover:bg-orange-600">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default FeaturedDishes;
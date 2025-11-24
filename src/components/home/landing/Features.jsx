const Features = () => {
  const features = [
    {
      id: 1,
      image: "https://img.freepik.com/premium-vector/chef-is-using-cooking-utensils-possibly-tasting-preparing-food-with-steam-rising-indicating_73637-1168.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Expert Chefs",
      description: "Culinary masters creating exceptional dishes"
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-vector/clock-forward-arrow_78370-7263.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Fast Services",
      description: "Quick ordering and efficient delivery"
    },
    {
      id: 3,
      image: "https://img.freepik.com/premium-vector/vector-design-star-icon-style_1250006-1508.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Top Rated",
      description: "Consistently 5-star customer reviews"
    }
  ];

  return (
    <section className="py-16 px-10 flex flex-wrap justify-center gap-10 bg-gray-50">
      {features.map(feature => (
        <div key={feature.id} className="text-center max-w-[350px] shadow-lg py-4 px-3 rounded hover:scale-110 transition-transform duration-300">
          <div className="h-20 w-20 mx-auto">
            <img className="rounded-full" src={feature.image} alt={feature.title} />
          </div>
          <h3 className="text-2xl sm:text-2xl mt-2 font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-lg">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
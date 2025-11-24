const VisitUs = () => {
  return (
    <section className="max-w-6xl px-5 md:px-0 mx-auto py-16 flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-3">Visit Us Today</h2>
        <p className="text-gray-500 mb-4">
          Experience fine dining in a warm and elegant atmosphere. Our team is ready to serve
          you exceptional food and hospitality.
        </p>
        <div className="mb-4">
          <p><i className="fa-solid fa-location-dot"></i></p>
          <strong>Location</strong><br />Road 12, Sector 10, Uttara, Dhaka Bangladesh
        </div>
        <div className="mb-4">
          <p><i className="fa-solid fa-clock"></i></p>
          <strong>Hours</strong><br />Mon-Fri: 11AM - 10PM<br />Sat-Sun: 10AM - 11PM
        </div>
        <div className="mb-4">
          <p><i className="fa-solid fa-phone"></i></p>
          <strong>Contact</strong><br />(555) 123-4567<br />info@dinesmart.com
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?semt=ais_hybrid&w=740&q=80"
          className="rounded-2xl shadow-lg"
          alt="Visit us"
        />
      </div>
    </section>
  );
};

export default VisitUs;
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center mb-2">
            <span className="font-bold text-orange-500 text-xl">DineSmart</span>
          </div>
          <p>Smart dining starts here with exceptional food and service.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">Reservations</a></li>
            <li><a href="#" className="hover:underline">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <div>(555) 123-4567</div>
          <div>info@dinesmart.com</div>
          <div>Road 12, Sector 10<br />Uttara, Dhaka Bangladesh</div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Hours</h4>
          <div>Monday - Friday<br />11:00 AM – 10:00 PM</div>
          <div>Saturday - Sunday<br />10:00 AM – 11:00 PM</div>
        </div>
      </div>
      <div className="text-center py-4 text-gray-400 text-xs">
        © 2025 DineSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
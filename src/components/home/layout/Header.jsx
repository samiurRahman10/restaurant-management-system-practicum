import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white max-w-[1300px] mx-auto">
      <div className="navbar  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link to="/" className="text-gray-700 font-semibold">Home</Link></li>
              <li><a href="/" className="text-gray-700 font-semibold">Menu</a></li>
              <li><Link to="/login" className="text-gray-700 font-semibold">Sign In</Link></li>
              <li><Link to="/register" className="text-gray-700 font-semibold">Register</Link></li>
            </ul>
          </div>
          <Link to="/" className="text-2xl text-orange-500 font-bold">DineSmart</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li><Link to="/" className="text-gray-700 font-semibold">Home</Link></li>
            <li><a href="/" className="text-gray-700 font-semibold">Menu</a></li>
            <li><Link to="/login" className="text-gray-700 font-semibold">Sign In</Link></li>
            <button className="btn ml-1 font-semibold bg-orange-500 p-5 text-white">
              <Link to="/register">Get Started</Link>
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
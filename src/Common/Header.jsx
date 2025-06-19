import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Context } from '../PAGES/MainContext';
import { FaShoppingCart } from 'react-icons/fa'; // ← Importing shopping cart icon
import { Context } from '../Pages/MainContext';

export default function Header() {
  // const { cart, setCart, user, setUser } = useContext(Context);
  const { cart, setCart, user, setUser } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!user && location.pathname !== "/register") {
      navigate("/login");
    }
  }, [location.pathname]);

  const userLogout = () => {
    setUser("");
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 shadow-lg backdrop-blur-md z-10 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaShoppingCart className="text-orange-300 text-2xl hover:rotate-12 transition-transform duration-300" />
            <h1 className="text-xl font-bold">
              <span className="text-white">Buy</span>
              <span className="text-green-300">Halal</span>
            </h1>
          </div>
          {/* Desktop Nav */}
          <nav className={`hidden md:flex space-x-8 text-white font-medium ${user ? "block" : "hidden"}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/course">Course</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shop">Shop</Link>
          </nav>

          {/* Desktop Buttons */}
          <Link to="/cart">
            <button className="bg-indigo-500 hover:bg-indigo-600 p-2 px-3 rounded-lg text-white">Cart({cart.length})</button>
          </Link>

          <button onClick={() => setCart([])} className="bg-slate-600 hover:bg-slate-700 p-2 px-3 rounded-lg text-white">Clear Cart</button>

          {user ? (
            <button onClick={userLogout} className="bg-slate-200 text-slate-800 hover:bg-slate-300 p-2 px-3 rounded-lg">Logout</button>
          ) : (
            <Link to="/login">
              <button className="bg-indigo-500 hover:bg-indigo-600 p-2 px-3 rounded-lg text-white">Login</button>
            </Link>
          )}


          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 text-white font-medium">
            {user && (
              <>
                <Link to="/" className="block">Home</Link>
                <Link to="/about" className="block">About</Link>
                <Link to="/course" className="block">Course</Link>
                <Link to="/contact" className="block">Contact</Link>
                <Link to="/shop" className="block">Shop</Link>
                <Link to="/cart">
                  <button className="w-full text-left bg-orange-500 hover:bg-orange-600 p-2 px-3 rounded-lg">Cart({cart.length})</button>
                </Link>
                <button onClick={() => setCart([])} className="w-full text-left bg-gray-500 hover:bg-gray-600 p-2 px-3 rounded-lg">Clear Cart</button>
              </>
            )}
            {user ? (
              <button onClick={userLogout} className="w-full text-left bg-white text-black hover:bg-gray-100 p-2 px-3 rounded-lg">Logout</button>
            ) : (
              <Link to="/login">
                <button className="w-full text-left bg-green-500 hover:bg-green-600 p-2 px-3 rounded-lg text-white">Login</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

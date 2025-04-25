import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer  className="bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 shadow-lg backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-xl font-bold mb-4">YourBrand</h2>
              <p className="text-white">
                Delivering excellence through digital solutions. Let's build something
                great together.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white ">
                <li>
                  {/* <Link to={"/"}> */}
                  <a href="#" className="hover:text-gray-400">
                    Home
                  </a>
                  {/* </Link> */}
                </li>
                <li>
                  {/* <Link to={"/about"}> */}
                  <a href="#" className="hover:text-gray-400">
                    About
                  </a>
                  {/* </Link> */}
                </li>
                {/* <Link to={"/course"}> */}
                <li>
                  <a href="#" className="hover:text-gray-400">
                  Course
                  </a>
                </li>
                {/* </Link> */}
                {/* <Link to={"/contact"}> */}
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
                {/* </Link> */}
                {/* <Link to={"/shop"}> */}
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Shop
                  </a>
                </li>
                {/* </Link> */}
              </ul>
            </div>
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  🐦
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  📸
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  💼
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-white text-sm">
            © 2025 YourBrand. All rights reserved.
          </div>
        </div>
      </footer>

    </>
  )
}

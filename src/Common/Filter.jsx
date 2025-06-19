import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
// import Shop from '../Pages/Shop';

export default function Filter({ slug, setRating, rating, price, setPrice }) {
  const [allCategories, setAllCategories] = useState([]);

  const getCategories = () => {
    axios.get("https://dummyjson.com/products/categories")
      .then((success) => {
        setAllCategories(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const fromPrice = (event) => {
    if (event.target.value >= 0) {
      setPrice({ ...price, from: event.target.value });
    }
  }

  const toPrice = (event) => {
    if (event.target.value >= 0) {
      setPrice({ ...price, to: event.target.value });
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-full max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md px-4 mx-auto">
      {/* Rating Filter */}
      <div className="py-2">
        <div className="mb-4">
          <h1 className='text-2xl font-semibold'>Filter by Rating</h1>
          <div className="space-y-2 mt-2">
            <div onClick={() => setRating(4)} className={`p-2 border rounded-lg cursor-pointer ${rating === 4 ? 'bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 text-white' : ""}`}>4 ⭐ & Above</div>
            <div onClick={() => setRating(3)} className={`p-2 border rounded-lg cursor-pointer ${rating === 3 ? 'bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 text-white' : ""}`}>3 ⭐ & Above</div>
            <div onClick={() => setRating(2)} className={`p-2 border rounded-lg cursor-pointer ${rating === 2 ? 'bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 text-white' : ""}`}>2 ⭐ & Above</div>
            <div onClick={() => setRating(1)} className={`p-2 border rounded-lg cursor-pointer ${rating === 1 ? 'bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 text-white' : ""}`}>1 ⭐ & Above</div>
          </div>
        </div>
      </div>

      {/* Price Filter */}
      <div className="py-2">
        <div className="mb-4">
          <h1 className='text-2xl font-semibold'>Filter by Price</h1>
          <div className="flex flex-wrap gap-2 items-center mt-2">
            <input
              onChange={fromPrice}
              type="number"
              placeholder='from'
              className='border shadow w-[6rem] sm:w-[7rem] p-2 rounded'
              value={price.from}
            />
            <span>to</span>
            <input
              onChange={toPrice}
              type="number"
              placeholder='to'
              className='border shadow w-[6rem] sm:w-[7rem] p-2 rounded'
              value={price.to}
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-2">
        <div className="mb-4">
          <h1 className='text-2xl font-semibold'>Filter by Category</h1>
        </div>
        <Link to={"/Shop"}>
          <div className={`border rounded-lg shadow-md px-4 py-2 my-2 cursor-pointer ${slug === undefined ? 'bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 text-white' : ""}`}>
            All Categories
          </div>
        </Link>
        <div className="space-y-2">
          {
            allCategories.map((data, index) => (
              <Link to={`/shop/${data.slug}`} key={index}>
                <div className={`border rounded-lg shadow-md px-4 py-2 cursor-pointer ${data.slug === slug ? 'bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 text-white' : ""}`}>
                  {data.name}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

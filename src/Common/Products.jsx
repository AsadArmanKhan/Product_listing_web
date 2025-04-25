import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../PAGES/MainContext';
import confetti from 'canvas-confetti';
import { ToastContainer, toast } from 'react-toastify';

export default function Products({ slug, rating, price }) {
  const [allProducts, setAllProducts] = useState([]);
  const [limit, setAlllimit] = useState(20);
  const [loading, setLoading] = useState(true);

  const { cart, setCart } = useContext(Context);

  const getProducts = () => {
    let apiURL = 'https://dummyjson.com/products';

    if (slug === undefined) {
      apiURL = `https://dummyjson.com/products?limit=${limit}`;
    } else {
      apiURL = `https://dummyjson.com/products/category/${slug}?limit=${limit}`;
    }

    axios.get(apiURL).then(success => {
      const finalData = success.data.products.filter(data => {
        return data.rating >= rating && data.price >= price.from && data.price <= price.to;
      });
      setAllProducts(finalData);
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  }

  useEffect(() => {
    getProducts();
  }, [slug, limit, rating, price, cart]);

  return (
    <div>
      <div className='text-xl font-semibold mb-4 px-6'>All Products: {allProducts.length}</div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array(194).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : allProducts.map((product, index) => (
              <ProductCard
                product={product}
                key={index}
                cart={cart}
                setCart={setCart}
              />
            ))}
        </div>
      </div>
      <div className="text-center my-10">
        <button
          onClick={() => setAlllimit(limit + 20)}
          className='bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 text-white py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg'
        >
          Load More
        </button>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border p-4 shadow bg-white animate-pulse space-y-4">
      <div className="h-60 bg-gray-300 rounded-xl"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      <div className="h-8 w-full bg-gray-300 rounded-xl"></div>
    </div>
  );
}

function ProductCard({ product, setCart, cart }) {
  const addToCart = (e) => {
    const { id, title, category, price, thumbnail } = product;
    const productDetail = { id, title, category, price, thumbnail, quantity: 1 };

    const matchProduct = cart.filter(cartData => cartData.id === productDetail.id);

    if (matchProduct.length === 0) {
      setCart([...cart, productDetail]);
      toast.success("Product added in Cart");
    } else {
      toast.error("Product Already in Cart");
    }

    const rect = e.target.getBoundingClientRect();
    confetti({
      particleCount: matchProduct.length === 0 ? 100 : 70,
      spread: matchProduct.length === 0 ? 80 : 60,
      startVelocity: matchProduct.length === 0 ? 45 : 30,
      decay: matchProduct.length === 0 ? 0.9 : 0.85,
      colors: matchProduct.length === 0 ? undefined : ['#ff4d4d', '#ff9999', '#ff1a1a'],
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });
  };

  return (
    <div className="rounded-2xl border overflow-hidden shadow-lg bg-white p-4 space-y-4 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <Link to={`/productdetail/${product.id}`} className="block">
        <img
          className="w-full h-60 object-cover rounded-xl transition-transform duration-300 hover:scale-110"
          src={product.thumbnail}
          alt="Product"
        />
        <div className="space-y-1 mt-2">
          <h2 className="text-xl font-semibold text-gray-800 animate-fade-in">{product.title}</h2>
          <p className="text-lg font-bold text-green-600 animate-fade-in">${product.price}</p>
          <p className="text-sm text-gray-500 animate-fade-in">
            Discount: <span className="font-medium text-gray-700">{product.discountPercentage}%</span>
          </p>
          <p className="text-sm text-yellow-500 animate-fade-in">
            Rating: <span className="font-medium text-yellow-500">{product.rating}</span>/5
          </p>
          <p className="text-sm text-gray-500 animate-fade-in">
            Category: <span className="text-gray-700">{product.category}</span>
          </p>
          <p className="text-sm text-gray-500 animate-fade-in">
            Brand: <span className="text-gray-700">{product.brand}</span>
          </p>
        </div>
      </Link>
      <button
        onClick={(e) => addToCart(e)}
        className="w-full bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700  text-white py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
}

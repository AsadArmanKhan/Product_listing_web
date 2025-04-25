import React from 'react'
// import Header from './Common/Header'
// import Footer from './Common/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './PAGES/Home';
import Contact from './PAGES/Contact';
import About from './PAGES/About';
import Course from './PAGES/Course';
import Layout from './Layout';
import Shop from './PAGES/Shop';
import ProductDetail from './PAGES/ProductDetail';
import MainContext from './PAGES/MainContext';
import Cart from './PAGES/Cart';
import Login from './PAGES/Login';
import Register from './PAGES/Register';

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/course",
            element: <Course />
          },
          {
            path: '/contact',
            element: <Contact />
          },
          {
            path: '/shop/:slug?',
            element: <Shop />
          },
          {
            path: '/productdetail/:productId',
            element: <ProductDetail />
          },
          {
            path: '/cart',
            element: <Cart />
          },
          {
            path: '/login',
            element: <Login />
          },
          {
            path: '/register',
            element: <Register />
          },
        ]

      }
    ]
  );
  return (
    <>
      <MainContext>
        <div className="text-center text-2xl shadow underline">
          {/* <h1>Asad Khan's Website</h1> */}
        </div>
        <RouterProvider router={routes} />
      </MainContext>


    </>
  )
}

// <Header />
// <h1 className='text-7xl text-center	'>WELCOME TO HOME PAGE</h1>
// <Footer />
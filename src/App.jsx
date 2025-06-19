import React from 'react'
// import Header from './Common/Header'
// import Footer from './Common/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Course from './Pages/Course';
import Layout from './Layout';
import Shop from './Pages/Shop';
import ProductDetail from './Pages/ProductDetail';
import MainContext from './Pages/MainContext';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {

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

export default App;
// <Header />
// <h1 className='text-7xl text-center	'>WELCOME TO HOME PAGE</h1>
// <Footer />
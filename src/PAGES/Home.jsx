import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Home() {
  return (
    <>
      {/* <Header /> */}
      <h1 className='text-7xl text-center	'>WELCOME TO HOME PAGE</h1>
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">
            Welcome to YourBrand
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We craft elegant solutions to modern problems. Let’s bring your ideas to
            life.
          </p>
          <a
            href="#services"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Explore Services
          </a>
        </section>
        <section id="services" className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Custom websites tailored to your brand and business goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Intuitive, modern interfaces that delight your users.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">SEO &amp; Analytics</h3>
            <p className="text-gray-600">
              Boost your visibility and track performance effectively.
            </p>
          </div>
        </section>
      </main>

      {/* <Footer /> */}

    </>
  )
}

export default Home;
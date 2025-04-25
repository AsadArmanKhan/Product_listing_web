import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Course() {
  return (
    <>
      {/* <Header /> */}
      <h1 className='text-7xl text-center	'>WELCOME TO COURSE PAGE</h1>
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Our COURSE</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">
              Modern, responsive interfaces built with HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">
              Powerful, scalable server-side applications and RESTful APIs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Full-Stack Projects</h3>
            <p className="text-gray-600">
              Complete end-to-end web solutions tailored to your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">CMS &amp; E-commerce</h3>
            <p className="text-gray-600">
              Easy-to-manage websites using WordPress, Shopify &amp; custom setups.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">UI/UX Strategy</h3>
            <p className="text-gray-600">
              Wireframes, prototypes, and user research that guide great design.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Maintenance &amp; Support</h3>
            <p className="text-gray-600">
              We stay by your side even after launch. 24/7 support available.
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}

    </>
  )
}

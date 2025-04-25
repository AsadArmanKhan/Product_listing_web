import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function About() {
  return (
    <>
      {/* <Header /> */}
      <h1 className='text-7xl text-center	'>WELCOME TO ABOUT PAGE</h1>
      <main className="max-w-5xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-blue-600 mb-6">Who We Are</h2>
  <p className="text-gray-700 mb-6 leading-relaxed">
    YourBrand is a team of passionate developers, designers, and marketers
    committed to building meaningful digital experiences. We believe in
    transparency, creativity, and long-term partnerships.
  </p>
  <section className="grid md:grid-cols-2 gap-8 mt-12">
    <div>
      <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
      <p className="text-gray-600">
        To empower businesses through innovative digital solutions.
      </p>
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Integrity</li>
        <li>Innovation</li>
        <li>User-first design</li>
        <li>Quality over quantity</li>
      </ul>
    </div>
  </section>
</main>

      {/* <Footer /> */}

    </>
  )
}

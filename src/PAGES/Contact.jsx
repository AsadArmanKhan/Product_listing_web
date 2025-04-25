import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Contact() {
  return (
    <>
      {/* <Header /> */}
      <h1 className='text-7xl text-center	'>WELCOME TO CONTACT PAGE</h1>
      <main className="max-w-4xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-blue-600 mb-6">Get in Touch</h2>
  <p className="text-gray-700 mb-8">
    We’d love to hear from you! Fill out the form below and we'll get back to
    you within 24 hours.
  </p>
  <form
    action="#"
    method="POST"
    className="space-y-6 bg-white p-6 rounded-lg shadow"
  >
    <div>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        name="name"
        className="w-full mt-1 border border-gray-300 rounded px-4 py-2"
        required=""
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        className="w-full mt-1 border border-gray-300 rounded px-4 py-2"
        required=""
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Message</label>
      <textarea
        name="message"
        rows={4}
        className="w-full mt-1 border border-gray-300 rounded px-4 py-2"
        required=""
        defaultValue={""}
      />
    </div>
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
</main>

      {/* <Footer /> */}
    </>
  )
}

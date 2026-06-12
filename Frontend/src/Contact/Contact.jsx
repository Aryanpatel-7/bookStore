import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 py-24 bg-gray-100 dark:bg-slate-900">
        <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-center text-pink-500 mb-2">
            Contact Us
          </h1>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            We'd love to hear from you. Fill out the form below.
          </p>

          <form className="space-y-5">
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 dark:border-gray-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
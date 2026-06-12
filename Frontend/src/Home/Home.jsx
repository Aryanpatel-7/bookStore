import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Freebook from "../Components/Freebook";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Banner />

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="shadow-xl rounded-2xl p-6 text-center hover:scale-105 duration-300 bg-white dark:bg-slate-800">
            <h3 className="text-2xl font-bold text-pink-500 mb-3">
              📚 Huge Collection
            </h3>
            <p>
              Explore hundreds of books across programming, technology, and
              personal development.
            </p>
          </div>

          <div className="shadow-xl rounded-2xl p-6 text-center hover:scale-105 duration-300 bg-white dark:bg-slate-800">
            <h3 className="text-2xl font-bold text-pink-500 mb-3">
              🎓 Learn Faster
            </h3>
            <p>
              Learn through curated books and courses designed for beginners and
              professionals.
            </p>
          </div>

          <div className="shadow-xl rounded-2xl p-6 text-center hover:scale-105 duration-300 bg-white dark:bg-slate-800">
            <h3 className="text-2xl font-bold text-pink-500 mb-3">
              🚀 24/7 Access
            </h3>
            <p>
              Access your learning resources anytime and continue at your own
              pace.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-3">
          Featured Books
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Browse our most popular free books.
        </p>

        <Freebook />
      </section>

      {/* Statistics */}
      <section className="bg-pink-500 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h1 className="text-5xl font-bold">500+</h1>
            <p className="mt-2">Books</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">50K+</h1>
            <p className="mt-2">Students</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">120+</h1>
            <p className="mt-2">Courses</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">24/7</h1>
            <p className="mt-2">Support</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          What Our Readers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-slate-800">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              "The collection is amazing and helped me prepare for interviews."
            </p>
            <h4 className="mt-4 font-bold">- Rahul</h4>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-slate-800">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              "Clean UI and very useful learning resources for beginners."
            </p>
            <h4 className="mt-4 font-bold">- Priya</h4>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-slate-800">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              "One of the best free platforms to explore technical books."
            </p>
            <h4 className="mt-4 font-bold">- Aman</h4>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Stay Updated
          </h2>

          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Subscribe to receive updates about new books and courses.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-lg px-4 py-3 w-full md:w-96 text-black"
            />

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 dark:bg-slate-900 min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-pink-500">
              About BookStore
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Learn, Explore, and Grow with our collection of books and online
              courses designed for students and lifelong learners.
            </p>
          </div>

          {/* About Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-10">
            <h2 className="text-3xl font-semibold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-8">
              BookStore is a learning platform where readers and students can
              discover quality books and educational resources. Our mission is
              to make learning simple, accessible, and enjoyable through
              carefully selected content and courses.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                📚 Quality Books
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore a wide range of educational and inspirational books for
                every reader.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                🎓 Online Courses
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access free and premium courses to improve your skills and
                knowledge.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                🚀 Easy Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform is designed to make learning simple, interactive,
                and engaging.
              </p>
            </div>

          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div className="bg-pink-500 text-white rounded-xl p-6 shadow-lg">
              <h2 className="text-3xl font-bold">1000+</h2>
              <p>Books</p>
            </div>

            <div className="bg-pink-500 text-white rounded-xl p-6 shadow-lg">
              <h2 className="text-3xl font-bold">500+</h2>
              <p>Students</p>
            </div>

            <div className="bg-pink-500 text-white rounded-xl p-6 shadow-lg">
              <h2 className="text-3xl font-bold">50+</h2>
              <p>Courses</p>
            </div>

            <div className="bg-pink-500 text-white rounded-xl p-6 shadow-lg">
              <h2 className="text-3xl font-bold">24/7</h2>
              <p>Support</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
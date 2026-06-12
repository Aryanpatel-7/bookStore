import React from "react";
import Navbar from "../Components/Navbar";
import Course from "../Components/Course";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white">
        {/* Hero Section */}
        <div className="pt-28 pb-12 text-center px-4">
          <h1 className="text-5xl font-bold">
            Explore Our{" "}
            <span className="text-pink-500">Premium Courses</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-300">
            Enhance your knowledge with our carefully selected books and
            learning resources. Whether you're a beginner or an experienced
            learner, there's something here for everyone.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                Back to Home
              </button>
            </Link>

            <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              Browse Collection
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4 mb-12">
          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-pink-500 mb-2">
              📚 Quality Content
            </h3>
            <p>
              Access a wide range of carefully curated books and educational
              material.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-pink-500 mb-2">
              🚀 Skill Development
            </h3>
            <p>
              Build practical skills and strengthen your learning journey with
              every course.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-pink-500 mb-2">
              🌍 Learn Anytime
            </h3>
            <p>
              Study at your own pace with resources available whenever you need
              them.
            </p>
          </div>
        </div>

        {/* Course List */}
        <Course />
      </div>

      <Footer />
    </>
  );
};

export default Courses;
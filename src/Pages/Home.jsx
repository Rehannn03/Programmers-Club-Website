import React from "react";
import { Link } from "react-router-dom";
import backgroundVid from '../assets/backgroundVid.mp4'
function Home() {
  return (
    <div className="bg-gray-100">
      {/* Section 1: Hero Section */}
      <section className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-700 to-blue-300">

        <div className="text-center z-10 ">
          
          <h1 className="text-5xl font-bold text-black ">
            Programmers Club
          </h1>
          <p className="text-4xl text- mt-4">
            The{" "}
            <span className="text-black ">Technical Club</span> of{" "}
            <span className="text-black ">
              Computer Engineering Department
            </span>{" "}
            of{" "}
            <span className="text-black ">
              M.H Saboo Siddik College of {" "} Engineering
            </span>
          </p>
        </div>
      </section>

      {/* Section 2: Testimonial */}
      <section className="py-16 bg-gray-200 h-fit">
        <div className="container mx-auto px-4 flex justify-center">
          <blockquote className="border-l-4 border-light-blue-500 pl-8">
            <p className="text-6xl font-medium ">
              "THE ONLY THING THAT STANDS BETWEEN YOU AND YOUR DREAM IS YOU."
            </p>
            <footer className="text-gray-600 mt-2 text-xl">
              {" "}
              - Er.Ahlam Ansari, Convener-Programmers Club
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Section 3: Latest Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 ">
            Latest Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-md p-4 hover:shadow-2xl">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Hackathon 2024
              </h3>
              <p className="text-gray-600">
                Join us for a 24-hour coding challenge! Test your skills and
                build something amazing.
              </p>
              <Link
                to="/"
                className="text-light-blue-500 hover:text-light-blue-700 underline mt-4"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-md p-4 hover:shadow-2xl">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Guest Speaker: Jane Doe
              </h3>
              <p className="text-gray-600">
                Hear from a renowned software engineer about her career journey
                and insights.
              </p>
              <a
                href="#"
                className="text-light-blue-500 hover:text-light-blue-700 underline mt-4"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

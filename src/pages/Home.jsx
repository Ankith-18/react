
import trainHero from "../assets/images/train-hero.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Home() {
  return (
    <div className="min-h-[70vh] bg-gray-100 flex items-center">
      
      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10">

        {/* LEFT SIDE – TEXT */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to TrainBook 🚆
          </h1>

          <p className="text-xl text-gray-700 mb-6">
            Book your train tickets easily — fast, secure, and reliable.
          </p>



             <div className="flex gap-5 mt-4">

            {/* SEARCH BUTTON */}
            <Link
              to="/search"
              className="
                flex items-center gap-3
                px-7 py-3 rounded-xl
                text-white text-lg font-semibold
                bg-gradient-to-r from-blue-600 to-indigo-600
                hover:from-blue-700 hover:to-indigo-700
                shadow-lg hover:shadow-xl
                transition-all duration-300
              "
            >
              🚆 Search Trains
            </Link>


            {/* SIGNUP BUTTON */}
            <Link
              to="/signup"
              className="
                flex items-center gap-3
                px-7 py-3 rounded-xl
                text-lg font-semibold
                border-2 border-blue-600
                text-blue-600
                bg-white
                hover:bg-blue-50
                hover:shadow-md
                transition-all duration-300
              "
            >
              👤 Create Account
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="flex justify-center">
          <img
            src={trainHero}
            alt="Train"
            className="rounded-xl shadow-lg max-h-[400px] object-cover"
          />
        </div>

      </div>
    </div>
  )
}

export default Home

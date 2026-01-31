import { useNavigate } from "react-router-dom"
import { useState } from "react"

function SearchTrains() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [travelClass, setTravelClass] = useState("SL") // 👈 NEW
  const [seatPreference, setSeatPreference] = useState("NONE") // 👈 NEW
  const [bookingType, setBookingType] = useState("GENERAL") // 👈 NEW





  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()

    navigate("/results", {
      state: { from, to, date,travelClass, seatPreference, bookingType},
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex justify-center items-start pt-16">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">
        
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Search Trains 🚆
        </h1>

        <form 
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            placeholder="From Station"
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />

          <input
            type="text"
            placeholder="To Station"
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />

          <input
            type="date"
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
          >
            <option value="1A">First AC (1A)</option>
            <option value="2A">Second AC (2A)</option>
            <option value="3A">Third AC (3A)</option>
            <option value="SL">Sleeper (SL)</option>
            <option value="CC">Chair Car (CC)</option>
            <option value="2S">Second Sitting (2S)</option>
          </select>

          <select
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={seatPreference}
            onChange={(e) => setSeatPreference(e.target.value)}
            >
            <option value="NONE">No Preference</option>
            <option value="LOWER">Lower Berth</option>
            <option value="UPPER">Upper Berth</option>
            <option value="MIDDLE">Middle Berth</option>
            <option value="SIDE_LOWER">Side Lower</option>
            <option value="SIDE_UPPER">Side Upper</option>
          </select>

          <select
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              value={bookingType}
              onChange={(e) => setBookingType(e.target.value)}
            >
              <option value="GENERAL">General Booking</option>
              <option value="TATKAL">Tatkal Booking</option>
          </select>



          <button
            type="submit"
            className="md:col-span-3 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Search Trains
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchTrains

import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"

function Booking() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useAuth()

  // ✅ FIXED TYPO HERE
  const train = location.state || null

  // ✅ Hooks at top
  const [bookingData, setBookingData] = useState({
    passengerName: "",
    age: "",
    seats: 1,
  })

  // ✅ SAFE REDIRECT (THIS IS THE RIGHT WAY)
  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user, navigate])

  function handleChange(e) {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    })
  }

  function handleConfirmBooking(e) {
    e.preventDefault()

    const payload = {
      userId: user?.id || "dummy-user-id",
      trainId: train.id,
      trainName: train.name,
      from: train.from,
      to: train.to,
      pricePerSeat: train.price,
      bookingDetails: bookingData,
      totalPrice: bookingData.seats * train.price,
    }

    console.log("BOOKING PAYLOAD:", payload)
    alert("Ticket booked successfully (Frontend Simulation)")
  }

  // ✅ SAFE GUARD
  if (!train) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-xl">
        No train selected. Please go back and search again 🚆
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Confirm Booking 🎟️
        </h1>

        <div className="border p-4 rounded mb-6 bg-gray-50">
          <h2 className="text-xl font-bold mb-2">{train.name}</h2>
          <p>{train.from} → {train.to}</p>
          <p>Time: {train.time}</p>
          <p className="font-semibold text-green-600">
            Price per seat: ₹{train.price}
          </p>
        </div>

        <form onSubmit={handleConfirmBooking} className="space-y-4">
          <input
            type="text"
            name="passengerName"
            placeholder="Passenger Full Name"
            value={bookingData.passengerName}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={bookingData.age}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="number"
            name="seats"
            min="1"
            max={train.seats}
            value={bookingData.seats}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <div className="text-right text-xl font-bold text-blue-700">
            Total: ₹{bookingData.seats * train.price}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking

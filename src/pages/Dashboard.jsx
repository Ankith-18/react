import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

function Dashboard() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-red-600">
        Please login to access dashboard
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8 text-blue-700">
        User Dashboard 👤
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* PROFILE CARD */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Profile</h2>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>User ID:</b> {user.id}</p>
        </div>

        {/* BOOKINGS SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Bookings</h2>
          <p>Total Bookings: <b>2</b></p>
          <p>Last Booking: <b>Rajdhani Express</b></p>

          <Link
            to="/bookings"
            className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
          >
            View All Bookings →
          </Link>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

          <div className="flex flex-col gap-3">
            <Link to="/search" className="dash-btn">🔍 Search Trains</Link>
            <Link to="/search" className="dash-btn">⚡ Tatkal Booking</Link>
            <Link to="/pnr-status" className="dash-btn">📄 Check PNR</Link>
            <Link to="/bookings" className="dash-btn">🎟 My Bookings</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard

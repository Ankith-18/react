import { useAuth } from "../context/AuthContext"

function BookingHistory() {
  const { user } = useAuth()

  // Dummy bookings (backend later)
  const bookings = [
    {
      id: 1,
      train: "Rajdhani Express",
      from: "Delhi",
      to: "Mumbai",
      date: "2026-02-10",
      seats: 2,
      total: 3600,
      status: "Confirmed",
    },
    {
      id: 2,
      train: "Shatabdi Express",
      from: "Delhi",
      to: "Bhopal",
      date: "2026-02-15",
      seats: 1,
      total: 1200,
      status: "Confirmed",
    },
  ]

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        Please login to view booking history
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        My Bookings 📜
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-white p-6 rounded shadow flex justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">{b.train}</h2>
              <p>{b.from} → {b.to}</p>
              <p>Date: {b.date}</p>
              <p>Seats: {b.seats}</p>
            </div>

            <div className="text-right">
              <p className="text-green-600 font-bold">₹{b.total}</p>
              <p className="text-sm text-gray-600">{b.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookingHistory

import { useLocation, useNavigate } from "react-router-dom"

const trains = [
  {
    id: 1,
    name: "Rajdhani Express",
    from: "Delhi",
    to: "Mumbai",
    time: "06:00 AM",
    price: 1800,
    seats: 12,
  },
  {
    id: 2,
    name: "Shatabdi Express",
    from: "Delhi",
    to: "Bhopal",
    time: "08:30 AM",
    price: 1200,
    seats: 5,
  },
  {
    id: 3,
    name: "Garib Rath",
    from: "Patna",
    to: "Kolkata",
    time: "09:15 PM",
    price: 600,
    seats: 25,
  },
]

function TrainResults() {
  const location = useLocation()
  const navigate = useNavigate()

  const { from, to, date } = location.state || {}

  const filteredTrains = trains.filter((train) => {
    return (
      (!from || train.from.toLowerCase().includes(from.toLowerCase())) &&
      (!to || train.to.toLowerCase().includes(to.toLowerCase()))
    )
  })

  function handleBook(train) {
    navigate("/booking", { state: train })
  }

  return (
    <div className="min-h-screen bg-blue-100 p-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Available Trains 🚆
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {filteredTrains.length === 0 ? (
          <p className="text-center text-red-600 text-xl">
            No trains found 😔
          </p>
        ) : (
          filteredTrains.map((train) => (
            <div
              key={train.id}
              className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-bold">{train.name}</h2>
                <p className="text-gray-600">
                  {train.from} → {train.to}
                </p>
                <p className="text-gray-600">Time: {train.time}</p>
                <p className="text-gray-600">
                  Seats Available: {train.seats}
                </p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">
                  ₹{train.price}
                </p>
                <button
                  onClick={() => handleBook(train)}
                  className="mt-3 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TrainResults

import { useLocation } from "react-router-dom"

function PnrStatus() {
  const location = useLocation()
  const { pnr } = location.state || {}

  if (!pnr) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        No PNR provided ❌
      </div>
    )
  }

  // Dummy data (backend will replace)
  const dummyData = {
    train: "Rajdhani Express",
    from: "Delhi",
    to: "Mumbai",
    date: "2026-02-10",
    status: "CONFIRMED",
    coach: "B2",
    seat: "21",
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          PNR Status 🚆
        </h1>

        <div className="space-y-3 text-lg">
          <p><b>PNR:</b> {pnr}</p>
          <p><b>Train:</b> {dummyData.train}</p>
          <p><b>Route:</b> {dummyData.from} → {dummyData.to}</p>
          <p><b>Date:</b> {dummyData.date}</p>
          <p><b>Status:</b> <span className="text-green-600 font-bold">{dummyData.status}</span></p>
          <p><b>Coach:</b> {dummyData.coach}</p>
          <p><b>Seat:</b> {dummyData.seat}</p>
        </div>

      </div>
    </div>
  )
}

export default PnrStatus

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <h1>ankit</h1>
      
//       </div>
   
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SearchTrains from "./pages/SearchTrains"
import TrainResults from "./pages/TrainResults"
import BookingHistory from "./pages/BookingHistory"
import PnrStatus from "./pages/PnrStatus"
import Dashboard from "./pages/Dashboard"






function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchTrains />} />
        <Route path="/results" element={<TrainResults />} />
        <Route path="/bookings" element={<BookingHistory />} />
        <Route path="/pnr-status" element={<PnrStatus />} />
        <Route path="/dashboard" element={<Dashboard />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App


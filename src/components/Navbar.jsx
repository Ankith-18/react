
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"


function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center px-8">

      {/* LOGO */}
      <div className="text-white text-2xl font-bold flex items-center gap-2">
        TrainBook 🚆
      </div>

      {/* MENU */}
      <div className="ml-auto flex items-center h-full">

        <NavItem to="/" label="Home" />
        <NavItem to="/search" label="Search" />

        {/* 🔐 NOT LOGGED IN */}
        {!user && (
          <>
            <NavItem to="/login" label="Login" />
            <NavItem to="/signup" label="Signup" />
          </>
        )}

        {/* ✅ LOGGED IN */}
        {user && (
          <>
            <NavItem to="/dashboard" label="Dashboard" />
            <NavItem to="/bookings" label="My Bookings" />

            <button
              onClick={logout}
              className="
                ml-2 px-5 py-2 rounded-full
                bg-red-500 text-white text-sm font-semibold
                hover:bg-red-600 transition
              "
            >
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  )
}

function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="
        mx-1 px-5 py-2
        rounded-full
        text-white text-sm font-semibold
        transition-all duration-300

        bg-white/10
        hover:bg-white/25
        hover:shadow-lg
        backdrop-blur-md
      "
    >
      {label}
    </Link>
  )
}


export default Navbar

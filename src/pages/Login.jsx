// import { useState } from "react"

// function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   function handleLogin(e) {
//     e.preventDefault()
//     console.log("Email:", email)
//     console.log("Password:", password)
//     alert("Login clicked (Frontend only)")
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form 
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-4 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button 
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Login

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    // 🔥 Dummy user (backend later)
    login({
      id: "user-123",
      name: "Demo User",
      email,
    })

    navigate("/search")
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login


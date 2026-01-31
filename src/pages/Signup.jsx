// import { useState } from "react"

// function Signup() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   function handleSignup(e) {
//     e.preventDefault()
//     alert("Signup Successful (Frontend)")
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 to-blue-200">
      
//       <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">
//         <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
//           Create Account
//         </h2>

//         <form onSubmit={handleSignup} className="space-y-4">
//           <input
//             className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-400"
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <input
//             className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-400"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-400"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
//           >
//             Signup
//           </button>
//         </form>
//       </div>

//     </div>
//   )
// }

// export default Signup

import { useState } from "react"

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    idType: "",
    idNumber: "",
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSignup(e) {
    e.preventDefault()

    console.log("IRCTC Account Data:", formData)
    alert("Account created successfully (Frontend Only)")
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create IRCTC Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <textarea
            name="address"
            placeholder="Complete Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            rows="3"
            required
          />

          <select
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          >
            <option value="">Select ID Proof</option>
            <option value="Aadhaar">Aadhaar Card</option>
            <option value="PAN">PAN Card</option>
            <option value="Passport">Passport</option>
            <option value="Voter ID">Voter ID</option>
          </select>

          <input
            type="text"
            name="idNumber"
            placeholder="ID Proof Number"
            value={formData.idNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup

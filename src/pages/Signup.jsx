import { useState } from "react"

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    console.log("IRCTC Account Data:", formData)
    alert("Account created successfully (Frontend Only)")
  }

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-10">

        {/* HEADER */}
        <h2 className="text-3xl font-extrabold text-center text-blue-800">
          Create IRCTC Account
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-8">
          Register to book train tickets and access railway services
        </p>

        {/* FORM */}
        <form onSubmit={handleSignup} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Complete Address
            </label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* ID PROOF */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID Proof Type
              </label>
              <select
                name="idType"
                value={formData.idType}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="">Select ID Proof</option>
                <option value="Aadhaar">Aadhaar Card</option>
                <option value="PAN">PAN Card</option>
                <option value="Passport">Passport</option>
                <option value="Voter ID">Voter ID</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID Proof Number
              </label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full mt-6 py-3
              bg-orange-500 hover:bg-orange-600
              text-white text-lg font-semibold
              rounded-lg
              shadow-md hover:shadow-lg
              transition
            "
          >
            Create Account
          </button>

        </form>
      </div>
    </div>
  )
}

export default Signup

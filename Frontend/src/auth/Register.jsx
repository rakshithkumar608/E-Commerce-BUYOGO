import Lottie from 'lottie-react'
import animationData from '../assets/lottie/LoginAnimation.json'
import Input from '../components/ui/Input'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed")
      }

      setSuccess("Registration successful! you can now login.")
      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      setError(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className='min-h-screen bg-gray-100 items-center justify-center flex'>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="w-40 mx-auto mb-4">
          <Lottie animationData={animationData} loop/>
        </div>

        <h2 className="text-lg font-semibold mb-6 text-center text-gray-600">👋 Create your account</h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        {success && (
          <p className="text-green-500 text-sm text-center mb-3">{success}</p>
        )}

        <form onSubmit={handleSubmit}>
          <Input 
          label="Full Name"
          type="text"
          name="name"
          placeholder="FULL_NAME"
          value={form.name}
          onChange={handleChange}
          />
          <Input 
          label="Email Address"
          type="email"
          name="email"
          placeholder="EMAIL_ADDRESS"
          value={form.email}
          onChange={handleChange}
          />
          <Input 
          label="Password"
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={form.password}
          onChange={handleChange}
          />

          <button 
          onClick={() => navigate("/dashboard")}
          type="submit" 
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
  Already have an account?{" "}
  <Link 
    to="/login" 
    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
  >
    Login
  </Link>
</p>
        </form>
      </div>
    </div>
  )
}

export default Register
import Lottie from 'lottie-react'
import animationData from '../assets/lottie/LoginAnimation.json'
import Input from '../components/ui/Input'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        "http://localhost:5000/api/auth/login",
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
        throw new Error(data.message || "Login failed");
      }

      setSuccess("Login successful!");
      setForm({ email: "", password: "" });
      
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    navigate("/dashboard");
    
    } catch (error) {
      setError(error.message || "Login failed");
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

        <div className="text-2xl font-bold text-center mb-2 ">👋 Welcome Back</div>
          <h2 className="text-lg font-semibold mb-6 text-center text-gray-600">
          Sign in to your account
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
          <form onSubmit={handleSubmit}>
            
        <Input 
        label="Email" 
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

        <div className="text-right mb-4">
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">Forgot Password?</span>
        </div>

      <button 
      type="submit" 
      disabled={loading} 
      className="w-full py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
      {loading ? "Signing In..." : "Login"}
    </button>

    <p className="text-center text-sm text-gray-400 mt-4">
  Don’t have an account?{" "}
  <Link 
    to="/register" 
    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
  >
    Register
  </Link>
</p>

      </form>
      </div>
      
    </div>
  )
}

export default Login
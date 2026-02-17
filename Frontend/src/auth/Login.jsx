import Lottie from 'lottie-react'
import animationData from '../assets/lottie/LoginAnimation.json'
import Input from '../components/ui/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

  //   try {
      
  //   } catch (error) {
      
  //   }
  }

  return (
    <div className='min-h-screen bg-gray-100 items-center justify-center flex'>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">

        <div className="w-40 mx-auto mb-4">
          <Lottie animationData={animationData} loop/>
        </div>

        <div className="text-2xl font-bold text-center mb-2 ">Welcome Back</div>
          <h2 className="text-lg font-semibold mb-6 text-center text-gray-600">
          Sign in to your account
        </h2>
          <form onSubmit={handleChange}>
         
        <Input 
        label="Email" 
        type="email" 
        placeholder="EMAIL_ADDRESS"
        value={email}
        onChage={() =>setEmail(email.target.value)}
        />

        <Input 
        label="Password" 
        type="password" 
        placeholder="PASSWORD"
        value={password}
        onChage={() =>setPassword(password.target.value)}
        />

        <div className="text-right mb-4">
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">Forgot Password?</span>
        </div>

      <button 
      type='submit'
      disabled={loading}
      className="w-full py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">Sign In</button>

        <div className="mt-6 text-center text-sm text-gray-600">New customer?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">Sign Up</Link>

        </div>
      </form>
      </div>
      
    </div>
  )
}

export default Login
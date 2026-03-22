import Lottie from 'lottie-react'
import animationData from '../assets/lottie/LoginAnimation.json'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react'

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!form.email.trim() || !form.password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Welcome back! 🎉");
      setForm({ email: "", password: "" });
      navigate("/dashboard");

    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Inline styles for this page */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');
        .auth-gradient-text {
          background: linear-gradient(to right, #F7931A, #FFD600);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .auth-input {
          background: rgba(15,17,21,0.8);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          height: 52px;
          padding: 0 16px 0 48px;
          outline: none;
          transition: all 0.3s ease;
          border-radius: 14px;
          width: 100%;
        }
        .auth-input::placeholder { color: rgba(255,255,255,0.25); }
        .auth-input:focus {
          border-color: rgba(247,147,26,0.5);
          box-shadow: 0 0 0 3px rgba(247,147,26,0.1), 0 8px 24px -8px rgba(247,147,26,0.15);
        }
        .auth-grid-bg {
          background-size: 48px 48px;
          background-image:
            linear-gradient(to right, rgba(30,41,59,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30,41,59,0.4) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
        }
        @keyframes auth-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes auth-entrance {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden"
        style={{
          background: '#030304',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Background elements */}
        <div className="absolute inset-0 auth-grid-bg opacity-60" />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500, height: 500,
            top: '-15%', right: '-10%',
            background: '#F7931A',
            opacity: 0.06,
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400, height: 400,
            bottom: '-10%', left: '-10%',
            background: '#FFD600',
            opacity: 0.04,
            filter: 'blur(100px)',
          }}
        />

        {/* Main card */}
        <div
          className="relative w-full max-w-md z-10"
          style={{ animation: 'auth-entrance 0.6s ease-out both' }}
        >
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: 'rgba(15,17,21,0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
            }}
          >
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l pointer-events-none" style={{ borderColor: 'rgba(247,147,26,0.3)' }} />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r pointer-events-none" style={{ borderColor: 'rgba(247,147,26,0.3)' }} />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l pointer-events-none" style={{ borderColor: 'rgba(247,147,26,0.3)' }} />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r pointer-events-none" style={{ borderColor: 'rgba(247,147,26,0.3)' }} />

            {/* Lottie + badge */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 sm:w-28 mb-4" style={{ animation: 'auth-float 6s ease-in-out infinite' }}>
                <Lottie animationData={animationData} loop />
              </div>

              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.15em] mb-4"
                style={{
                  background: 'rgba(247,147,26,0.1)',
                  border: '1px solid rgba(247,147,26,0.25)',
                  color: '#F7931A',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <Zap size={10} fill="currentColor" />
                BUYOGO Store
              </div>

              <h1
                className="text-2xl sm:text-3xl font-bold text-white text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
              >
                Welcome <span className="auth-gradient-text">Back</span>
              </h1>
              <p
                className="text-xs mt-2 text-center"
                style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'JetBrains Mono', monospace" }}
              >
                Sign in to your account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label
                  className="block text-[10px] font-bold uppercase tracking-widest mb-2"
                  style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: 'rgba(255,255,255,0.25)' }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  className="block text-[10px] font-bold uppercase tracking-widest mb-2"
                  style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: 'rgba(255,255,255,0.25)' }}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="auth-input"
                    style={{ paddingRight: '48px' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Forgot password */}
              <div className="text-right">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider cursor-pointer hover:underline"
                  style={{ color: '#F7931A', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Forgot Password?
                </span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 sm:h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                style={{
                  background: loading ? 'rgba(247,147,26,0.5)' : 'linear-gradient(to right, #EA580C, #F7931A)',
                  color: '#fff',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  boxShadow: loading ? 'none' : '0 4px 20px rgba(247,147,26,0.3)',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <span
                className="text-[9px] font-bold uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'JetBrains Mono', monospace" }}
              >
                or
              </span>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>

            {/* Register link */}
            <p
              className="text-center text-sm"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold transition-colors"
                style={{ color: '#F7931A' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFD600'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#F7931A'}
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
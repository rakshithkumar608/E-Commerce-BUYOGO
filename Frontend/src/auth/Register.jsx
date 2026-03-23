import Lottie from 'lottie-react'
import animationData from '../assets/lottie/LoginAnimation.json'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Zap, Mail, Lock, User, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react'

const Register = () => {
  const [form, setForm] = useState({
    name: "",
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
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
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
        throw new Error(data.message || "Registration failed")
      }

      toast.success("Account created successfully! 🎉");
      setForm({ name: "", email: "", password: "" });

      // Navigate to login after a brief delay
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      toast.error(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
  
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        /* Signature gradient text */
        .auth-gradient-text {
          background: linear-gradient(to right, #0052FF, #4D7CFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Modern input styling */
        .auth-input {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #0F172A;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          height: 52px;
          padding: 0 16px 0 48px;
          outline: none;
          transition: all 0.2s ease-out;
          border-radius: 12px;
          width: 100%;
        }
        .auth-input::placeholder { 
          color: #64748B;
          opacity: 0.5;
        }
        .auth-input:focus {
          border-color: #0052FF;
          box-shadow: 0 0 0 3px rgba(0, 82, 255, 0.1);
        }
        
        /* Floating animation */
        @keyframes auth-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        /* Entrance animation */
        @keyframes auth-entrance {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Pulsing dot animation */
        @keyframes auth-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        
        /* Rotating ring */
        @keyframes auth-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div
        className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
        style={{
          background: '#FAFAFA',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 600, 
            height: 600,
            top: '-20%', 
            left: '-15%',
            background: 'radial-gradient(circle, rgba(0, 82, 255, 0.08) 0%, rgba(77, 124, 255, 0.04) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
       
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500, 
            height: 500,
            bottom: '-15%', 
            right: '-12%',
            background: 'radial-gradient(circle, rgba(77, 124, 255, 0.06) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />

     
        <div
          className="absolute pointer-events-none hidden sm:block"
          style={{
            width: 200,
            height: 200,
            top: '10%',
            right: '8%',
            border: '2px dashed rgba(0, 82, 255, 0.15)',
            borderRadius: '50%',
            animation: 'auth-rotate 60s linear infinite',
          }}
        />

        {/* Main card container */}
        <div
          className="relative w-full max-w-md z-10"
          style={{ animation: 'auth-entrance 0.7s ease-out both' }}
        >
          <div
            className="rounded-2xl p-8 sm:p-10 relative"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
            }}
          >
          
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100"
              style={{
                background: 'linear-gradient(to bottom right, rgba(0, 82, 255, 0.02), transparent)',
              }}
            />

            {/* Lottie animation + header */}
            <div className="flex flex-col items-center mb-8">
              {/* Animated Lottie with accent background */}
              <div 
                className="relative mb-6"
                style={{ animation: 'auth-float 5s ease-in-out infinite' }}
              >
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 82, 255, 0.08), rgba(77, 124, 255, 0.08))',
                    filter: 'blur(20px)',
                    transform: 'scale(1.1)',
                  }}
                />
                <div 
                  className="relative w-24 sm:w-28 p-4 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 82, 255, 0.06), rgba(77, 124, 255, 0.06))',
                  }}
                >
                  <Lottie animationData={animationData} loop />
                </div>
              </div>

              {/* Section badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-4"
                style={{
                  background: 'rgba(0, 82, 255, 0.05)',
                  border: '1px solid rgba(0, 82, 255, 0.2)',
                }}
              >
                <span 
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: '#0052FF',
                    animation: 'auth-pulse 2s ease-in-out infinite',
                  }}
                />
                <span
                  className="font-mono text-xs uppercase tracking-[0.15em]"
                  style={{ 
                    color: '#0052FF',
                    fontWeight: 500,
                  }}
                >
                  Join BUYOGO
                </span>
              </div>

              {/* Headline with gradient accent */}
              <h1
                className="text-3xl sm:text-4xl font-normal text-center mb-2"
                style={{ 
                  fontFamily: "'Calistoga', Georgia, serif",
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                Create <span className="auth-gradient-text">Account</span>
              </h1>
              
              {/* Subtitle */}
              <p
                className="text-sm text-center"
                style={{ 
                  color: '#64748B',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Start your shopping journey
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name field */}
              <div>
                <label
                  className="block text-xs font-medium uppercase tracking-wider mb-2.5"
                  style={{ 
                    color: '#64748B',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: '#64748B' }}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label
                  className="block text-xs font-medium uppercase tracking-wider mb-2.5"
                  style={{ 
                    color: '#64748B',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: '#64748B' }}
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

              {/* Password field */}
              <div>
                <label
                  className="block text-xs font-medium uppercase tracking-wider mb-2.5"
                  style={{ 
                    color: '#64748B',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: '#64748B' }}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Min. 6 characters"
                    value={form.password}
                    onChange={handleChange}
                    className="auth-input"
                    style={{ paddingRight: '48px' }}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer transition-colors duration-200"
                    style={{ color: '#64748B' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0052FF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

        
              {form.password && (
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 flex-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-1.5 flex-1 rounded-full transition-all duration-300"
                        style={{
                          background:
                            form.password.length >= i * 3
                              ? form.password.length >= 12 
                                ? 'linear-gradient(to right, #0052FF, #4D7CFF)' // Strong - gradient
                                : form.password.length >= 8 
                                  ? '#0052FF' // Good - solid blue
                                  : '#4D7CFF' // Fair - lighter blue
                              : '#E2E8F0', // Unfilled - border color
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{
                      color: form.password.length >= 12 
                        ? '#0052FF'
                        : form.password.length >= 8 
                          ? '#0052FF'
                          : form.password.length >= 6 
                            ? '#4D7CFF'
                            : '#64748B',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px',
                    }}
                  >
                    {form.password.length >= 12 
                      ? 'Strong'
                      : form.password.length >= 8 
                        ? 'Good'
                        : form.password.length >= 6 
                          ? 'Fair'
                          : 'Weak'}
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl font-semibold flex items-center justify-center gap-2.5 transition-all duration-200 group relative overflow-hidden mt-6"
                style={{
                  background: loading 
                    ? 'linear-gradient(to right, rgba(0, 82, 255, 0.6), rgba(77, 124, 255, 0.6))' 
                    : 'linear-gradient(to right, #0052FF, #4D7CFF)',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  letterSpacing: '-0.01em',
                  boxShadow: loading 
                    ? 'none' 
                    : '0 4px 14px rgba(0, 82, 255, 0.25)',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 82, 255, 0.35)';
                    e.currentTarget.style.filter = 'brightness(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = loading 
                    ? 'none' 
                    : '0 4px 14px rgba(0, 82, 255, 0.25)';
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
                onMouseDown={(e) => {
                  if (!loading) e.currentTarget.style.transform = 'translateY(-2px) scale(0.98)';
                }}
                onMouseUp={(e) => {
                  if (!loading) e.currentTarget.style.transform = 'translateY(-2px) scale(1)';
                }}
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight 
                      size={18} 
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="flex-1 h-px" style={{ background: '#E2E8F0' }} />
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ 
                  color: '#64748B',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                or
              </span>
              <div className="flex-1 h-px" style={{ background: '#E2E8F0' }} />
            </div>

           
            <p
              className="text-center text-sm"
              style={{ color: '#64748B' }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold transition-all duration-200 inline-block"
                style={{ color: '#0052FF' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4D7CFF';
                  e.currentTarget.style.transform = 'translateX(2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#0052FF';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                Sign In
              </Link>
            </p>
          </div>

         
          <div
            className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl pointer-events-none hidden sm:block"
            style={{
              background: 'linear-gradient(135deg, #0052FF, #4D7CFF)',
              opacity: 0.08,
              boxShadow: '0 8px 32px rgba(0, 82, 255, 0.2)',
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Register
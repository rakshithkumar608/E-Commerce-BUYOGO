

const Input = ({ label, type = "text", ...props}) => {
  return (
    <div className="mb-5">
        <label className="block text-sm mb-2 text-slate-300">{label}</label>
        <input
        type={type}
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40 outline-none transition-all duration-300" 
        />
    </div>
  )
}

export default Input
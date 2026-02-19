const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full py-3 rounded-xl font-semibold bg-linear-to-r from-violet-600 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-lg shadow-violet-600/30"
    >
      {children}
    </button>
  );
};

export default Button;

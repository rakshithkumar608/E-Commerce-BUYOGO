import React from 'react';
import { MemoryRouter, NavLink, Routes, Route } from 'react-router-dom';
import { 
  LayoutGrid, 
  Layers, 
  Sparkles, 
  User, 
  Users, 
  Shirt,
  Settings,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  // Extracting navigation items into an array makes the JSX much cleaner
  const navItems = [
    { to: "/fashion", label: "Main Collection", icon: <LayoutGrid size={20} />, end: true },
    { to: "/fashion/collections", label: "Collections", icon: <Layers size={20} /> },
    { to: "/fashion/new-brands", label: "New Brands", icon: <Sparkles size={20} /> },
    { to: "/fashion/men", label: "Men", icon: <User size={20} /> },
    { to: "/fashion/women", label: "Women", icon: <Users size={20} /> },
    { to: "/fashion/streetwear", label: "Streetwear", icon: <Shirt size={20} /> },
  ];

  // Modern active/inactive styles with smooth transitions
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-out font-medium group ${
      isActive
        ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/20 translate-x-1"
        : "text-zinc-500 hover:bg-white hover:text-zinc-900 hover:shadow-sm hover:translate-x-1"
    }`;

  return (
    <aside className="h-screen w-72 bg-zinc-50/80 backdrop-blur-xl border-r border-zinc-200 p-6 flex flex-col justify-between overflow-y-auto">
      
      {/* Top Section */}
      <div>
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 px-2 mb-10 mt-2">
          <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-black text-xl leading-none tracking-tighter">F</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-zinc-900">Fashion.</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          <div className="px-4 pb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Discover
          </div>
          
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkStyle}>
              {/* Icon wrapper to ensure consistent alignment */}
              <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                {item.icon}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-1.5 pt-6 border-t border-zinc-200 mt-8">
         <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-out font-medium text-zinc-500 hover:bg-white hover:text-zinc-900 hover:shadow-sm">
            <Settings size={20} className="flex-shrink-0" />
            Settings
         </button>
         <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-out font-medium text-red-500/80 hover:bg-red-50 hover:text-red-600">
            <LogOut size={20} className="flex-shrink-0" />
            Logout
         </button>
      </div>
    </aside>
  );
};

// --- PREVIEW ENVIRONMENT ---
// This App component is just here to provide the Router context 
// so you can see the Sidebar working in the live preview.
export default function App() {
  return (
    <MemoryRouter initialEntries={['/fashion']}>
      <div className="flex min-h-screen bg-zinc-100 font-sans selection:bg-zinc-900 selection:text-white">
        <Sidebar />
        
        {/* Mock Main Content Area */}
        <main className="flex-1 p-10 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-zinc-900 mb-2">Dashboard</h1>
              <p className="text-zinc-500">
                Click the links in the sidebar to see the active states change.
              </p>
            </header>
            
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-zinc-100 h-[60vh] flex items-center justify-center border-dashed border-2">
              <Routes>
                <Route path="/fashion" element={<div className="text-2xl text-zinc-400 font-medium animate-pulse">Main Collection Content</div>} />
                <Route path="/fashion/collections" element={<div className="text-2xl text-zinc-400 font-medium animate-pulse">Collections Content</div>} />
                <Route path="/fashion/new-brands" element={<div className="text-2xl text-zinc-400 font-medium animate-pulse">New Brands Content</div>} />
                <Route path="/fashion/men" element={<div className="text-2xl text-zinc-400 font-medium animate-pulse">Men's Fashion Content</div>} />
                <Route path="/fashion/women" element={<div className="text-2xl text-zinc-400 font-medium animate-pulse">Women's Fashion Content</div>} />
                <Route path="/fashion/streetwear" element={<div className="text-2xl text-zinc-400 font-medium animate-pulse">Streetwear Content</div>} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </MemoryRouter>
  );
}
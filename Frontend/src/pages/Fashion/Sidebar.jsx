import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutGrid, 
  Layers, 
  Sparkles, 
  User, 
  Users, 
  Shirt,
  Settings,
  LogOut,
  ShoppingBasket,
  Package,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  // State to manage mobile sidebar open/close
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { 
        to: "/fashion", 
        label: "Main Collection", 
        icon: <LayoutGrid size={20} />, 
        end: true 
    },
    { 
        to: "/fashion/collections", 
        label: "Collections", 
        icon: <Layers size={20} /> 
    },
    { 
        to: "/fashion/new-brands",
        label: "New Brands", 
        icon: <Sparkles size={20} /> 
    },
    { 
        to: "/fashion/men", 
        label: "Men", 
        icon: <User size={20} /> 
    },
    { 
        to: "/fashion/women", 
        label: "Women", 
        icon: <Users size={20} />
    },
    { 
        to: "/fashion/streetwear",
        label: "Streetwear",
        icon: <Shirt size={20} /> 
    },
    {
        to: "/fashion/accessories",
        label: "Accessories",
        icon: <ShoppingBasket size={20}/>
    },
    {
        to: "/fashion/orders",
        label: "My Orders",
        icon: <Package size={20}/>
    },
  ];

  const linkStyle = ({ isActive }) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-out font-medium group ${
        isActive
        ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/20 translate-x-1"
        : "text-zinc-500 hover:bg-white hover:text-zinc-900 hover:shadow-sm hover:translate-x-1"
    }`;

  return (
    <>
      
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 p-2.5 bg-white border border-zinc-200 rounded-xl shadow-sm text-zinc-900 hover:bg-zinc-50 transition-colors"
      >
        <Menu size={24} />
      </button>

   
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-zinc-900/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 h-screen w-72 bg-zinc-50/80 backdrop-blur-xl border-r border-zinc-200 p-6 flex flex-col justify-center overflow-y-auto transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>

        <div>
            <div className="flex items-center justify-between px-2 mb-10 mt-2">
                <div className="flex items-center gap-3">
                    
                </div>
                
                {/* Mobile Close Button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="md:hidden p-2 text-zinc-500 hover:bg-zinc-200/50 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
            </div>

            <nav className="space-y-1.5">
              

                {navItems.map((item) =>  (
                    <NavLink 
                      key={item.to} 
                      to={item.to} 
                      end={item.end} 
                      className={linkStyle}
                      onClick={() => setIsOpen(false)} 
                    >
                        <span className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </div>

        <div className="space-y-1.5 pt-6 border-t border-zinc-200 mt-8">
         <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-out font-medium text-zinc-500 hover:bg-rose-500 hover:text-zinc-900 hover:shadow-sm">
            <Settings size={20} className="shrink-0" />
            Settings
         </button>
         <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-out font-medium text-black hover:bg-rose-500 hover:text-zinc-600">
            <LogOut size={20} className="shrink-0" />
            Logout
         </button>
      </div>
    </aside>
   </>
  );
}

export default Sidebar;
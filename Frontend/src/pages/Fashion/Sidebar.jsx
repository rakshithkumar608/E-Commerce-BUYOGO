import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutGrid, 
  Layers, 
  Sparkles, 
  User, 
  Users, 
  Shirt,
  Settings,
  LogOut,
  ShoppingBasket
} from 'lucide-react';

const Sidebar = () => {

    const navItems = [
        { 
            to: "/fashion", 
            label: "Main Collection", 
            icon: <LayoutGrid size={20} 
            />, 
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
             icon: <Sparkles size={20} 
             /> 
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
        }
      ];

      const linkStyle = ({ isActive }) => 
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-out font-medium group ${
            isActive
            ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/20 translate-x-1"
        : "text-zinc-500 hover:bg-white hover:text-zinc-900 hover:shadow-sm hover:translate-x-1"
        }`;

   return (
    <aside className="h-screen w-72 bg-zinc-50/80 backdrop-blur-xl border-r border-zinc-200 p-6 flex flex-col justify-center overflow-y-auto">

        <div>
            <div className="flex items-center gap-3 px-2 mb-10 mt-2">
                <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-black text-xl leading-none tracking-tighter">F</span>
                </div>
                <span className="font-bold text-2xl tracking-tight text-zinc-900">Fashion.</span>
            </div>

            <nav className="space-y-1.5">
                <div className="px-4 pb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Discover</div>

                {navItems.map((item) => (
                    <NavLink key={item.to} to={item.to} end={item.end} className={linkStyle}>
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
   )
}

export default Sidebar
import { useState } from "react"
import { Link } from "react-router-dom"
import Lottie from 'lottie-react'
import animationData from '../assets/lottie/LoginAnimation.json'

const Navbar = () => {

    const [menuState, setMenuState] = useState(false)

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userName = user?.name || "User";

    const navigation = [
        { title: "Fashion", path: "/Fashion" },
        { title: "Electronics", path: "/Electronics" },
        { title: "Store", path: "/Store" },
        { title: "Sports", path: "/Sports" },
    ]

    return (
        <nav className="bg-gray-200 border-0 rounded">
            <div className="flex items-center space-x-8 py-3 px-2 max-w-7xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <Link to="/">
                        <Lottie 
                        className="w-40 h-20"
                        animationData={animationData} loop/>
                    </Link>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={`uppercase absolute z-20 w-full top-16 left-0 p-4 border-b bg-white lg:static lg:block lg:border-none lg:bg-transparent ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-600 hover:text-gray-900 font-bold">
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* Mobile-only: Admin, Profile, and Cart below nav links */}
                        <div className="mt-5 pt-5 border-t lg:hidden bg-white flex items-center space-x-5">
                            <Link to="/Profile" className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-gray-900">
                                {user?.avatar ? (
                                    <img src={user.avatar} alt="" className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-200"/>
                                ) : (
                                    <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 text-white font-bold rounded-full border border-cyan-400">
                                        {userName.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <span>{userName}</span>
                            </Link>
                            <Link to="/Admin" className="text-white bg-black px-1 py-1  font-semibold rounded-md border-2 ">
                                Admin
                            </Link>
                            <Link to="/Cart" className="text-gray-600 hover:text-gray-900 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <form className="flex items-center space-x-2 border border-blue-400 hover:border-blue-600 rounded-md p-2 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-12 flex-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                                type="text"
                                placeholder="Search"
                            />
                        </form>
                        {/* Desktop: Admin, Cart, and Profile */}
                        <Link to="/Admin" className="hidden lg:block font-semibold bg-black text-white border-2 border-black rounded-md px-1 py-1">
                            Admin
                        </Link>
                        <Link to="/Cart" className="hidden lg:block text-gray-600 hover:text-gray-900 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                            </svg>
                        </Link>
                        <Link to="/Profile" className="hidden lg:block">
                            {user?.avatar ? (
                                <img src={user.avatar} alt="" className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-200 ring-offset-2 hover:ring-indigo-600 transition-all"/>
                            ) : (
                                <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 text-white font-bold rounded-full border border-cyan-400 ring-2 ring-gray-200 ring-offset-2 hover:ring-indigo-600 transition-all">
                                    {userName.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </Link>
                        <button 
                            className="outline-none text-gray-600 font-semibold block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
  
}

export default Navbar

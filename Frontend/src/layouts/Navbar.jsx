import { useState, useRef, useEffect } from "react"
import Lottie from 'lottie-react'
import animationData from '../assets/lottie/LoginAnimation.json'


const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    const navigation = [
        { title: "Admin", path: "/Admin" },
        { title: "Profile", path: "/Profile" },
        
    ]

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userName = user?.name || "User";
    const userEmail = user?.email || "";



    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

  return (
    <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                <button
                    className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    {user?.avatar ? (
                        <img src={user.avatar} alt="" className="w-full h-full object-cover rounded-full"/>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-cyan-500 text-white font-bold rounded-full">
                            {userName.charAt(0).toUpperCase()}
                        </div>
                    )}
                </button>
                <div className="lg:hidden">
                    <span className="block">{userName}</span>
                    <span className="block text-sm text-gray-500">{userEmail}</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li>
                            <a key={idx} className="block text-gray-600 font-semibold lg:hover:bg-gray-50 lg:p-2.5" href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
const Navbar = () => {

    const [menuState, setMenuState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Fashion", path: "/Fashion" },
      { title: "Electronics", path: "/Electronics" },
      { title: "Food & Health", path: "/Food & Health" },
      { title: "Sports", path: "/Sports" },
  ]
    return (
        <nav className="bg-gray-200 border-0 rounded ">
            <div className="flex items-center space-x-8 py-3 px-2 max-w-7xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <a href="javascript:void(0)">
                        <Lottie 
                        className="w-40 h-20"
                        animationData={animationData} loop/>
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-between ">
                    <div className={`uppercase absolute z-20 w-full top-16 left-0 p-4 border-b bg-white lg:static lg:block lg:border-none lg:bg-transparent ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-600 hover:text-gray-900 font-bold">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ProfileDropDown 
                            class="mt-5 pt-5 border-t lg:hidden bg-white"
                        />
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6 ">
                        <form className="flex items-center space-x-2 border border-blue-400 hover:blue-600 rounded-md p-2 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-12 flex-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                                type="text"
                                placeholder="Search"
                            />
                        </form>
                        <ProfileDropDown 
                            class="hidden lg:block"
                        />
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



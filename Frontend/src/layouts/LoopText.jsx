import React from 'react'

const LoopText = () => {
  return (
    <div className='relative w-full overflow-hidden bg-linear-to-r from-black via-gray-900 to-black py-5 mt-5'>

     <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-10"></div>   

     <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-10"></div>

     <div className="flex w-max animate-marquee whitespace-nowrap">

        <div className="flex items-center gap-14 px-8 text-white text-lg md:text-xl font-semibold tracking-widest uppercase cursor-pointer">
            <span>Fresh Groceries </span>
            <span className="text-gray-500">•</span>
            <span>Organic Vegetables</span>
            <span className="text-gray-500">•</span>
            <span>Designer Dresses</span>
            <span className="text-gray-500">•</span>
            <span>Premium Sneakers </span>
            <span className="text-gray-500">•</span>
            <span>Sports Equipment</span>
            <span className="text-gray-500">•</span>
            <span>Fitness Gear</span>
            <span className="text-gray-500">•</span>
            <span>Smart Watches</span>
            <span className="text-gray-500">•</span>
            <span>Home Essentials</span>
            <span className="text-gray-500">•</span>
            <span>Kitchen Appliances</span>
            <span className="text-gray-500">•</span>
            <span>Gaming Accessories</span>
            <span className="text-gray-500">•</span>
            <span>Kids Fashion</span>
            <span className="text-gray-500">•</span>
            <span> Winter Collection </span>
            <span className="text-gray-500">•</span>
            <span>Daily Deals</span>
        </div>

        <div className="flex items-center gap-16 px-8 text-white text-lg md:text-xl font-semibold tracking-widest uppercase cursor-pointer">
            <span>Farm Fresh Fruits</span>
            <span className="text-gray-500">•</span>
            <span>Organic Groceries</span>
            <span className="text-gray-500">•</span>
            <span>Luxury Fashion</span>
            <span className="text-gray-500">•</span>
            <span>Running Shoes</span>
            <span className="text-gray-500">•</span>
            <span>Smart Gadgets</span>
            <span className="text-gray-500">•</span>
            <span>Travel Accessories </span>
            <span className="text-gray-500">•</span>
            <span>Home Decor</span>
            <span className="text-gray-500">•</span>
            <span>Summer Sale 2026</span>
        </div>
     </div>
    </div>
  )
}

export default LoopText
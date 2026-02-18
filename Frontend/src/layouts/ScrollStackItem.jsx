import { ScrollStackItem as ScrollStackItemWrapper } from "../component/ScrollStack";

const gradients = [
  "bg-linear-to-r from-rose-500 via-pink-500 to-fuchsia-500",
  "bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600",
  "bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500",
  "bg-linear-to-r from-amber-500 via-orange-500 to-red-500",
  "bg-linear-to-r from-slate-800 via-gray-900 to-zinc-900",
];

const buttonColors = [
  "text-pink-600 hover:bg-pink-100",
  "text-purple-600 hover:bg-purple-100",
  "text-teal-600 hover:bg-teal-100",
  "text-orange-600 hover:bg-orange-100",
  "",
];

const ScrollStackItems = [
  {
    title: "⚡Flash Sale",
    description: "Up to 70% OFF",
    subtitle: "Premium electronics, gadgets & accessories. Limited time only — grab before it's gone!",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=350&fit=crop",
    button: "Shop Now →",
  },
  {
    title: "👑 Members Only",
    description: "Exclusive 50% OFF",
    subtitle: "Luxury fashion brands at unbelievable prices. Sign up & unlock exclusive member deals today.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=350&fit=crop",
    button: "Join & Save →",
  },
  {
    title: "🌿 Seasonal Sale",
    description: "Clearance Event",
    subtitle: "Fresh groceries, organic produce & health essentials. Stock up and save big this season!",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=350&fit=crop",
    button: "Explore Deals →",
  },
  {
    title: "🚚 Free Shipping",
    description: "Zero Delivery Fees",
    subtitle: "Free shipping on all orders above ₹499. Sports gear, fitness equipment & activewear.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=350&fit=crop",
    button: "Order Now →",
  },
  {
    title: "✨ Just Dropped",
    description: "New Arrivals 2026",
    subtitle: "Be the first to shop the latest collection. Smart gadgets, sneakers & premium accessories.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=350&fit=crop",
    button: "Discover →",
  },
];

const ScrollStackItemList = () => {
  return (
    <>
      {ScrollStackItems.map((item, index) => (
        <ScrollStackItemWrapper key={index}>
          <div
            className={`flex flex-col md:flex-row items-center justify-between h-full ${gradients[index]} rounded-[40px] p-8 md:p-12 text-white overflow-hidden ${index === 4 ? "border border-white/10" : ""}`}
          >
            <div className="flex-1 z-10">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wider font-serif">
                {item.title}
              </span>
              <h3 className="text-3xl md:text-5xl font-black mb-3 font-serif">
                {item.description}
              </h3>
              <p className="text-white/80 text-base md:text-lg mb-6 max-w-md font-sans">
                {item.subtitle}
              </p>
              <button
                className={`font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg text-lg cursor-pointer ${
                  index === 4
                    ? "bg-cyan-400 text-gray-900 hover:bg-cyan-300"
                    : `bg-white  ${buttonColors[index]}`
                }`}
              >
                {item.button}
              </button>
            </div>
            <div className="flex-1 flex justify-center mt-6 md:mt-0">
              <img
                src={item.image}
                alt={item.description}
                className="w-64 h-48 md:w-80 md:h-60 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </ScrollStackItemWrapper>
      ))}
    </>
  );
};

export default ScrollStackItemList;

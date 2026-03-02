import React from 'react';
import TextType from "../../../component/TextType";


const floatingBrands = [
  // Clothing Brands
  { id: 1, name: 'NIKE', logo: 'https://www.citypng.com/public/uploads/preview/black-nike-logo-transparent-background-701751694777156f3ewilq1js.png', top: '8%', left: '8%', delay: '0s', duration: '7s', size: 90 },
  { id: 2, name: 'ADIDAS', logo: 'https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png', top: '12%', left: '75%', delay: '1.2s', duration: '8s', size: 80 },
  { id: 3, name: 'ZARA', logo: 'https://logo.clearbit.com/zara.com?size=120', top: '38%', left: '4%', delay: '0.6s', duration: '6.5s', size: 95 },
  { id: 4, name: 'H&M', logo: 'https://logo.clearbit.com/hm.com?size=120', top: '70%', left: '10%', delay: '1.8s', duration: '7.5s', size: 82 },
  { id: 5, name: 'GUCCI', logo: 'https://logo.clearbit.com/gucci.com?size=120', top: '82%', left: '42%', delay: '2.4s', duration: '8.5s', size: 88 },
  { id: 6, name: 'PUMA', logo: 'https://logo.clearbit.com/puma.com?size=120', top: '5%', left: '42%', delay: '0.4s', duration: '6.8s', size: 78 },
  { id: 7, name: "LEVI'S", logo: 'https://logo.clearbit.com/levi.com?size=120', top: '60%', left: '22%', delay: '2s', duration: '7.2s', size: 80 },

  // Gadget Brands
  { id: 8, name: 'APPLE', logo: 'https://logo.clearbit.com/apple.com?size=120', top: '30%', left: '82%', delay: '0.8s', duration: '9s', size: 92 },
  { id: 9, name: 'SAMSUNG', logo: 'https://logo.clearbit.com/samsung.com?size=120', top: '72%', left: '75%', delay: '1.5s', duration: '6.2s', size: 84 },
  { id: 10, name: 'SONY', logo: 'https://logo.clearbit.com/sony.com?size=120', top: '55%', left: '65%', delay: '0.3s', duration: '7.8s', size: 78 },
];

// ==========================================
// Animation Styles
// ==========================================
const customStyles = `
  @keyframes brand-drift {
    0%   { transform: translateY(0px) translateX(0px) scale(1); }
    25%  { transform: translateY(-14px) translateX(8px) scale(1.02); }
    50%  { transform: translateY(-6px) translateX(-10px) scale(0.98); }
    75%  { transform: translateY(10px) translateX(6px) scale(1.01); }
    100% { transform: translateY(0px) translateX(0px) scale(1); }
  }

  .brand-float {
    animation: brand-drift var(--dur) ease-in-out infinite;
    animation-delay: var(--del);
  }

  .brand-float:hover {
    animation-play-state: paused;
    z-index: 50;
  }
`;

// ==========================================
// Main Component
// ==========================================
const NewBrands = () => {
  return (
    <>
      <style>{customStyles}</style>

      <div
        className="relative overflow-hidden flex items-center justify-center min-h-screen w-full"
        style={{
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        }}
      >

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Brand Logos */}
        <div className="absolute inset-0 z-0">
          {floatingBrands.map((brand) => (
            <div
              key={brand.id}
              className="absolute brand-float"
              style={{
                top: brand.top,
                left: brand.left,
                '--dur': brand.duration,
                '--del': brand.delay,
              }}
            >
              <div className="group relative cursor-pointer transition-all duration-300 ease-out hover:scale-110">
                {/* White circular logo container */}
                <div
                  className="rounded-full bg-white flex items-center justify-center 
                    shadow-lg group-hover:shadow-2xl group-hover:shadow-white/20
                    transition-all duration-300 overflow-hidden p-4"
                  style={{
                    width: brand.size,
                    height: brand.size,
                  }}
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Brand name tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-9 opacity-0 group-hover:opacity-100 
                  transition-all duration-300 group-hover:-bottom-8 pointer-events-none">
                  <span className="bg-white text-gray-900 text-[11px] font-bold tracking-widest px-3 py-1.5 
                    rounded-full whitespace-nowrap shadow-lg">
                    {brand.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Typing Text */}
        <div className="relative z-10 w-full max-w-5xl px-6 flex justify-center pointer-events-none">
          <TextType
            text="New Brands Coming Soon 🌟 Pick Your Favorites"
            typingSpeed={50}
            deletingSpeed={30}
            pauseDuration={2000}
            loop
            showCursor
            cursorCharacter="|"
            cursorClassName="text-yellow-500"
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight drop-shadow-2xl"
          />
        </div>

      </div>
    </>
  );
};

export default NewBrands;
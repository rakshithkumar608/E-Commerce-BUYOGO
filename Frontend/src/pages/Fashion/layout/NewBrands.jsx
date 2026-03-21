import React from 'react';
import { Link } from 'react-router-dom';
import nike from "../../../assets/images/logos/nike.png";
import adidas from "../../../assets/images/logos/adidas.png";
import zara from "../../../assets/images/logos/zara.png";
import hm from "../../../assets/images/logos/hm.png";
import gucci from "../../../assets/images/logos/gucci.png";
import puma from "../../../assets/images/logos/puma.png";
import levi from "../../../assets/images/logos/levi.png";
import apple from "../../../assets/images/logos/apple.png";
import samsung from "../../../assets/images/logos/samsung.png";
import sony from "../../../assets/images/logos/sony.png";

const brands = [
  { name: "Nike", logo: nike, link: "/fashion/men", tag: "Fashion", color: "#111" },
  { name: "Adidas", logo: adidas, link: "/fashion/men", tag: "Fashion", color: "#1a1a2e" },
  { name: "Zara", logo: zara, link: "/fashion/women", tag: "Fashion", color: "#2d3436" },
  { name: "H&M", logo: hm, link: "/fashion/women", tag: "Fashion", color: "#0c3547" },
  { name: "Gucci", logo: gucci, link: "/fashion/accessories", tag: "Luxury", color: "#1a1a2e" },
  { name: "Puma", logo: puma, link: "/fashion/streetwear", tag: "Sports", color: "#111" },
  { name: "Levi's", logo: levi, link: "/fashion/men", tag: "Denim", color: "#2d3436" },
  { name: "Apple", logo: apple, link: "/electronics/smartphones", tag: "Tech", color: "#0c3547" },
  { name: "Samsung", logo: samsung, link: "/electronics/smartphones", tag: "Tech", color: "#1a1a2e" },
  { name: "Sony", logo: sony, link: "/electronics/headphones", tag: "Audio", color: "#111" },
];

const NewBrands = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white bg-black px-4 py-1.5 rounded-full mb-6">
            Coming Soon
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            New Brands
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl mx-auto font-medium">
            Explore our curated selection of premium brands across fashion, tech, and lifestyle.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-black rounded-full" />
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to={brand.link}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                style={{ background: brand.color }}
              />

              {/* Tag */}
              <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">
                {brand.tag}
              </span>

              {/* Logo */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative z-10">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <span className="text-sm sm:text-base font-bold text-gray-900 tracking-tight relative z-10">
                {brand.name}
              </span>

              {/* Arrow indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm text-gray-400 font-medium mb-4">
            More brands arriving every season
          </p>
          <Link
            to="/store"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors shadow-lg shadow-gray-300"
          >
            Visit Store
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewBrands;
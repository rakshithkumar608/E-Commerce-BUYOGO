import TiltedCard from '../../../component/TiltedCard';
import { Link } from "react-router-dom";

export default function MainCollection() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen flex flex-col justify-center'>
    <div className="max-w-7xl mx-auto w-full">
      
      <div className='text-center mb-16'>
      <h2 className="text-4xl md:text-5xl text-gray-900  font-bold">
        Fashion Collections
      </h2>

      <div className="mt-6 w-24 h-1.5 bg-indigo-600 mx-auto rounded-full opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

        <Link to="/fashion/men"
        className="group block focus:outline-none focus:ring-4 focus:ring-indigo-300 rounded-3xl transition-all duration-300 ease-in-out"
        >
          <div className="transition-transform duration-300 group-hover:-translate-y-3">
                        <TiltedCard
                          imageSrc="https://i.pinimg.com/736x/85/3b/da/853bdaf3aa0f50676c426faa82d5ff4f.jpg"
                          altText="Men"
                          captionText="Men Collection"
                          imageWidth="100%"
                          imageHeight="350px"
                        />
                      </div>
        </Link>

       

        <Link 
                    to="/fashion/women" 
                    className="group block focus:outline-none focus:ring-4 focus:ring-indigo-300 rounded-3xl transition-all duration-300 ease-in-out"
                  >
                    <div className="transition-transform duration-300 group-hover:-translate-y-3">
                      <TiltedCard
                        imageSrc="https://img.freepik.com/premium-photo/fashion-clothes-style-black-woman-with-green-rap-gen-z-hip-hop-aesthetic-outfit-cool-edgy-fashionable-look-designer-brand-apparel-attitude-teen-fashion-model-green-background_590464-98135.jpg"
                        altText="Women"
                        captionText="Women Collection"
                        imageWidth="100%"
                        imageHeight="350px"
                      />
                    </div>
                  </Link>
        
                  <Link 
                    to="/fashion/streetwear" 
                    className="group block focus:outline-none focus:ring-4 focus:ring-indigo-300 rounded-3xl transition-all duration-300 ease-in-out"
                  >
                    <div className="transition-transform duration-300 group-hover:-translate-y-3">
                      <TiltedCard
                        imageSrc="https://i.pinimg.com/564x/47/4d/aa/474daa2d11f798b8915147b89f4e3eae.jpg"
                        altText="Streetwear"
                        captionText="Streetwear"
                        imageWidth="100%"
                        imageHeight="350px"
                      />
                    </div>
                  </Link>
        
                  <Link 
                    to="/fashion/accessories" 
                    className="group block focus:outline-none focus:ring-4 focus:ring-indigo-300 rounded-3xl transition-all duration-300 ease-in-out"
                  >
                    <div className="transition-transform duration-300 group-hover:-translate-y-3">
                      <TiltedCard
                        imageSrc="https://images.stockcake.com/public/9/6/1/961caa91-5403-4764-8e61-f27e9ef3df58_large/elegant-accessories-display-stockcake.jpg"
                        altText="Accessories"
                        captionText="Accessories"
                        imageWidth="100%"
                        imageHeight="350px"
                      />
                    </div>
                  </Link>
        

      </div>
    </div>
    </section>
  );
}
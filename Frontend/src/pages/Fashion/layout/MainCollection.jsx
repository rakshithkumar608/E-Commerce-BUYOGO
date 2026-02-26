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
                          imageSrc="https://images.unsplash.com/photo-1516822003754-cca485356ecb"
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
                        imageSrc="https://images.unsplash.com/photo-1520975916090-3105956dac38"
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
                        imageSrc="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
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
                        imageSrc="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
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
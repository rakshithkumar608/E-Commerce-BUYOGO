import Navbar from "./Navbar";
import Hero from "./Hero";
import LoopText from "./LoopText";
import CircularGallery from "../component/CircularGallery";
import ScrollStack from "../component/ScrollStack";
import ScrollStackItemList from "../layouts/ScrollStackItem";
import Footer from "./Footer";
import MainButton from "../component/MainButton";

const Dashboard = () => {


  return (
    <div>
        <Navbar />
        <Hero />
        <LoopText />
        
        {/* Top Deals Section */}
        <section className="bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4 ">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white bg-clip-text text-transpa tracking-tight uppercase ">
              Top Deals
            </h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-cyan-400 rounded-full"></div>
            <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl mx-auto font-semibold">
              Discover the best deals curated just for you
            </p>
          </div>
          <div className="w-full h-[600px]">
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>

          <div className="flex justify-center mt-8">
           
           <MainButton buttonName="Explore More Top Deals" />

          </div>
        </section>

        {/* Featured Offers - ScrollStack */}
        <section className="bg-linear-to-b from-gray-100 to-white">
          <div className="text-center pt-16 pb-4 px-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight uppercase">
              Featured Offers
            </h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-cyan-400 rounded-full"></div>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto font-medium">
              Scroll through our exclusive limited-time deals
            </p>
          </div>

          <ScrollStack>
            <ScrollStackItemList />
          </ScrollStack>
        </section>

        <Footer />
    </div>
  );
};

export default Dashboard;

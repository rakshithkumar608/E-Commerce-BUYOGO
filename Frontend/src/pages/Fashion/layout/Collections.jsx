import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MainButton from "../../../component/MainButton";


import heroImg from "../../../assets/images/men/bg.avif";
import womenImg from "../../../assets/images/men/women-1.jpg";
import menImg from "../../../assets/images/men/men4.avif";
import accessoriesImg from "../../../assets/images/men/acc.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const Collections = () => {
  return (

    <div className="bg-[#f8f6f2] text-gray-900">
    
      <section className="relative h-150 overflow-hidden">

        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="Luxury Collection"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-10 text-white">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black/60 leading-tight tracking-wide"
            >
              The Fall <br /> Collection
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-gray-200 text-xl font-semibold"
            >
              Refined silhouettes. Timeless craftsmanship.
              Designed for those who appreciate elegance.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/fashion/women"
                className="inline-block mt-10 px-8 py-3 tracking-widest uppercase hover:text-black transition duration-500 text-xl font-semibold"
              >
               <MainButton buttonName="Explore Now" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    
      <section className="max-w-6xl mx-auto px-4 sm:px-10 py-16 sm:py-28 grid md:grid-cols-2 gap-10 sm:gap-16 items-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl  leading-snug font-semibold"
        >
          Crafted with Precision.
          <br /> Designed for Distinction.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          Every piece reflects our dedication to detail.
          Premium fabrics meet contemporary design,
          creating collections that transcend trends.
        </motion.p>

      </section>

     
      <section className="max-w-6xl mx-auto px-4 sm:px-10 pb-20 sm:pb-32 grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-14">

        {[{
          title: "Women",
          img: womenImg,
          link: "/fashion/women"
        },
        {
          title: "Men",
          img: menImg,
          link: "/fashion/men"
        },
        {
          title: "Accessories",
          img: accessoriesImg,
          link: "/fashion/accessories"
        }].map((item, index) => (

          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Link to={item.link} className="group block">

              <div className="overflow-hidden rounded-lg">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={item.img}
                  alt={item.title}
                  className="w-full h-112.5 object-cover"
                />
              </div>

              <h3 className="mt-6 text-2xl font-light tracking-wide">
                {item.title}
              </h3>

              <div className="h-px bg-gray-300 mt-4 group-hover:bg-black transition duration-500"></div>

            </Link>
          </motion.div>

        ))}

      </section>

    </div>
  );
};

export default Collections;
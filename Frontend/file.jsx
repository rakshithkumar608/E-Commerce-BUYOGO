import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImg from "../../../assets/images/collections/hero.jpg";
import womenImg from "../../../assets/images/women/women1.avif";
import menImg from "../../../assets/images/men/men1.avif";
import accessoriesImg from "../../../assets/images/accessories/acc1.avif";

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

      {/* ================= HERO ================= */}
      <section className="relative h-[600px] overflow-hidden">

        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="Luxury Collection"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-6xl mx-auto px-10 text-white">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-6xl md:text-7xl font-light leading-tight tracking-wide"
            >
              The Fall <br /> Collection
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-lg text-gray-200"
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
                className="inline-block mt-10 border border-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition duration-500"
              >
                Explore Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto px-10 py-28 grid md:grid-cols-2 gap-16 items-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl font-light leading-snug"
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

      {/* ================= COLLECTION CARDS ================= */}
      <section className="max-w-6xl mx-auto px-10 pb-32 grid md:grid-cols-3 gap-14">

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
                  className="w-full h-[450px] object-cover"
                />
              </div>

              <h3 className="mt-6 text-2xl font-light tracking-wide">
                {item.title}
              </h3>

              <div className="h-[1px] bg-gray-300 mt-4 group-hover:bg-black transition duration-500"></div>

            </Link>
          </motion.div>

        ))}

      </section>

    </div>
  );
};

export default Collections;
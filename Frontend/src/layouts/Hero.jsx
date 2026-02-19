import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainButton from "../component/MainButton";



export const RevealLinks = () => {
  const images = [
    "https://watermark.lovepik.com/photo/20211127/large/lovepik-fashion-girls-with-shopping-bags-picture_501157950.jpg",
    "https://i.pinimg.com/736x/77/88/21/778821dc8676de592828ffded2ff95e5.jpg",
    "https://valuehubkenya.co.ke/wp-content/uploads/2025/11/Best-gadgets-for-young-professionals-Kenya-value-hub-kenya1.png",
    "https://cdn.confident-group.com/wp-content/uploads/2018/04/23150515/COVER-10-Furniture-Essentials-For-Every-Home.jpg",
    "https://thegadgetflow.com/wp-content/uploads/2023/03/Razer-Kishi-V2-mobile-gaming-controller-for-Android-01-1024x576.jpeg",
    "https://cdn.printnetwork.com/production/assets/5966561450122033bd4456f8/imageLocker/blog-description/blog/sales_banners.jpg"


  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <>
      <section className="relative grid place-content-center gap-2 px-8 py-24 text-black overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${images[index]}')` }}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="relative z-10">
          <FlipLink className="text-black" mobileDelay={0}>
            Modern way
          </FlipLink>
          <FlipLink className="text-black" mobileDelay={500}>
            Gadgets
          </FlipLink>
          <FlipLink className="text-black" mobileDelay={1000}>
            Food & Grains
          </FlipLink>
          <FlipLink className="text-black" mobileDelay={1500}>
            Sports Time
          </FlipLink>
          <div className="flex justify-center mt-8">
            <MainButton buttonName="Shop Now" />
          </div>
        </div>
      </section>
    </>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, className, mobileDelay = 0 }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      if (isFlipped) {
        setIsFlipped(false);
      }
      return;
    }

    let intervalId;

    const startTimeout = setTimeout(() => {
      setIsFlipped(true);
      setTimeout(() => setIsFlipped(false), 800);

      intervalId = setInterval(() => {
        setIsFlipped(true);
        setTimeout(() => setIsFlipped(false), 800);
      }, 3000);
    }, mobileDelay);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isFlipped, isMobile, mobileDelay]);

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      animate={isMobile && isFlipped ? "hovered" : "initial"}
      href={href}
      className={`cursor-pointer relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl ${className}`}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealLinks;

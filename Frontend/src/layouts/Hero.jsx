import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <>
    <section 
    className="grid place-content-center gap-2 px-8 py-24 text-black bg-cover bg-center bg-no-repeat"
    style={{
        backgroundImage: "url('https://watermark.lovepik.com/photo/20211127/large/lovepik-fashion-girls-with-shopping-bags-picture_501157950.jpg')"
    }}
    >
      <FlipLink className="text-black" mobileDelay={0}>Modern way </FlipLink>
      <FlipLink className="text-black" mobileDelay={500}>Gadgets</FlipLink>
      <FlipLink className="text-black" mobileDelay={1000}>Food & Grains</FlipLink>
      <FlipLink className="text-black" mobileDelay={1500}>Sports Time</FlipLink>
      <div className="flex justify-center mt-8">
        <motion.button
          className="bg-white text-black py-3 px-8 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase hover:bg-cyan-300 hover:text-black transition-all duration-300 shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Shop Now
        </motion.button>
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
import { useRef } from "react";
import { HeroIllustration, phoneCall } from "../assets";
import { motion, useScroll, useTransform } from "framer-motion";
import TechStack from "./TechStack";

const Hero = () => {
  const isMobile = window.innerWidth <= 768;

  const headingVariant = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const supportingDivVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 3, delay: 0.2 } },
  };

  const phoneVariants = {
    initial: { rotate: 0, translateY: 0 },
    ringing: {
      rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
      translateY: [0, -2, -4, -2, 0],
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <motion.section
      id="hero"
      ref={targetRef}
      style={isMobile ? {} : { opacity, scale }}
      className="xl:h-screen xl:mt-10"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2 xl:gap-4">
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-7xl font-semibold text-charcoal"
            initial="hidden"
            animate="show"
            variants={headingVariant}
          >
            {`I'm Jess Corda`.split("").map((char, index) => {
              return char === " " ? (
                " "
              ) : (
                <motion.span
                  variants={headingVariant}
                  transition={{ duration: 0.5 }}
                  key={index}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
          <p className="text-2xl text-payne-gray font-ptserif">
            a frontend developer with 5 years of experience
          </p>{" "}
          <motion.p
            variants={supportingDivVariants}
            initial="hidden"
            animate="show"
            className="mt-6 text-base text-payne-gray"
          >
            I love working with cross-functional teams to create seamless
            digital interfaces with a focus on usability and aesthetics. I
            believe that great design has the power to delight and inspire, and
            I'm always excited to take on new challenges and push the boundaries
            of what's possible. So, let's collaborate and create something
            amazing!
          </motion.p>
          <motion.div
            variants={supportingDivVariants}
            initial="hidden"
            animate="show"
          >
            {" "}
            <TechStack />
          </motion.div>
        </div>
        <div className="flex items-center justify-center relative">
          <img
            className="scale-100"
            src={HeroIllustration}
            alt="hero section illustration"
          />
          <motion.button
            variants={phoneVariants}
            initial="initial"
            animate="ringing"
            className="p-2 bg-melon rounded-full absolute left-[7rem] bottom-[6rem] md:left-[15.5rem] md:bottom-[10rem] lg:left-[9.5rem] lg:bottom-[10rem] xl:left-[13rem] xl:bottom-[12rem]"
          >
            <a href="#contact">
              <img
                src={phoneCall}
                alt="phone ringing"
                className="max-w-[1rem] max-h-[1rem]"
              />
            </a>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

import Logo from "./Logo";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Navbar = () => {
  const isMobile = window.innerWidth <= 1024;

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const logo = {
    top: useTransform(scrollYProgress, [0, 0.2, 0.5], ["4%", "40%", "50%"]),
    left: useTransform(scrollYProgress, [0, 0.5], ["10%", "4%"]),
  };

  const experienceMenuItem = {
    top: useTransform(scrollYProgress, [0, 0.2, 0.5], ["4%", "36%", "46%"]),
    right: useTransform(scrollYProgress, [0, 0.2, 0.5], ["20%", "9%", "2%"]),
  };

  const contactMenuItem = {
    top: useTransform(scrollYProgress, [0, 0.2, 0.5], ["4%", "46%", "56%"]),
    right: useTransform(
      scrollYProgress,
      [0, 0.2, 0.5],
      ["13%", "10.5%", "3.5%"]
    ),
  };

  return (
    <header
      id="top"
      ref={targetRef}
      className="header text-charcoal md:max-w-[90%] xl:max-w-[80%] m-auto px-4 xl:px-0"
    >
      <nav className="pt-10 pb-5 flex justify-between items-center">
        <motion.div
          style={
            isMobile
              ? {}
              : {
                  position: "fixed",
                  ...logo,
                }
          }
        >
          <a href="#top">
            <Logo />
          </a>
        </motion.div>
        <ul className="flex gap-6">
          <motion.li
            style={
              isMobile
                ? {}
                : {
                    ...experienceMenuItem,
                    position: "fixed",
                    zIndex: 10,
                  }
            }
          >
            <a href="#experience" className="highlight">
              Experience
            </a>
          </motion.li>
          <motion.li
            style={
              isMobile
                ? {}
                : {
                    ...contactMenuItem,
                    position: "fixed",
                    zIndex: 10,
                  }
            }
          >
            <a href="#contact" className="highlight">
              Contact
            </a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

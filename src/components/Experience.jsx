import { useRef } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants/experiences";
import ExperienceCard from "./ExperienceCard";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
  const isMobile = window.innerWidth <= 768;

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const titleStyles = {
    opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
    translateX: useTransform(scrollYProgress, [0, 0.3], [-300, 0]),
    translateY: useTransform(scrollYProgress, [0, 0.4], [0, -100]),
  };

  const timelineStyles = {
    opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    translateX: useTransform(scrollYProgress, [0, 0.3], [100, 0]),
  };

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="relative"
    >
      <motion.h2
        style={isMobile ? {} : { ...titleStyles }}
        className="text-4xl text-charcoal"
      >
        What I have done so far
      </motion.h2>
      <motion.div
        style={isMobile ? {} : { ...timelineStyles }}
        className="flex flex-col"
      >
        <VerticalTimeline animate={false} lineColor="#f2bdb3">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </motion.section>
  );
};

export default Experience;

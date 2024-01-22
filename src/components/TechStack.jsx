import { useState } from "react";
import { technologies } from "../constants/technologies";
import Ticker from "framer-motion-ticker";

const TechStack = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="mt-6 text-base text-payne-gray">
      <p>Tools I am working with</p>
      <Ticker
        duration={40}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        isPlaying={isPlaying}
      >
        {technologies.map((technology, index) => (
          <TechnologyCard key={index} {...technology} />
        ))}
      </Ticker>
    </div>
  );
};

const TechnologyCard = ({ name, icon }) => {
  return (
    <div className="rounded-3xl mx-1 p-4 flex shadow-sm bg-gray-50">
      <div>
        <img
          src={icon}
          alt={name}
          width={24}
          height={24}
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default TechStack;

import { Experience, Hero, Contact } from "../components";

const Home = () => {
  return (
    <div className="md:max-w-[90%] px-4 xl:px-0 xl:max-w-[80%] m-auto relative">
      <Hero />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;

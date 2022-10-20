import BaseSearch from "../components/BaseSearch";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      animate={{ translateY: "0" }}
      exit={{ translateY: "-105vh" }}
      transition={{ ease: "easeIn", duration: 1.25 }}
    >
      <div className="bg-[url('./assets/images/milky-way.jpg')] bg-cover bg-center w-full h-[100vh] overflow-hidden flex flex-col justify-center items-center gap-4">
        <h1 className="text-white font-black text-6xl md:text-7xl lg:text-8xl">
          Space Explorer
        </h1>
        <p className="text-white text-center font-bold px-6 max-w-[28rem] md:max-w-[50vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <BaseSearch />
      </div>
    </motion.div>
  );
}

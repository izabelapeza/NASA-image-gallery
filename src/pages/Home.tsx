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
        <p className="text-white text-center px-6 max-w-[28rem] md:max-w-[50vw] text-md lg:text-lg">
          Explore endless space with NASA Api.
          <br />
          Enter a phrase that interests you and search for planets, stars,
          galaxies and more.
        </p>
        <BaseSearch onlyLightSearch={true} />
      </div>
    </motion.div>
  );
}

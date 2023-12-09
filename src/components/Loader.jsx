import React from "react";
import { motion } from "framer-motion";
import { BarLoader } from "react-spinners";
// import logo from "../assets/cocos.png";
const Loader = () => {
  return (
    <div className="min-h-screen transition-all flex justify-center items-center bg-[#000000]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0.7, scale: 0 },
          visible: { opacity: 1, scale: 1.25 },
        }}
        className="lg:w-[30%] md:w-[70%] w-[30%] rounded-full h-full mb-6 object-cover"
        style={{ filter: "grayscale(100%) invert(100%)" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        </div>
      </motion.div>
      <BarLoader
        size={100}
        color="#ffffff"
        width="lg:550 md:200"
        speedMultiplier="1"
      />
    </div>
  );
};

export default Loader;

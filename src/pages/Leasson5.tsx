import { useRef } from "react";

import { motion } from "framer-motion";

const parant = {
  hidden: { x: 0, y: 0, opacity: 0 },
  visible: {
    opacity: 1,
    x: [0, 300, -300, 0],
    y: [0, 300, -300, 0],
    rotate: [0, 300, -300, 0],
    transition: {
      ease: "linear",
      repeat: Infinity,
      duration: 5,
      opacity: {
        duration: 0.2,
      },
      rotate: { delay: 1, repeat: Infinity },
    },
  },
  hover: { opacity: 1 },
  tap: { scale: 1.1, boxShadow: "0px 5px 10px #000" },
};
const Leasson5 = () => {
  const parentRef = useRef(null);
  return (
    <div className="main ">
      <div
        ref={parentRef}
        className="size-[500px] flex justify-center items-center border border-red-500"
      >
        <motion.div
          className="size-64  bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-5 p-3"
          variants={parant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          drag
          dragElastic={0.6}
          dragConstraints={parentRef}
          whileTap="tap"
          // whileDrag={{ scale: 1.1, boxShadow: "0px 5px 10px #000" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Leasson5;

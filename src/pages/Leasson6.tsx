import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
const Leasson6 = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 2 } }));
  }, []);

  return (
    <div className="main ">
      <div
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => controls.start({ x: 0, transition: { delay: 1 } })}
        className="size-[500px] flex flex-col justify-center items-center border border-red-500"
      >
        <motion.div
          className="size-64  bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-5 p-3"
          animate={controls}
          custom={1}
        ></motion.div>
        <motion.div
          className="size-64  bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-5 p-3"
          animate={controls}
          custom={2}
        ></motion.div>
        <motion.div
          className="size-64  bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-5 p-3"
          animate={controls}
          custom={3}
        ></motion.div>
      </div>
    </div>
  );
};

export default Leasson6;

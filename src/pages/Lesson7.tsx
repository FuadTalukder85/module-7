import { motion, useCycle } from "framer-motion";

const Lesson7 = () => {
  const boxAnimations = [
    { x: 0, y: 0, opacity: 1 },
    { x: 100, y: 100, opacity: 0.5 },
    { x: -100, y: 100, opacity: 0.25 },
    { x: -100, y: 0, opacity: 0 },
  ];

  const [animate, cycle] = useCycle(...boxAnimations);

  return (
    <div className="main ">
      <div className="size-[500px] flex flex-col justify-center items-center border border-red-500">
        <motion.div
          className="size-64  bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-5 p-3"
          animate={animate}
          onTap={() => cycle()}
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson7;

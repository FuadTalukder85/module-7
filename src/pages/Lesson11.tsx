import { motion, useMotionValue, useTransform } from "framer-motion";

const Lesson11 = () => {
  const x = useMotionValue(0);

  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  const rotate = useTransform(x, [-200, 200], [0, 180]);

  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center ">
      <motion.div
        className="size-64  bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-5 p-5"
        style={{ x, scale, rotate }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragSnapToOrigin
      ></motion.div>
    </div>
  );
};

export default Lesson11;

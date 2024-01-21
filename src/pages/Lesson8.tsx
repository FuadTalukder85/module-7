import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Lesson8 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inview = useInView(ref, { once: true });
  console.log(inview);

  return (
    <div className="border border-red-500 size-[600px] flex flex-col-1 justify-center items-center ">
      <motion.div
        className="size-64  bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-5 p-5"
        ref={ref}
        animate={
          inview
            ? { opacity: 1, x: 0, transition: { delay: 1 } }
            : { opacity: 0, x: -500 }
        }
      ></motion.div>
    </div>
  );
};

export default Lesson8;

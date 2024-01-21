import { motion, useScroll } from "framer-motion";

const Lesson12 = () => {
  const { scrollYProgress } = useScroll();

  //   useMotionValueEvent(scrollY, "change", (e) => {
  //     console.log(e);
  //   });
  //   useMotionValueEvent(scrollYProgress, "change", (e) => {
  //     console.log("Progress", e);
  //   });

  return (
    <motion.div
      className="h-2 w-full fixed top-0 bg-green-500"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
};

export default Lesson12;

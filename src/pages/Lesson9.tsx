import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const Lesson9 = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: -200 }],
      [scope.current, { x: 0 }],
    ]);
  }, []);
  return (
    <div className="border border-red-500 size-[600px] flex flex-col-1 justify-center items-center ">
      <div
        className="size-64  bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-5 p-5"
        ref={scope}
      ></div>
    </div>
  );
};

export default Lesson9;

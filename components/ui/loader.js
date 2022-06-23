import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./loader.module.css";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const loader = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [setShowLoader]);
  return (
    <>
      {showLoader && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          className={classes.backdrop}
        >
          <div className={classes.svgContainer}>
            <svg xmlns="http://www.w3.org/2000/svg">
              <motion.path
                variants={loader}
                initial="hidden"
                animate="visible"
                fill="#a7a3ae"
                d="M97.56,25.2H121V148.55H102V54.46l.85,5.43-27,73.22H59.55l-27-71.52.85-7.13v94.09h-19V25.2H37.84L67.7,107.49Z"
                transform="translate(-14.42 -25.2)"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Loader;

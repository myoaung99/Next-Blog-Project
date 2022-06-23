import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

import { motion } from "framer-motion";

const textVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      delay: 1,
    },
  },
};

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/image/site/myo.png"
          alt="Myo Myint Aung"
          width={310}
          height={310}
        />
      </div>
      <motion.div variants={textVariant} initial="hidden" animate="visible">
        <h1>Hi. I am Myo</h1>
        <p>
          I blog about web development - especially frontend framework like
          ReactJs and NextJs.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;

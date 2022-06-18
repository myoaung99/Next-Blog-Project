import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/image/site/myo.jpg" alt="" width={300} height={300} />
      </div>
      <h1>Hi. I am Myo</h1>
      <p>
        I blog about web development - especially frontend framework like
        ReactJs and NextJs.
      </p>
    </section>
  );
};

export default Hero;
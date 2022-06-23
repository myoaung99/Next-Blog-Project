import React from "react";
import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

import { motion } from "framer-motion";

const head = {
  hidden: {
    y: -300,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 2,
      delay: 0.2,
    },
  },
};

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <motion.div variants={head} initial="hidden" animate="visible">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </motion.div>

      <motion.nav variants={head} initial="hidden" animate="visible">
        <ul>
          <Link href="/blogs">
            <li>Blogs</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </motion.nav>
    </header>
  );
};

export default MainNavigation;

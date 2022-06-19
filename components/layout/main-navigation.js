import React from "react";
import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <Link href="/blogs">
            <li>Blogs</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

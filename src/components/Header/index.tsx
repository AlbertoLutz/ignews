import React from "react";
import { SignInButton } from "../SignInButton";
import styles from "./style.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={"/images/logo.svg"} alt="Logo ig.news" />
        <nav>
          <a href="#" className={styles.active}>
            Home
          </a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}

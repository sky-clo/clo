import React from "react";
import { useState } from "react";

import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import { ReactComponent as ExitIcon } from "../../images/exit.svg";
import styles from "./header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header>
        <a className={styles.logoContainer} href="/">
          <Logo />
        </a>

        {/* Mobile hamburger icon and menu */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={styles.menuButton}
        >
          <MenuIcon
            className={styles.icon}
            onClick={() => setIsMenuOpen(true)}
          />
        </button>

        {/* Desktop inline header buttons */}
        <div className={styles.authButtons}>
          <a href="/" className="c-btn c-btn--secondary u-margin-right">
            Sign In
          </a>
          <a href="/" className="c-btn c-btn--primary u-margin-right">
            Create an Account
          </a>
        </div>
      </header>

      <dialog className={styles.menu} aria-hidden={!isMenuOpen}>
        <button onClick={() => setIsMenuOpen(false)}>
          <ExitIcon className={styles.icon} />
        </button>

        <div className={styles.menuItems}>
          <a href="/" className="c-btn c-btn--secondary u-margin-right">
            Sign In
          </a>
          <a href="/" className="c-btn c-btn--primary u-margin-right">
            Create an Account
          </a>
        </div>
      </dialog>
    </>
  );
}

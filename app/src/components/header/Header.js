import React from "react";
import { useState } from "react";

import LinkButton from "../linkButton/LinkButton";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import { ReactComponent as ExitIcon } from "../../images/exit.svg";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

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
          <Link
            to="/sign-in"
            className="c-btn c-btn--secondary u-margin-right"
            data-test="Header-sign-in"
          >
            Sign In
          </Link>
          <Link
            to="/create-an-account"
            className="c-btn c-btn--primary"
            data-test="Header-create-an-account"
          >
            Create an Account
          </Link>
        </div>
      </header>

      <dialog className={styles.menu} aria-hidden={!isMenuOpen}>
        <button onClick={() => setIsMenuOpen(false)}>
          <ExitIcon className={styles.icon} />
        </button>

        <div className={styles.menuItems}>
          <LinkButton
            href="/sign-in"
            primary={false}
            data-test="Header-sign-in"
          >
            Sign In
          </LinkButton>
          <LinkButton
            href="/create-an-account"
            primary={true}
            data-test="Header-create-an-account"
          >
            Create an Account
          </LinkButton>
        </div>
      </dialog>
    </>
  );
}

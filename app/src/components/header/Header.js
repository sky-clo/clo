import React, { useContext, useEffect } from "react";
import { useState } from "react";

import LinkButton from "../linkButton/LinkButton";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import { ReactComponent as ExitIcon } from "../../images/exit.svg";
import styles from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";
import Button from "../button/Button";
import { AuthContext } from "../../authContext";

const NoAuthButtons = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { auth, dispatch } = useContext(AuthContext);
  const location = useLocation();

  // Runs when a user navigates to a different page, checking to see if the menubar is open
  useEffect(() => {
    if (isMenuOpen) {
      // Close menu bar if it's open
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <>
      <header>
        <Link to="/" className={styles.logoContainer}>
          <Logo />
        </Link>
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
          {!auth?.jwt ? (
            <NoAuthButtons />
          ) : (
            <Button
              primary={false}
              onClick={() => dispatch({ type: "reset" })}
              data-test="Header-sign-in"
            >
              Sign Out
            </Button>
          )}
        </div>
      </header>

      <dialog className={styles.menu} aria-hidden={!isMenuOpen}>
        <button onClick={() => setIsMenuOpen(false)}>
          <ExitIcon className={styles.icon} />
        </button>
        <div className={styles.menuItems}>
          {!auth?.jwt ? (
            <React.Fragment>
              <LinkButton
                to="/sign-in"
                primary={false}
                data-test="Header-sign-in"
              >
                Sign In
              </LinkButton>
              <LinkButton
                to="/create-an-account"
                primary={false}
                data-test="Header-create-an-account"
              >
                Create an Account
              </LinkButton>
            </React.Fragment>
          ) : (
            <Button
              onClick={() => dispatch({ type: "reset" })}
              primary={false}
              data-test="Header-create-an-account"
            >
              Sign Out
            </Button>
          )}
        </div>
      </dialog>
    </>
  );
}

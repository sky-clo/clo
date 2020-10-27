import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import CreateAnAccount from "./pages/createAnAccount/CreateAnAccount";
import SignIn from "./pages/signIn/SignIn";
import WhosFlying from "./pages/whosFlying/WhosFlying";
import Payment from "./pages/payment/Payment";
import CompleteTrip from "./pages/completeTrip/CompleteTrip";
import styles from "./App.module.scss";
import { authReducer, getInitialAuthState, AuthContext } from "./authContext";

export default function App() {
  const [auth, dispatch] = useReducer(authReducer, getInitialAuthState());

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      <Router>
        <div className={styles.container}>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/location/:locationName" component={Location} />
              <Route path="/create-an-account" component={CreateAnAccount} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/payment" component={Payment} />
            </Switch>
          </main>
          <footer className="o-container">
            © {new Date().getFullYear()} Sky UK
          </footer>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import CreateAnAccount from "./pages/createAnAccount/CreateAnAccount";
import SignIn from "./pages/signIn/SignIn";
import Payment from "./pages/payment/Payment";
import CompleteTrip from "./pages/completeTrip/CompleteTrip";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/create-an-account" component={CreateAnAccount} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/payment" component={Payment} />
            <Route path="/complete" component={CompleteTrip} />
          </Switch>
        </Router>
      </main>
      <footer className="o-container">
        © {new Date().getFullYear()} Sky UK
      </footer>
    </div>
  );
}

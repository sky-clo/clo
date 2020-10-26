import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";
import CreateAnAccount from "./pages/createAnAccount/CreateAnAccount";
import styles from "./App.module.scss";
import SignIn from "./pages/signIn/SignIn";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/location/:locationName" component={Location} />
            <Route path="/create-an-account" component={CreateAnAccount} />
            <Route path="/sign-in" component={SignIn} />
          </Switch>
        </Router>
      </main>
      <footer className="o-container">
        © {new Date().getFullYear()} Sky UK
      </footer>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/location" component={Location} />
          </Switch>
        </Router>
      </main>
      <footer>© {new Date().getFullYear()} Sky UK</footer>
    </div>
  );
}

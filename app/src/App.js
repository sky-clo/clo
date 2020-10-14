import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Location from "./pages/location/Location";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <header>Header</header>
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/location" component={Location} />
          </Switch>
        </Router>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

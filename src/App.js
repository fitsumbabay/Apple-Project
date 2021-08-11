import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL
// Home page

import Navigation from "./Components/HeaderLink/Components/Navigation";
import Main from "./Components/Main/Main";
import FooterLinks from "./Components/Footer/FooterLinks";

// Pages
import Iphone from "./Components/Pages/Iphone/iphone";
import Mac from "./Components/Pages/Mac/Mac";
import Four04 from "./Components/Pages/Four04/Four04";
import Productpage from "./Components/Pages/Productpage/Productpage";

// import general css
import "./Components/Main/css/bootstrap.css";
import "./Components/Main/css/styles.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/" component={Four04} />
        </Switch>
        <FooterLinks />
      </div>
    </Router>
  );
}

export default App;

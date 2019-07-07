import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import App from "./pages/App";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import "./index.css";

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/app">App</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/app" component={App} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route component={Page404} />
    </Switch>
  </div>
);

ReactDOM.render(
  <Router>
    <Navigation />
  </Router>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import App from "./pages/App";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";
import "./css/style.min.css";
import "./index.css";
import ProviderPage from "./pages/ProviderPage";

const Navigation = () => (
  <div
    className="bodyContainer"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-between"
    }}
  >
    <div>
      <div class="navbar navbar--extended">
        <nav class="nav__mobile" />
        <div class="container">
          <div class="navbar__inner">
            <Link className="navbar__logo" to="/">
              CloudCompare
            </Link>

            <nav class="navbar__menu">
              <ul>
                <li>
                  <a>
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/app">App</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/ProviderPage">Providers</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/contact">Contact</Link>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="navbar__menu-mob">
              <a href="" id="toggle">
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    class=""
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="page__header">
          <div class="hero__overlay hero__overlay--gradient" />
          <div class="hero__mask" />
          <div class="page__header__inner" />
        </div>
      </div>

        <Switch>
          <Route exact path="/ProviderPage" component={ProviderPage} />
          <Route exact path="/" component={Index} />
          <Route path="/app" component={App} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route component={Page404} />
        </Switch>
    </div>

    <Footer style={{ alignSelf: "flex-end" }} />
  </div>
);

ReactDOM.render(
  <Router>
    <Navigation />
  </Router>,
  document.getElementById("root")
);

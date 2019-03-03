import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../src/components/Home";
import MarketTrend from "./components/MarketTrend";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/marketTrend">Market Trend</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/marketTrend" component={MarketTrend} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

import React, { useState } from "react";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import items from "./data";
import "./styles.css";

const App = () => {
  const [product] = useState(items);
  console.log("this is our data", product);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">
          Christina's Trinkets
        </h1>
        <div className="nav-links">
          <Link className="some-link" to="/">
            Home
          </Link>
          <Link to="/item-list">Shop</Link>
        </div>
      </nav>

      {/* Switch doesn't require exact path prop, but you need to structure them so that the most detailed route is at the top and least detailed route is at the bottom */}
      <Switch>
        {/* <Route path="/item-list/:dataID" component={Item} /> */}
        <Route path="/item-list/:itemID">
          <Item items={product} />
        </Route>
        {/* <Route exact path="/item-list" component={ItemsList} /> */}
        <Route path="/item-list">
          <ItemsList items={product} />
        </Route>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    </div>
  );
};

export default App;

import React from "react";
import { useParams, Route, NavLink, useRouteMatch } from "react-router-dom";
import ItemDescription from "./ItemDescription.js";
import ItemShipping from "./ItemShipping.js";

function Item(props) {
  const { itemID } = useParams();
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const shopItem = props.items.find(
    item => itemID === `${item.id}`
  );

  const { path, url } = useRouteMatch();
  
  // const shopItem = items.find(item => Number(itemID) === item.id);
    return (
        <div className="item-wrapper">
        <div className="item-header">
            <div className="image-wrapper">
            <img
                src={shopItem.imageUrl}
                alt={shopItem.name}
            />
            </div>
            <div className="item-title-wrapper">
            <h2>{shopItem.name}</h2>
            <h4>${shopItem.price}</h4>
            </div>
        </div>
        <nav className="item-sub-nav">
            <NavLink to={`${url}/shipping`}>Shipping</NavLink>
            <NavLink to={`${url}/description`}>Description</NavLink>
        </nav>
        {/* Below, can use a variable so that it stays the same even if another dev changes the data */}
        <Route path={`${path}/shipping`}>
            <ItemShipping item={shopItem} />
        </Route>
        <Route path={`${path}`}>
            <ItemDescription item={shopItem} />
        </Route>
        </div>
    );
}

export default Item;

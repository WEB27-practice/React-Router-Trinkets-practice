import React from "react";
import { Link } from "react-router-dom";

function ItemsList() {
  return (
    <div className="items-list-wrapper">
      {items.map(item => (
        <Link to={`/item-list/${item.id}`}>
          <div
            className="item-card"
            key={item.id}
          >
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ItemsList;

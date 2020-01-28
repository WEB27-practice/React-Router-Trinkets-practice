import React from "react";
import { useParams } from "react-router-dom";

function Item(props) {
  const { itemID } = useParams();
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const shopItem = items.find(
    item => itemID === `${item.id}`
  );
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
      <div>
        <p className="item-description">
          {shopItem.description}
        </p>
      </div>
    </div>
  );
}

export default Item;

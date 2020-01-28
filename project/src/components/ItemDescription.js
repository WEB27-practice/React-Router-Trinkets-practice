import React from "react";

function ItemDescription(props) {
  console.log("description props", props);
  return (
    <div>
      <p className="item-description">
        {props.item.description}
      </p>
    </div>
  );
}
export default ItemDescription;

import React from "react";

function ItemShipping(props){
    console.log('shippings props', props)
    return(
        <div>
            <p className="item-description">
                {props.item.shipping}
            </p>
        </div>
    )
}

export default ItemShipping;
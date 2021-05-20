import React from 'react';

import './cart-item.scss';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <div className="cart-item">
        <img className="img" src={imageUrl} alt="" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;
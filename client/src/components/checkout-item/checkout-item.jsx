import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeOneItem, removeItem } from '../../redux/cart/cart.action';
import './checkout-item.scss';

const CheckoutItem = ({ cartItem, removeItem, removeOneItem, addItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img className="img" src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className="arrow"
                    onClick={() => removeOneItem(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow"
                    onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </div>
            <span className="price">${price * quantity}</span>
            <div className="remove-button"
                onClick={() => removeItem(cartItem)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeOneItem: item => dispatch(removeOneItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
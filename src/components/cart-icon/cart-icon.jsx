import React from 'react';
import './cart-icon.scss'

import { ReactComponent as ShoppingCart } from '../../assets/logo/cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action.js'
import { connect } from 'react-redux';
import { selectCartItemCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingCart className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkoutPage.scss'
import { selectCartItems, selectCartItemTotal } from '../../redux/cart/cart.selector.js'
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const CheckoutPage = ({ cartItems, cartItemTotal }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className="total">
            <span>Total = ${cartItemTotal}</span>
        </div>
        <div className="test-warning">
            *Please use the following test card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={cartItemTotal} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemTotal: selectCartItemTotal
})

export default connect(mapStateToProps)(CheckoutPage);
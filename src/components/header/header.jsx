import React from 'react';

import './header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.js';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/logo/crown.svg';
import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx';
import { selectUserCurrent } from '../../redux/users/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="Logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => (auth.signOut())}>SIGN OUT</div>
                    :
                    <Link to="/signin" className="option">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : (<CartDropdown />)}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectUserCurrent,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
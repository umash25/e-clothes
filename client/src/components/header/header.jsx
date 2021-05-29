import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/logo/crown.svg';
import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx';
import { selectUserCurrent } from '../../redux/users/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
import { signOutStart } from '../../redux/users/user.action.js';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer >
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer >
            <OptionLink to="/shop" >
                SHOP
            </OptionLink>
            <OptionLink to="/contact" >
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as='div'
                        onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                    :
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : (<CartDropdown />)}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectUserCurrent,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
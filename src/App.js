import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.jsx';
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './components/shop/shop.jsx';
import { connect } from 'react-redux';
import SignInAndSignUp from './pages/signinandsignup/signinandsignup.jsx';
import CheckoutPage from './pages/checkoutPage/checkoutPage';
import { checkUserSession } from './redux/users/user.action';
import { selectUserCurrent } from './redux/users/user.selector';
import { createStructuredSelector } from 'reselect';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path="/signin"
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            )
          } />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrent
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
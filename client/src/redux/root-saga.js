import { all, call } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.sagas';
import { shopSagas } from './shop/shop.saga';
import { userSagas } from './users/user.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
    ]);
}
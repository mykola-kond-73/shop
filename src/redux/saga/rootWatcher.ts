import {all} from 'redux-saga/effects'
import { customersWatcher } from './customersSaga'
import { loginWatcher } from './loginSaga'
import { orderWatcher } from './ordersSaga'
import { productsWatcher } from './productsSaga'
import { staffWatcher } from './staffSaga'

export function* rootWatcher(){
    yield all([productsWatcher(),loginWatcher(),customersWatcher(),staffWatcher(),orderWatcher()])
}
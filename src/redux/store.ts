import {createStore,combineReducers,applyMiddleware, compose, CombinedState} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ErrorReducer } from './reducers/errorReducer';
import { productsReducer } from './reducers/productsReducer';
import { rootWatcher } from './saga/rootWatcher';
import { customersReducer } from './reducers/customersReducer';
import { loginReducer } from './reducers/loginReducer';
import { staffReducer } from './reducers/staffReducer';
import { basketReducer } from './reducers/basketReducer';
import { ordersReducer } from './reducers/ordersReducer';

export const redusers = combineReducers({
    productsData:productsReducer,
    customerData:customersReducer,
    staffData:staffReducer,
    basketData:basketReducer,
    ordersData:ordersReducer,

    loginData:loginReducer,
    errorData:ErrorReducer
})

const sagaMiddleware=createSagaMiddleware()

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers,  composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootWatcher)

export default store
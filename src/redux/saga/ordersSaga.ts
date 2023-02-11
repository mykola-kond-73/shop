import {put,call,takeEvery} from 'redux-saga/effects'
import {orderAPI} from '../../API/orderAPI'
import { OrderDataType, OrderFiltersType } from '../../types/redux/reducers/orderTypes'
import { LoginSagasConstantsEnum } from '../../types/redux/sagas/loginSagasTypes'
import { CreateOrderDataType, OrdersSagasConstantsEnum } from '../../types/redux/sagas/ordersSagasTypes'
import { ResponceType, ResponceWithMetaDataType } from '../../types/redux/sagas/sagasTypes'
import { Nullable } from '../../types/types'
import {cleanProductsList} from '../reducers/basketReducer'
import {setOrderCreateErrorData,setOrderDeleteErrorData,setOrderErrorData, setOrderUpdateErrorData} from '../reducers/errorReducer'
import {setCreateOrderInitialize,setInitializeOrders,setOrdersData,setSize,setVisibleModalOrder,setTotalCount,setInitializeDeleteOrder,setPage, setInitialUpdateOrder} from '../reducers/ordersReducer'

export const createOrderSaga = (data:CreateOrderDataType, successModalFunc:()=>void, errorModalFunc:()=>void, resetForm:()=>void,isQuery:boolean,page:Nullable<number>,size:Nullable<number>,filter:OrderFiltersType) => ({
    type: OrdersSagasConstantsEnum.SAGA_CREATE_ORDER,
    data,
    successModalFunc,
    errorModalFunc,
    resetForm,
    isQuery,
    page,
    size,
    filter
})
export const getOrdersDataSaga = (page:number, size:number,filter:OrderFiltersType) => ({
    type: OrdersSagasConstantsEnum.SAGA_GET_OTDERS,
    page,
    size,
    filter
})

export const updateOrderData=(orderId:string,data:CreateOrderDataType,successModalFunc:()=>void, errorModalFunc:()=>void,resetForm:()=>void,page:number,size:number,filter:OrderFiltersType)=>({
    type: OrdersSagasConstantsEnum.SAGA_UPDATE_ORDER,
    orderId,
    data,
    successModalFunc,
    errorModalFunc,
    resetForm,
    page,
    size,
    filter
})

export const deleteOrderSaga = (orderId:string, successModalFunc:()=>void, errorModalFunc:()=>void, page:number, size:number,filter:OrderFiltersType) => ({
    type:  OrdersSagasConstantsEnum.SAGA_DELETE_ORDER,
    orderId,
    successModalFunc,
    errorModalFunc,
    page,
    size,
    filter
})

export function* createOrderWorker(action:ReturnType<typeof createOrderSaga>) {
    try {
        yield call(() => orderAPI.createOrder(action.data))
        yield put(setOrderCreateErrorData(null, null))
        yield put(cleanProductsList())

        yield put(setVisibleModalOrder(false))
        yield put(setCreateOrderInitialize(false))
        yield action.successModalFunc()
        yield action.resetForm()

        if(action.isQuery) yield put(getOrdersDataSaga(action.page!,action.size!,action.filter))

    } catch (error:any) {
        if (error.response) {
            yield put(setOrderCreateErrorData(error.response.data.mesage, error.response.data.resultCode))

            if (error.response.data.resultCode === 401) yield put({
                type: LoginSagasConstantsEnum.SAGA_DELETE_SESSION
            })
        } else if (error.request) {
            yield put(setOrderCreateErrorData(error.message, error.request.status))
        } else {
            yield put(setOrderCreateErrorData(error.message, null))
        }

        yield put(setVisibleModalOrder(false))
        yield action.errorModalFunc()
        yield put(setCreateOrderInitialize(false))
    }
}

export function* getOrderWorker(action:ReturnType<typeof getOrdersDataSaga>) {
    try {
        yield put(setInitializeOrders(true))
        const responce:ResponceWithMetaDataType<Array<OrderDataType>> = yield call(() => orderAPI.getOrders(action.page, action.size,action.filter))
        yield put(setOrderErrorData(null, null))

        yield put(setOrdersData(responce.data.data.data))
        yield put(setSize(responce.data.data.meta.size))
        yield put(setPage(responce.data.data.meta.page))
        yield put(setTotalCount(responce.data.data.meta.total))
        yield put(setInitializeOrders(false))
    } catch (error:any) {

        if (error.response) {
            yield put(setOrderErrorData(error.response.data.mesage, error.response.data.resultCode))
        } else if (error.request) {
            yield put(setOrderErrorData(error.message, error.request.status))
        } else {
            yield put(setOrderErrorData(error.message, null))
        }
        yield put(setInitializeOrders(false))
    }
}

export function* updateOrderWorker(action:ReturnType<typeof updateOrderData>){
    try{
        yield put(setInitialUpdateOrder(true))
        yield call(()=>orderAPI.updateOrder(action.orderId,action.data))
        yield put(setOrderUpdateErrorData(null,null))
        yield put(setInitialUpdateOrder(false))

        yield action.successModalFunc()
        yield action.resetForm()
        yield put(getOrdersDataSaga(action.page,action.size,action.filter))
    }catch(error:any){
        if (error.response) {
            yield put(setOrderUpdateErrorData(error.response.data.mesage, error.response.data.resultCode))
        } else if (error.request) {
            yield put(setOrderUpdateErrorData(error.message, error.request.status))
        } else {
            yield put(setOrderUpdateErrorData(error.message, null))
        }
        yield action.errorModalFunc()
        yield action.resetForm()
        yield put(setInitialUpdateOrder(false))
    }
}

export function* deleteOrderWorker(action:ReturnType<typeof deleteOrderSaga>) {
    try {
        yield put(setInitializeDeleteOrder(true))
        yield call(() => orderAPI.deleteOrder(action.orderId))

        yield put(setOrderDeleteErrorData(null, null))
        yield put(setInitializeDeleteOrder(false))
        yield action.successModalFunc()

        yield put(getOrdersDataSaga(action.page,action.size,action.filter))

    } catch (error:any) {
        if (error.response) {
            yield put(setOrderDeleteErrorData(error.response.data.mesage, error.response.data.resultCode))
        } else if (error.request) {
            yield put(setOrderDeleteErrorData(error.message, error.request.status))
        } else {
            yield put(setOrderDeleteErrorData(error.message, null))
        }

        yield action.errorModalFunc()
        yield put(setInitializeDeleteOrder(false))
    }
}

export function* orderWatcher() {
    yield takeEvery( OrdersSagasConstantsEnum.SAGA_CREATE_ORDER, createOrderWorker)
    yield takeEvery( OrdersSagasConstantsEnum.SAGA_GET_OTDERS, getOrderWorker)
    yield takeEvery( OrdersSagasConstantsEnum.SAGA_UPDATE_ORDER,updateOrderWorker)
    yield takeEvery( OrdersSagasConstantsEnum.SAGA_DELETE_ORDER, deleteOrderWorker)
}
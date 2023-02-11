import{put,call,takeEvery} from 'redux-saga/effects'
import { setAuth} from '../reducers/loginReducer'
import {loginAPI} from '../../API/loginAPI'
import { setLoginErrorData, setUnloginErrorData } from '../reducers/errorReducer'
import { setInitializeStaff, setStaffData, setStaffId } from '../reducers/staffReducer'
import { setCustomerData, setCustomerId, setInitializeCustomer } from '../reducers/customersReducer'
import { code } from '../../utils/crypto'
import { CustomersSagasConstantsEnum } from '../../types/redux/sagas/CustomersSagasTypes'
import { loginDataType, LoginSagasConstantsEnum, unloginWorkerSagaType } from '../../types/redux/sagas/loginSagasTypes'
import { ResponceType } from '../../types/redux/sagas/sagasTypes'
import { StaffSagasConstantsType } from '../../types/redux/sagas/staffSagasTypes'

export const sagaLoginStaff=(login:string,password:string)=>({type:LoginSagasConstantsEnum.SAGA_LOGIN_STAFF,login,password})
export const sagaLoginCustomer=(login:string,password:string)=>({type:LoginSagasConstantsEnum.SAGA_LOGIN_CUSTOMER,login,password})

export function* loginStaffWorker(action:ReturnType<typeof sagaLoginStaff>){
    try{
        const responce:ResponceType<loginDataType>=yield call(()=>loginAPI.loginStaff(code(`${action.login}:${action.password}`)))
        yield put(setLoginErrorData(null,null))

        yield put(setStaffId(responce.data.data.userId))

        yield put({type:StaffSagasConstantsType.SAGA_GET_STAFF,hash:responce.data.data.userId})
        yield put(setAuth(true))
       
    }catch(error:any){
        if (error.response) {
            yield put(setLoginErrorData(error.response.data.mesage, error.response.data.resultCode))            
        } else if (error.request) {
            yield put(setLoginErrorData(error.message, error.request.status))
        } else {
            yield put(setLoginErrorData(error.message, null))
        }
    }
}

export function* loginCustomerWorker(action:ReturnType<typeof sagaLoginCustomer>){
    try{
        const responce:ResponceType<loginDataType>=yield call(()=>loginAPI.LoginCustomer(code(`${action.login}:${action.password}`)))
        yield put(setLoginErrorData(null,null))

        yield put(setCustomerId(responce.data.data.userId))

        yield put({type:CustomersSagasConstantsEnum.SAGA_GET_CUSTOMER,hash:responce.data.data.userId})
        yield put(setAuth(true))
       
    }catch(error:any){
        if (error.response) {
            yield put(setLoginErrorData(error.response.data.mesage, error.response.data.resultCode))            
        } else if (error.request) {
            yield put(setLoginErrorData(error.message, error.request.status))
        } else {
            yield put(setLoginErrorData(error.message, null))
        }
    }
}

export function* unloginWorker(action:unloginWorkerSagaType){
    try{
        yield call(()=>loginAPI.unlogin())
       
        yield put(setUnloginErrorData(null,null))
        yield put(setAuth(false))
        yield put(setStaffData(null))
        yield put(setInitializeStaff(false))
        yield put(setCustomerData(null))
        yield put(setInitializeCustomer(false))

        // throw new Error()
    }catch(error:any){
        if (error.response) {
            yield put(setUnloginErrorData(error.response.data.mesage, error.response.data.resultCode))
            
            if(error.response.data.resultCode===401) yield put({type:LoginSagasConstantsEnum.SAGA_DELETE_SESSION})
        } else if (error.request) {
            yield put(setUnloginErrorData(error.message, error.request.status))
        } else {
            yield put(setUnloginErrorData(error.message, null))
        }

        yield action.error!()
    }
}

export function* loginWatcher(){
    yield takeEvery(LoginSagasConstantsEnum.SAGA_LOGIN_STAFF,loginStaffWorker)
    yield takeEvery(LoginSagasConstantsEnum.SAGA_LOGIN_CUSTOMER,loginCustomerWorker)
    yield takeEvery(LoginSagasConstantsEnum.SAGA_DELETE_SESSION,unloginWorker)
}
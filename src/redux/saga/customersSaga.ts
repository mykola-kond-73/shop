import {put,call,takeEvery} from 'redux-saga/effects'
import {customersAPI} from '../../API/customersAPI'
import { CustomerFilterType, CustomerType } from '../../types/redux/reducers/customersTypes'
import { CreateCustomerDataType, CustomersSagasConstantsEnum, getCustomerWorkerSagaType, UpdateCustomerDataType } from '../../types/redux/sagas/CustomersSagasTypes'
import { LoginSagasConstantsEnum } from '../../types/redux/sagas/loginSagasTypes'
import {  ResponceType, ResponceWithMetaDataType } from '../../types/redux/sagas/sagasTypes'
import {code,decode,runData} from '../../utils/crypto'
import {setCreateCustomerInitialize,setCustomerData,setCustomerId,setDeleteCustomerInitialize,setInitializeCustomer,setInitializeCustomers,setIsUpdateCustomer,setUpdateCustomerInitialize,setVisibleModal,setPage, setCustomersData, setTotal,setSize} from '../reducers/customersReducer'
import {setCustomerCreateErrorData,setCustomerDeleteErrorData,setCustomerErrorData,setCustomersErrorData,setCustomerUpdateErrorData} from '../reducers/errorReducer'
import {setInitializeStaff,setStaffData} from '../reducers/staffReducer'

export const sagaGetCustomers=(page:number,size:number,filter:CustomerFilterType)=>({
    type:CustomersSagasConstantsEnum.SAGA_GET_CUSTOMERS,
    page,
    size,
    filter
})

export const sagaCreateCustomer = (data:CreateCustomerDataType, successModalFunc:(email:string,password:string)=>void, errorModalFunc:()=>void) => ({
    type: CustomersSagasConstantsEnum.SAGA_CREATE_CUSTOMER,
    data,
    successModalFunc,
    errorModalFunc
})

export const sagaUpdateCustomer = (id:string, data:UpdateCustomerDataType, successModalFunc:(data:string)=>void, errorModalFunc:()=>void) => ({
    type: CustomersSagasConstantsEnum.SAGA_UPDATE_CUSTOMER,
    id,
    data,
    successModalFunc,
    errorModalFunc
})

export const sagaDeleteCustomer = (id:string, successModalFunc:()=>void, errorModalFunc:()=>void) => ({
    type: CustomersSagasConstantsEnum.SAGA_DELTE_CUSTOMER,
    id,
    successModalFunc,
    errorModalFunc
})

export function* createCustomerWorker(action:ReturnType<typeof sagaCreateCustomer>) {
    try {
        yield put(setCreateCustomerInitialize(true))
        const data = runData(code, action.data, ['name', 'email', 'phone', 'password'])
        yield call(() => customersAPI.createCustomer(data))
        yield put(setCustomerCreateErrorData(null, null))

        // yield put(setStaffData(null))
        yield put(setInitializeStaff(false))
        yield put(setCustomerData(null))
        yield put(setInitializeCustomer(false))

        yield put(setVisibleModal(false))
        yield action.successModalFunc(action.data.email, action.data.password)
        yield put(setCreateCustomerInitialize(false))

    } catch (error:any) {
        if (error.response) {
            yield put(setCustomerCreateErrorData(error.response.data.mesage, error.response.data.resultCode))            
        } else if (error.request) {
            yield put(setCustomerCreateErrorData(error.message, error.request.status))
        } else {
            yield put(setCustomerCreateErrorData(error.message, null))
        }

        yield put(setVisibleModal(false))
        yield action.errorModalFunc()
        yield put(setCreateCustomerInitialize(false))
    }
}

export function* getCustomersWorker(action:ReturnType<typeof sagaGetCustomers>){
    try{
        yield put(setInitializeCustomers(true))
        const responce:ResponceWithMetaDataType<Array<CustomerType>> = yield call(()=>customersAPI.getCustomers(action.page,action.size,action.filter))
        yield put(setCustomersErrorData(null,null))

        yield put(setPage(responce.data.data.meta.page))
        yield put(setSize(responce.data.data.meta.size))
        yield put(setTotal(responce.data.data.meta.total))
        const newData=[]
        for(let i=0;i<responce.data.data.data.length;i++){
            newData.push(runData(decode, responce.data.data.data[i], ['email', 'phone']))
        }
        yield put(setCustomersData(newData))
        yield put(setInitializeCustomers(false))

    }catch(error:any){
        if (error.response) {
            yield put(setCustomersErrorData(error.response.data.mesage, error.response.data.resultCode))
        } else if (error.request) {
            yield put(setCustomersErrorData(error.message, error.request.status))
        } else {
            yield put(setCustomersErrorData(error.message, null))
        }
        yield put(setInitializeCustomers(false))
    }
}

export function* getCustomerWorker(action:getCustomerWorkerSagaType) {
    try {
        yield put(setInitializeCustomer(true))
        const responce:ResponceType<CustomerType> = yield call(() => customersAPI.getCustomer(action.hash))
        yield put(setCustomerErrorData(null, null))
        yield put(setCustomerUpdateErrorData(null, null))
            
        yield put(setStaffData(null))
        yield put(setInitializeStaff(false))

        yield put(setCustomerId(null))

        const newData = runData(decode, responce.data.data, ['email', 'phone'])
        yield put(setCustomerData(newData))
        yield put(setInitializeCustomer(false))
        
    } catch (error:any) {
        if (error.response) {
            yield put(setCustomerErrorData(error.response.data.mesage, error.response.data.resultCode))
            
            if(error.response.data.resultCode===401) yield put({type:LoginSagasConstantsEnum.SAGA_DELETE_SESSION})
        } else if (error.request) {
            yield put(setCustomerErrorData(error.message, error.request.status))
        } else {
            yield put(setCustomerErrorData(error.message, null))
        }
        yield put(setInitializeCustomer(false))

    }
}

export function* updateCustomerWorker(action:ReturnType<typeof sagaUpdateCustomer>) {
    try {
        yield put(setUpdateCustomerInitialize(true))

        const codeData = runData(code, action.data, ['email', 'phone', 'name'])
        const responce:ResponceType<string>= yield call(() => customersAPI.updateCustomer(action.id, codeData))
        yield put(setCustomerUpdateErrorData(null, null))
        
        yield action.successModalFunc(responce.data.data)
        yield put(setUpdateCustomerInitialize(false))
        yield put(setIsUpdateCustomer(false))

    } catch (error:any) {
        if (error.response) {
            yield put(setCustomerUpdateErrorData(error.response.data.mesage, error.response.data.resultCode))
            
            if(error.response.data.resultCode===401) yield put({type:LoginSagasConstantsEnum.SAGA_DELETE_SESSION})
        } else if (error.request) {
            yield put(setCustomerUpdateErrorData(error.message, error.request.status))
        } else {
            yield put(setCustomerUpdateErrorData(error.message, null))
        }
        
        yield action.errorModalFunc()
        yield put(setUpdateCustomerInitialize(false))
        yield put(setIsUpdateCustomer(false))
    }
}

export function* deleteCustomerWorker(action:ReturnType<typeof sagaDeleteCustomer>){
    try{
        yield put(setDeleteCustomerInitialize(true))
        yield call(()=>customersAPI.deleteCuctomer(action.id))
        yield put(setCustomerDeleteErrorData(null,null))
        yield put(setDeleteCustomerInitialize(false))
        yield action.successModalFunc()
        
    }catch(error:any){
        if (error.response) {
            yield put(setCustomerDeleteErrorData(error.response.data.mesage, error.response.data.resultCode))
            
            if(error.response.data.resultCode===401) yield put({type:LoginSagasConstantsEnum.SAGA_DELETE_SESSION})
        } else if (error.request) {
            yield put(setCustomerDeleteErrorData(error.message, error.request.status))
        } else {
            yield put(setCustomerDeleteErrorData(error.message, null))
        }

        yield action.errorModalFunc()
        yield put(setDeleteCustomerInitialize(false))
    }
}

export function* customersWatcher() {
    yield takeEvery(CustomersSagasConstantsEnum.SAGA_GET_CUSTOMERS,getCustomersWorker)
    yield takeEvery(CustomersSagasConstantsEnum.SAGA_GET_CUSTOMER, getCustomerWorker)
    yield takeEvery(CustomersSagasConstantsEnum.SAGA_CREATE_CUSTOMER, createCustomerWorker)
    yield takeEvery(CustomersSagasConstantsEnum.SAGA_UPDATE_CUSTOMER, updateCustomerWorker)
    yield takeEvery(CustomersSagasConstantsEnum.SAGA_DELTE_CUSTOMER,deleteCustomerWorker)
}
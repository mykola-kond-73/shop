import{put,call,takeEvery} from 'redux-saga/effects'
import { StaffAPI } from '../../API/staffAPI'
import { StaffDataType, StaffFilterType } from '../../types/redux/reducers/staffTypes'
import { LoginSagasConstantsEnum } from '../../types/redux/sagas/loginSagasTypes'
import { ResponceType, ResponceWithMetaDataType } from '../../types/redux/sagas/sagasTypes'
import { CreateStaffDataType, getStaffWorkerSagaType, StaffSagasConstantsType, UpdateStaffDataType } from '../../types/redux/sagas/staffSagasTypes'
import { decode,code, runData } from '../../utils/crypto'
import { setCustomerData, setInitializeCustomer } from '../reducers/customersReducer'
import { setStaffCreateErrorData, setStaffDeleteErrorData, setStaffErrorData, setStaffsErrorData, setStaffUpdateErrorData } from '../reducers/errorReducer'
import { setDeleteStaffInitialize, setInitializeStaff, setInitializeStaffs, setIsUpdateStaff, setStaffData, setStaffId, setUpdateStaffInitialize,setPage,setSize,setTotal, setStaffs, setCreateStaffInitialize } from '../reducers/staffReducer'

export const sagaCreateStaff=(data:CreateStaffDataType,successModalFunc:()=>void,errorModalFunc:()=>void)=>({
    type:StaffSagasConstantsType.SAGA_CREATE_STAFF,
    data,
    successModalFunc,
    errorModalFunc
})

export const sagaGetStaffs=(page:number,size:number,filter:StaffFilterType)=>({
    type:StaffSagasConstantsType.SAGA_GET_STAFFS,
    page,
    size,
    filter
})

export const sagaUpdateStaff = (id:string, data:UpdateStaffDataType, successModalFunc:(hash:string)=>void, errorModalFunc:()=>void) => ({
    type: StaffSagasConstantsType.SAGA_UPDATE_STAFF,
    id,
    data,
    successModalFunc,
    errorModalFunc
})

export const sagaDeleteStaff = (id:string, successModalFunc:()=>void, errorModalFunc:()=>void) => ({
    type: StaffSagasConstantsType.SAGA_DELETE_STAFF,
    id,
    successModalFunc,
    errorModalFunc
})

export function* createStaffWorker(action:ReturnType<typeof sagaCreateStaff>){
    try{
    
        yield put(setCreateStaffInitialize(true))
        if(action.data.isAdmin) action.data.secretKey=process.env.REACT_APP_KEY
        const data = runData(code, action.data, ['name', 'email', 'phone', 'password','secretKey','role'])

        yield call(() => StaffAPI.createStaff(data))
        yield put(setStaffCreateErrorData(null, null))
        
        yield action.successModalFunc()
        yield put(setCreateStaffInitialize(false))        

    }catch(error:any){
        if (error.response) {
            yield put(setStaffCreateErrorData(error.response.data.mesage, error.response.data.resultCode))            
        } else if (error.request) {
            yield put(setStaffCreateErrorData(error.message, error.request.status))
        } else {
            yield put(setStaffCreateErrorData(error.message, null))
        }
        yield action.errorModalFunc()
        yield put(setCreateStaffInitialize(false))
    }
}

export function* getStaffsWorker(action:ReturnType<typeof sagaGetStaffs>){
    try{
        yield put(setInitializeStaffs(true))
        const responce:ResponceWithMetaDataType<Array<StaffDataType>> =yield call(()=>StaffAPI.getStaffs(action.page,action.size,action.filter))
        yield put(setStaffsErrorData(null,null))
        
        const newData=[]
        for(let i=0;i<responce.data.data.data.length;i++){
            newData.push(runData(decode, responce.data.data.data[i], ['email', 'phone']))
        }

        yield put(setStaffs(newData))
        yield put(setPage(responce.data.data.meta.page))
        yield put(setSize(responce.data.data.meta.size))
        yield put(setTotal(responce.data.data.meta.total))

        yield put(setInitializeStaffs(false))

    }catch(error:any){
        if (error.response) {
            yield put(setStaffsErrorData(error.response.data.mesage, error.response.data.resultCode))            
        } else if (error.request) {
            yield put(setStaffsErrorData(error.message, error.request.status))
        } else {
            yield put(setStaffsErrorData(error.message, null))
        }

        yield put(setInitializeStaffs(false))
    }
}

export function* getStaffWorker(action:getStaffWorkerSagaType){
    try{
        yield put(setInitializeStaff(true))
        const responce:ResponceType<StaffDataType>=yield call(()=>StaffAPI.getStaff(action.hash))
        yield put(setStaffErrorData(null,null))
        yield put(setStaffUpdateErrorData(null, null))

        yield put(setCustomerData(null))
        yield put(setInitializeCustomer(false))

        yield put(setStaffId(null))

        const newData = runData(decode, responce.data.data, ['email', 'phone'])
        yield put(setStaffData(newData))
        yield put(setInitializeStaff(false))
        
    }catch(error:any){
        if (error.response) {
            yield put(setStaffErrorData(error.response.data.mesage, error.response.data.resultCode))
            
            if(error.response.data.resultCode===401) yield put({type:LoginSagasConstantsEnum.SAGA_DELETE_SESSION})
        } else if (error.request) {
            yield put(setStaffErrorData(error.message, error.request.status))
        } else {
            yield put(setStaffErrorData(error.message, null))
        }
        yield put(setInitializeStaff(false))
    }
}

export function* updateStaffWorker(action:ReturnType<typeof sagaUpdateStaff>) {
    try {
        yield put(setUpdateStaffInitialize(true))
        const codeData = runData(code, action.data, ['email', 'phone', 'name'])
        const responce:ResponceType<string> = yield call(() => StaffAPI.updateStaff(action.id, codeData))
        yield put(setStaffUpdateErrorData(null, null))

        yield action.successModalFunc(responce.data.data)
        yield put(setUpdateStaffInitialize(false))
        yield put(setIsUpdateStaff(false))

    } catch (error:any) {
        if (error.response) {
            yield put(setStaffUpdateErrorData(error.response.data.mesage, error.response.data.resultCode))
            
            if(error.response.data.resultCode===401) yield put({type:LoginSagasConstantsEnum.SAGA_DELETE_SESSION})
        } else if (error.request) {
            yield put(setStaffUpdateErrorData(error.message, error.request.status))
        } else {
            yield put(setStaffUpdateErrorData(error.message, null))
        }

        yield action.errorModalFunc()
        yield put(setUpdateStaffInitialize(false))
        yield put(setIsUpdateStaff(false))
    }
}

export function* deleteStaffWorker(action:ReturnType<typeof sagaDeleteStaff>){
    try{
        yield put(setDeleteStaffInitialize(true))
        yield call(()=>StaffAPI.deleteStaff(action.id))
        yield put(setStaffDeleteErrorData(null,null))
        yield put(setDeleteStaffInitialize(false))
        yield action.successModalFunc()
        
    }catch(error:any){
        if (error.response) {
            yield put(setStaffDeleteErrorData(error.response.data.mesage, error.response.data.resultCode))
            
            if(error.response.data.resultCode===401) yield put({type:LoginSagasConstantsEnum.SAGA_DELETE_SESSION})
        } else if (error.request) {
            yield put(setStaffDeleteErrorData(error.message, error.request.status))
        } else {
            yield put(setStaffDeleteErrorData(error.message, null))
        }
        yield action.errorModalFunc()
        yield put(setDeleteStaffInitialize(false))
    }
}

export function* staffWatcher(){
    yield takeEvery(StaffSagasConstantsType.SAGA_CREATE_STAFF,createStaffWorker)
    yield takeEvery(StaffSagasConstantsType.SAGA_GET_STAFFS,getStaffsWorker)
    yield takeEvery(StaffSagasConstantsType.SAGA_GET_STAFF,getStaffWorker)
    yield takeEvery(StaffSagasConstantsType.SAGA_UPDATE_STAFF,updateStaffWorker)
    yield takeEvery(StaffSagasConstantsType.SAGA_DELETE_STAFF,deleteStaffWorker)
}
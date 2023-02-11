import { AppStateType } from '../../types/redux/storeTypes'

const defaultErrorObj={
    message:null,
    code:null
}

const getProductsErrorData = (state:AppStateType) => state?.errorData?.products || defaultErrorObj
const getProductErrorData = (state:AppStateType) => state?.errorData?.product || defaultErrorObj
const getLoginErrorData = (state:AppStateType) => state?.errorData?.login || defaultErrorObj
const getCustomerErrorData = (state:AppStateType) => state?.errorData?.customer || defaultErrorObj
const getCustomerCreateErrorData = (state:AppStateType) => state?.errorData?.customerCreate || defaultErrorObj
const getCustomerUpdateErrorData = (state:AppStateType) => state?.errorData?.customerUpdate || defaultErrorObj
const getStaffErrorData = (state:AppStateType) => state?.errorData?.staff || defaultErrorObj
const getStaffUpdateErrorData = (state:AppStateType) => state?.errorData?.staffUpdate || defaultErrorObj

export {
    getProductsErrorData,
    getProductErrorData,
    getLoginErrorData,
    getCustomerErrorData,
    getCustomerCreateErrorData,
    getCustomerUpdateErrorData,
    getStaffErrorData,
    getStaffUpdateErrorData
}
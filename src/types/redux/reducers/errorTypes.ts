import { Nullable } from '../../types'

export enum ErrorConstantsEnum {
    SET_PRODUCTS_ERROR_DATA = 'SET_PRODUCTS_ERROR_DATA',
    SET_PRODUCT_ERROR_DATA = 'SET_PRODUCT_ERROR_DATA',
    SET_PRODUCT_CREATE_ERROR_DATA = 'SET_PRODUCT_CREATE_ERROR_DATA',
    SET_PRODUCT_UPDATE_ERROR_DATA = 'SET_PRODUCT_UPDATE_ERROR_DATA',
    SET_PRODUCT_DELETE_ERROR_DATA = 'SET_PRODUCT_DELETE_ERROR_DATA',
    SET_LOGIN_ERROR_DATA = 'SET_LOGIN_ERROR_DATA',
    SET_UNLOGIN_ERROR_DATA = 'SET_UNLOGIN_ERROR_DATA',
    SET_CUSTOMERS_ERROR_DATA = 'SET_CUSTOMERS_ERROR_DATA',
    SET_CUSTOMER_ERROR_DATA = 'SET_CUSTOMER_ERROR_DATA',
    SET_CUSTOMER_CREATE_ERROR_DATA = 'SET_CUSTOMER_CREATE_ERROR_DATA',
    SET_CUSTOMER_UPDATE_ERROR_DATA = 'SET_CUSTOMER_UPDATE_ERROR_DATA',
    SET_CUSTOMER_DELETE_ERROR_DATA = 'SET_CUSTOMER_DELETE_ERROR_DATA',
    SET_STAFF_ERROR_DATA = 'SET_STAFF_ERROR_DATA',
    SET_STAFFS_ERROR_DATA = 'SET_STAFFS_ERROR_DATA',
    SET_STAFF_CREATE_ERROR_DATA = 'SET_STAFF_CREATE_ERROR_DATA',
    SET_STAFF_UPDATE_ERROR_DATA = 'SET_STAFF_UPDATE_ERROR_DATA',
    SET_STAFF_DELETE_ERROR_DATA = 'SET_STAFF_DELETE_ERROR_DATA',
    SET_ORDER_ERROR_DATA = 'SET_ORDER_ERROR_DATA',
    SET_ORDER_CREATE_ERROR_DATA = 'SET_ORDER_CREATE_ERROR_DATA',
    SET_ORDER_UPDATE_ERROR_DATA = 'SET_ORDER_UPDATE_ERROR_DATA',
    SET_ORDER_DELETE_ERROR_DATA = 'SET_ORDER_DELETE_ERROR_DATA'
}

export type ErrorInitialStateType = Record<InitialStateNamesType,ErrorObjType>

export type InitialStateNamesType='products' | 'product' | 'productCreate' | 'productUpdate' | 'productDelete' | 'login' | 'unlogin' | 'customers' | 'customer' | 'customerCreate' | 'customerUpdate' | 'customerDelete' | 'staff' | 'staffs' | 'staffCreate' | 'staffUpdate' | 'staffDelete' | 'orders' | 'orderCreate' | 'orderUpdate' | 'orderDelete'

export type ErrorObjType = {
    message: Nullable<string>,
    code: Nullable<number>
}

type ErrorSetProductsErrorDataActionType={type:ErrorConstantsEnum.SET_PRODUCTS_ERROR_DATA} & ErrorObjType
type ErrorSetProductErrorDataActionType={type:ErrorConstantsEnum.SET_PRODUCT_ERROR_DATA} & ErrorObjType
type ErrorSetProductCreateErrorDataActionType={type:ErrorConstantsEnum.SET_PRODUCT_CREATE_ERROR_DATA} & ErrorObjType
type ErrorSetProductUpdateErrorDataActionType={type:ErrorConstantsEnum.SET_PRODUCT_UPDATE_ERROR_DATA} & ErrorObjType
type ErrorSetProductDeleteErrorDataActionType={type:ErrorConstantsEnum.SET_PRODUCT_DELETE_ERROR_DATA} & ErrorObjType
type ErrorSetLoginErrorDataActionType={type:ErrorConstantsEnum.SET_LOGIN_ERROR_DATA} & ErrorObjType
type ErrorSetUnloginErrorDataActionType={type:ErrorConstantsEnum.SET_UNLOGIN_ERROR_DATA} & ErrorObjType
type ErrorSetCustomersErrorDataActionType={type:ErrorConstantsEnum.SET_CUSTOMERS_ERROR_DATA} & ErrorObjType
type ErrorSetCustomerErrorDataActionType={type:ErrorConstantsEnum.SET_CUSTOMER_ERROR_DATA} & ErrorObjType
type ErrorSetCustomerCreateErrorDataActionType={type:ErrorConstantsEnum.SET_CUSTOMER_CREATE_ERROR_DATA} & ErrorObjType
type ErrorSetCustomerUpdateErrorDataActionType={type:ErrorConstantsEnum.SET_CUSTOMER_UPDATE_ERROR_DATA} & ErrorObjType
type ErrorSetCustomerDeleteErrorDataActionType={type:ErrorConstantsEnum.SET_CUSTOMER_DELETE_ERROR_DATA} & ErrorObjType
type ErrorSetStaffErrorDataActionType={type:ErrorConstantsEnum.SET_STAFF_ERROR_DATA} & ErrorObjType
type ErrorSetStaffsErrorDataActionType={type:ErrorConstantsEnum.SET_STAFFS_ERROR_DATA} & ErrorObjType
type ErrorSetStaffCreateErrorDataActionType={type:ErrorConstantsEnum.SET_STAFF_CREATE_ERROR_DATA} & ErrorObjType
type ErrorSetStaffUpdateErrorDataActionType={type:ErrorConstantsEnum.SET_STAFF_UPDATE_ERROR_DATA} & ErrorObjType
type ErrorSetStaffDeleteErrorDataActionType={type:ErrorConstantsEnum.SET_STAFF_DELETE_ERROR_DATA} & ErrorObjType
type ErrorSetOrderErrorDataActionType={type:ErrorConstantsEnum.SET_ORDER_ERROR_DATA} & ErrorObjType
type ErrorSetOrderCreateErrorDataActionType={type:ErrorConstantsEnum.SET_ORDER_CREATE_ERROR_DATA} & ErrorObjType
type ErrorSetOrderUpdateErrorDataActionType={type:ErrorConstantsEnum.SET_ORDER_UPDATE_ERROR_DATA} & ErrorObjType
type ErrorSetOrderDeleteErrorDataActionType={type:ErrorConstantsEnum.SET_ORDER_DELETE_ERROR_DATA} & ErrorObjType

export type ErrorActionType=ErrorSetProductsErrorDataActionType | ErrorSetProductErrorDataActionType | ErrorSetProductCreateErrorDataActionType | ErrorSetProductUpdateErrorDataActionType | ErrorSetProductDeleteErrorDataActionType | ErrorSetLoginErrorDataActionType | ErrorSetUnloginErrorDataActionType | ErrorSetCustomersErrorDataActionType | ErrorSetCustomerErrorDataActionType | ErrorSetCustomerCreateErrorDataActionType | ErrorSetCustomerUpdateErrorDataActionType | ErrorSetCustomerDeleteErrorDataActionType | ErrorSetStaffErrorDataActionType | ErrorSetStaffsErrorDataActionType | ErrorSetStaffCreateErrorDataActionType | ErrorSetStaffUpdateErrorDataActionType | ErrorSetStaffDeleteErrorDataActionType | ErrorSetOrderErrorDataActionType | ErrorSetOrderCreateErrorDataActionType | ErrorSetOrderUpdateErrorDataActionType | ErrorSetOrderDeleteErrorDataActionType
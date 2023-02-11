import { Nullable } from '../../types'
import { NameObjType } from './reducersTypes'

export enum CustomersConstantsEnum {
    SET_CUSTOMER_ID = 'SET_CUSTOMER_ID',
    SET_CUSTOMERS_DATA = 'SET_CUSTOMERS_DATA',
    SET_INITIALIZE_CUSTOMERS = 'SET_INITIALIZE_CUSTOMERS',
    SET_PAGE_CUSTOMER = 'SET_PAGE_CUSTOMER',
    SET_SIZE_CUSTOMER = 'SET_SIZE_CUSTOMER',
    SET_TOTAL_CUSTOMER = 'SET_TOTAL_CUSTOMER',
    SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA',
    SET_INITIALIZE_CUSTOMER = 'SET_INITIALIZE_CUSTOMER',
    SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL',
    SET_CREATE_CUSTOMER_INITIALIZE = 'SET_CREATE_CUSTOMER_INITIALIZE',
    IS_UPDATE_CUSTOMER = 'IS_UPDATE_CUSTOMER',
    UPDATE_CUSTOMER_INITIALIZE = 'UPDATE_CUSTOMER_INITIALIZE',
    DELETE_CUSTOMER_INITIALIZE = 'DELETE_CUSTOMER_INITIALIZE',
    SET_FILTER_CUSTOMERS_DATA = 'SET_FILTER_CUSTOMERS_DATA'
}

export type CustomersInitialStateType = {
    customerId: Nullable<string>
    customers: Nullable<Array<CustomerType>>
    initializeCustomers: boolean
    page: number
    size: number
    total: number
    filter: CustomerFilterType
    customer: Nullable<CustomerType>
    initializeCustomer: boolean
    createCustomerInitialize: boolean
    isUpdateCustomer: boolean
    updateCustomerInitialize: boolean
    deleteCustomerInitialize: boolean
    visibleModal: boolean
}

export type CustomerType = {
    _id:string
    country:string
    city:string
    email:string
    phone:string
    name:NameObjType
}
export type CustomerFilterType = Partial<Record<'customerId' | 'name' | 'country' | 'city' | 'phone' | 'email', string>>

type CustomersSetCustomerIdActionType = {
    type: CustomersConstantsEnum.SET_CUSTOMER_ID
    customerId: Nullable<string>
}
type CustomersSetCustomersDataActionType = {
    type: CustomersConstantsEnum.SET_CUSTOMERS_DATA
    customersData: Nullable<Array<CustomerType>>
}
type CustomersSetInitializeCustomersActionType = {
    type: CustomersConstantsEnum.SET_INITIALIZE_CUSTOMERS
    initCustomers: boolean
}
type CustomersSetPageActionType = {
    type: CustomersConstantsEnum.SET_PAGE_CUSTOMER
    page: number
}
type CustomersSetSizeActionType = {
    type: CustomersConstantsEnum.SET_SIZE_CUSTOMER
    size: number
}
type CustomersSetTotalActionType = {
    type: CustomersConstantsEnum.SET_TOTAL_CUSTOMER
    total: number
}
type CustomersSetFilterCustDataActionType = {
    type: CustomersConstantsEnum.SET_FILTER_CUSTOMERS_DATA
    filterCustData: CustomerFilterType
}
type CustomersSetCustomerDataActionType = {
    type: CustomersConstantsEnum.SET_CUSTOMER_DATA
    data: Nullable<CustomerType>
}
type CustomersSetInitializeCustomerActionType = {
    type: CustomersConstantsEnum.SET_INITIALIZE_CUSTOMER
    initCust: boolean
}
type CustomersSetCreateCustomerInitializeActionType = {
    type: CustomersConstantsEnum.SET_CREATE_CUSTOMER_INITIALIZE
    initCreateCust: boolean
}
type CustomersSetVisibleModalActionType = {
    type: CustomersConstantsEnum.SET_VISIBLE_MODAL
    isVisible: boolean
}
type CustomersSetIsUpdateCustomerActionType = {
    type: CustomersConstantsEnum.IS_UPDATE_CUSTOMER
    isUpdate: boolean
}
type CustomersSetUpdateCustomerInitializeActionType = {
    type: CustomersConstantsEnum.UPDATE_CUSTOMER_INITIALIZE
    updateCustInit: boolean
}
type CustomersSetDeleteCustomerInitializeActionType = {
    type: CustomersConstantsEnum.DELETE_CUSTOMER_INITIALIZE
    delCustInit: boolean
}

export type CustomerActionType = CustomersSetCustomerIdActionType | CustomersSetCustomersDataActionType | CustomersSetInitializeCustomersActionType | CustomersSetPageActionType | CustomersSetSizeActionType | CustomersSetTotalActionType | CustomersSetFilterCustDataActionType | CustomersSetCustomerDataActionType | CustomersSetInitializeCustomerActionType | CustomersSetCreateCustomerInitializeActionType | CustomersSetVisibleModalActionType | CustomersSetIsUpdateCustomerActionType | CustomersSetUpdateCustomerInitializeActionType | CustomersSetDeleteCustomerInitializeActionType
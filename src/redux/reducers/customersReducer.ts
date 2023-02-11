import { CustomerActionType, CustomerFilterType, CustomersConstantsEnum, CustomersInitialStateType, CustomerType } from '../../types/redux/reducers/customersTypes'
import { Nullable } from '../../types/types'

const initialState:CustomersInitialStateType={
    customerId:null,

    customers:null,
    initializeCustomers:false,

    page:1,
    size:10,
    total:0,
    filter:{},

    customer:null,
    initializeCustomer:false,

    createCustomerInitialize:false,

    isUpdateCustomer:false,
    updateCustomerInitialize:false,

    deleteCustomerInitialize:false,

    visibleModal:false
}

export const customersReducer=(state:CustomersInitialStateType=initialState,action:CustomerActionType):CustomersInitialStateType=>{
    switch(action.type){
    case CustomersConstantsEnum.SET_CUSTOMER_ID:
        return {
            ...state,
            customerId:action.customerId
        }
    case CustomersConstantsEnum.SET_CUSTOMERS_DATA:
        return{
            ...state,
            customers:action.customersData
        }
    case CustomersConstantsEnum.SET_INITIALIZE_CUSTOMERS:
        return{
            ...state,
            initializeCustomers:action.initCustomers
        }
    case CustomersConstantsEnum.SET_PAGE_CUSTOMER:
        return{
            ...state,
            page:action.page
        }
    case CustomersConstantsEnum.SET_SIZE_CUSTOMER:
        return{
            ...state,
            size:action.size
        }
    case CustomersConstantsEnum.SET_TOTAL_CUSTOMER:
        return{
            ...state,
            total:action.total
        }
    case CustomersConstantsEnum.SET_FILTER_CUSTOMERS_DATA:
        return{
            ...state,
            filter:action.filterCustData
        }
    case CustomersConstantsEnum.SET_INITIALIZE_CUSTOMER:
        return{
            ...state,
            initializeCustomer:action.initCust
        }
    case CustomersConstantsEnum.SET_CUSTOMER_DATA:
        return{
            ...state,
            customer:action.data
        }
    case CustomersConstantsEnum.SET_CREATE_CUSTOMER_INITIALIZE:
        return{
            ...state,
            createCustomerInitialize:action.initCreateCust
        }
    case CustomersConstantsEnum.SET_VISIBLE_MODAL:
        return{
            ...state,
            visibleModal:action.isVisible
        }
    case CustomersConstantsEnum.IS_UPDATE_CUSTOMER:
        return{
            ...state,
            isUpdateCustomer:action.isUpdate
        }
    case CustomersConstantsEnum.UPDATE_CUSTOMER_INITIALIZE:
        return{
            ...state,
            updateCustomerInitialize:action.updateCustInit
        }
    case CustomersConstantsEnum.DELETE_CUSTOMER_INITIALIZE:
        return{
            ...state,
            deleteCustomerInitialize:action.delCustInit
        }
    default:
        return state
    }
}

const setCustomerId=(customerId:Nullable<string>)=>({type:CustomersConstantsEnum.SET_CUSTOMER_ID,customerId})
const setCustomersData=(customersData:Nullable<Array<CustomerType>>)=>({type:CustomersConstantsEnum.SET_CUSTOMERS_DATA,customersData})
const setInitializeCustomers=(initCustomers:boolean)=>({type:CustomersConstantsEnum.SET_INITIALIZE_CUSTOMERS,initCustomers})
const setPage=(page:number)=>({type:CustomersConstantsEnum.SET_PAGE_CUSTOMER,page})
const setSize=(size:number)=>({type:CustomersConstantsEnum.SET_SIZE_CUSTOMER,size})
const setTotal=(total:number)=>({type:CustomersConstantsEnum.SET_TOTAL_CUSTOMER,total})
const setFilterCustData=(filterCustData:CustomerFilterType)=>({type:CustomersConstantsEnum.SET_FILTER_CUSTOMERS_DATA,filterCustData})
const setCustomerData=(data:Nullable<CustomerType>)=>({type:CustomersConstantsEnum.SET_CUSTOMER_DATA,data})
const setInitializeCustomer=(initCust:boolean)=>({type:CustomersConstantsEnum.SET_INITIALIZE_CUSTOMER,initCust})
const setCreateCustomerInitialize=(initCreateCust:boolean)=>({type:CustomersConstantsEnum.SET_CREATE_CUSTOMER_INITIALIZE,initCreateCust})
const setVisibleModal=(isVisible:boolean)=>({type:CustomersConstantsEnum.SET_VISIBLE_MODAL,isVisible})
const setIsUpdateCustomer=(isUpdate:boolean)=>({type:CustomersConstantsEnum.IS_UPDATE_CUSTOMER,isUpdate})
const setUpdateCustomerInitialize=(updateCustInit:boolean)=>({type:CustomersConstantsEnum.UPDATE_CUSTOMER_INITIALIZE,updateCustInit})
const setDeleteCustomerInitialize=(delCustInit:boolean)=>({type:CustomersConstantsEnum.DELETE_CUSTOMER_INITIALIZE,delCustInit})

export {
    setCustomerId,
    setCustomersData,
    setInitializeCustomers,
    setPage,
    setSize,
    setTotal,
    setFilterCustData,
    setCustomerData,
    setInitializeCustomer,
    setCreateCustomerInitialize,
    setVisibleModal,
    setIsUpdateCustomer,
    setUpdateCustomerInitialize,
    setDeleteCustomerInitialize
}
import { ErrorActionType, ErrorConstantsEnum, ErrorInitialStateType } from '../../types/redux/reducers/errorTypes'
import { actionCreatorFromErrorReducer, errorReducerCase } from '../../utils/reducers'

const initialState:ErrorInitialStateType={
    products:{
        message:null,
        code:null
    },
    product:{
        message:null,
        code:null
    },
    productCreate:{
        message:null,
        code:null
    },
    productUpdate:{
        message:null,
        code:null
    },
    productDelete:{
        message:null,
        code:null
    },
    login:{
        message:null,
        code:null
    },
    unlogin:{
        message:null,
        code:null
    },
    customers:{
        message:null,
        code:null
    },
    customer:{
        message:null,
        code:null
    },
    customerCreate:{
        message:null,
        code:null
    },
    customerUpdate:{
        message:null,
        code:null
    },
    customerDelete:{
        message:null,
        code:null
    },
    staff:{
        message:null,
        code:null
    },
    staffs:{
        message:null,
        code:null
    },
    staffCreate:{
        message:null,
        code:null
    },
    staffUpdate:{
        message:null,
        code:null
    },
    staffDelete:{
        message:null,
        code:null
    },
    orders:{
        message:null,
        code:null
    },
    orderCreate:{
        message:null,
        code:null
    },
    orderUpdate:{
        message:null,
        code:null
    },
    orderDelete:{
        message:null,
        code:null
    }
}

export const ErrorReducer=(state:ErrorInitialStateType=initialState,action:ErrorActionType):ErrorInitialStateType=>{
    switch(action.type){
    case ErrorConstantsEnum.SET_PRODUCTS_ERROR_DATA:
        return{
            ...state,
            products:errorReducerCase(state.products,action)
        }
    case ErrorConstantsEnum.SET_PRODUCT_ERROR_DATA:
        return{
            ...state,
            product:errorReducerCase(state.product,action)
        }
    case ErrorConstantsEnum.SET_PRODUCT_CREATE_ERROR_DATA:
        return{
            ...state,
            productCreate:errorReducerCase(state.productCreate,action)
        }
    case ErrorConstantsEnum.SET_PRODUCT_UPDATE_ERROR_DATA:
        return{
            ...state,
            productUpdate:errorReducerCase(state.productUpdate,action)
        }
    case ErrorConstantsEnum.SET_PRODUCT_DELETE_ERROR_DATA:
        return{
            ...state,
            productDelete:errorReducerCase(state.productDelete,action)
        }
    case ErrorConstantsEnum.SET_LOGIN_ERROR_DATA:
        return{
            ...state,
            login:errorReducerCase(state.login,action)
        }
    case ErrorConstantsEnum.SET_UNLOGIN_ERROR_DATA:
        return{
            ...state,
            unlogin:errorReducerCase(state.unlogin,action)
        }
    case ErrorConstantsEnum.SET_CUSTOMERS_ERROR_DATA:
        return{
            ...state,
            customers:errorReducerCase(state.customers,action)
        }
    case ErrorConstantsEnum.SET_CUSTOMER_ERROR_DATA:
        return{
            ...state,
            customer:errorReducerCase(state.customer,action)
        }
    case ErrorConstantsEnum.SET_CUSTOMER_CREATE_ERROR_DATA:
        return{
            ...state,
            customerCreate:errorReducerCase(state.customerCreate,action)
        }
    case ErrorConstantsEnum.SET_CUSTOMER_UPDATE_ERROR_DATA:
        return{
            ...state,
            customerUpdate:errorReducerCase(state.customerUpdate,action)
        }
    case ErrorConstantsEnum.SET_CUSTOMER_DELETE_ERROR_DATA:
        return{
            ...state,
            customerDelete:errorReducerCase(state.customerDelete,action)
        }
    case ErrorConstantsEnum.SET_STAFF_ERROR_DATA:
        return{
            ...state,
            staff:errorReducerCase(state.staff,action)
        }
    case ErrorConstantsEnum.SET_STAFFS_ERROR_DATA:
        return{
            ...state,
            staffs:errorReducerCase(state.staffs,action)
        }
    case ErrorConstantsEnum.SET_STAFF_CREATE_ERROR_DATA:
        return{
            ...state,
            staffCreate:errorReducerCase(state.staffCreate,action)
        }
    case ErrorConstantsEnum.SET_STAFF_UPDATE_ERROR_DATA:
        return{
            ...state,
            staffUpdate:errorReducerCase(state.staffUpdate,action)
        }
    case ErrorConstantsEnum.SET_STAFF_DELETE_ERROR_DATA:
        return{
            ...state,
            staffDelete:errorReducerCase(state.staffDelete,action)
        }
    case ErrorConstantsEnum.SET_ORDER_ERROR_DATA:
        return{
            ...state,
            orders:errorReducerCase(state.orders,action)
        }
    case ErrorConstantsEnum.SET_ORDER_CREATE_ERROR_DATA:
        return{
            ...state,
            orderCreate:errorReducerCase(state.orderCreate,action)
        }
    case ErrorConstantsEnum.SET_ORDER_UPDATE_ERROR_DATA:
        return{
            ...state,
            orderUpdate:errorReducerCase(state.orderUpdate,action)
        }
    case ErrorConstantsEnum.SET_ORDER_DELETE_ERROR_DATA:
        return{
            ...state,
            orderDelete:errorReducerCase(state.orderDelete,action)
        }
    default:
        return state
    }
}

const setProductsErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_PRODUCTS_ERROR_DATA)
const SetProductErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_PRODUCT_ERROR_DATA)
const setProductCreateErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_PRODUCT_CREATE_ERROR_DATA)
const setProductUpdateErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_PRODUCT_UPDATE_ERROR_DATA)
const setProductDeleteErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_PRODUCT_DELETE_ERROR_DATA)
const setLoginErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_LOGIN_ERROR_DATA)
const setUnloginErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_UNLOGIN_ERROR_DATA)
const setCustomersErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_CUSTOMERS_ERROR_DATA)
const setCustomerErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_CUSTOMER_ERROR_DATA)
const setCustomerCreateErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_CUSTOMER_CREATE_ERROR_DATA)
const setCustomerUpdateErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_CUSTOMER_UPDATE_ERROR_DATA)
const setCustomerDeleteErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_CUSTOMER_DELETE_ERROR_DATA)
const setStaffErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_STAFF_ERROR_DATA)
const setStaffsErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_STAFFS_ERROR_DATA)
const setStaffCreateErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_STAFF_CREATE_ERROR_DATA)
const setStaffUpdateErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_STAFF_UPDATE_ERROR_DATA)
const setStaffDeleteErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_STAFF_DELETE_ERROR_DATA)
const setOrderErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_ORDER_ERROR_DATA)
const setOrderCreateErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_ORDER_CREATE_ERROR_DATA)
const setOrderUpdateErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_ORDER_UPDATE_ERROR_DATA)
const setOrderDeleteErrorData=actionCreatorFromErrorReducer(ErrorConstantsEnum.SET_ORDER_DELETE_ERROR_DATA)

export{
    setProductsErrorData,
    SetProductErrorData,
    setProductCreateErrorData,
    setProductUpdateErrorData,
    setProductDeleteErrorData,
    setLoginErrorData,
    setUnloginErrorData,
    setCustomersErrorData,
    setCustomerErrorData,
    setCustomerCreateErrorData,
    setCustomerUpdateErrorData,
    setCustomerDeleteErrorData,
    setStaffErrorData,
    setStaffsErrorData,
    setStaffCreateErrorData,
    setStaffUpdateErrorData,
    setStaffDeleteErrorData,
    setOrderErrorData,
    setOrderCreateErrorData,
    setOrderUpdateErrorData,
    setOrderDeleteErrorData
}
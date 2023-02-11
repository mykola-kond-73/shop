import { OrderDataType, OrderFiltersType, OrdersActionType, OrdersConstantsEnum, OrdersInitialStateType } from '../../types/redux/reducers/orderTypes'
import { Nullable } from '../../types/types'

const initialState:OrdersInitialStateType={
    ordersData:null,
    initializeOrders:false,

    page:1,
    size:10,
    totalCount:0,

    visibleModal:false,
    createOrderInitialize:false,

    initialUpdateOrder:false,
    initialDeleteOrder:false,

    filter:{}
}

export const ordersReducer=(state:OrdersInitialStateType=initialState,action:OrdersActionType):OrdersInitialStateType=>{
    switch(action.type){
    case OrdersConstantsEnum.SET_ORDERS_DATA:
        return{
            ...state,
            ordersData:action.data
        }
    case OrdersConstantsEnum.SET_INITIALIZE_ORDERS:
        return{
            ...state,
            initializeOrders:action.initOrders
        }
    case OrdersConstantsEnum.SET_PAGE_ORDER:
        return{
            ...state,
            page:action.page
        }
    case OrdersConstantsEnum.SET_SIZE_ORDER:
        return{
            ...state,
            size:action.size
        }
    case OrdersConstantsEnum.SET_TOTAL_COUNT_ORDER:
        return{
            ...state,
            totalCount:action.totalCount
        }
    case OrdersConstantsEnum.SET_VISIBLE_MODAL:
        return{
            ...state,
            visibleModal:action.visible
        }
    case OrdersConstantsEnum.CREATE_ORDER_INITIALIZE:
        return{
            ...state,
            createOrderInitialize:action.initCreateOrd
        }
    case OrdersConstantsEnum.SET_INITIAL_UPDATE_ORDER:
        return{
            ...state,
            initialUpdateOrder:action.initUpdOrd
        }
    case OrdersConstantsEnum.SET_INITIALIZE_DELETE_ORDER:
        return{
            ...state,
            initialDeleteOrder:action.initDelOrd
        }
    case OrdersConstantsEnum.SET_ORDER_FILTER_DATA:
        return{
            ...state,
            filter:action.filterOrderData
        }
    default:
        return state
    }
}

const setOrdersData=(data:Nullable<Array<OrderDataType>>)=>({type:OrdersConstantsEnum.SET_ORDERS_DATA,data})
const setInitializeOrders=(initOrders:boolean)=>({type:OrdersConstantsEnum.SET_INITIALIZE_ORDERS,initOrders})
const setPage=(page:number)=>({type:OrdersConstantsEnum.SET_PAGE_ORDER,page})
const setSize=(size:number)=>({type:OrdersConstantsEnum.SET_SIZE_ORDER,size})
const setTotalCount=(totalCount:number)=>({type:OrdersConstantsEnum.SET_TOTAL_COUNT_ORDER,totalCount})
const setVisibleModalOrder=(visible:boolean)=>({type:OrdersConstantsEnum.SET_VISIBLE_MODAL,visible})
const setCreateOrderInitialize=(initCreateOrd:boolean)=>({type:OrdersConstantsEnum.CREATE_ORDER_INITIALIZE,initCreateOrd})
const setInitialUpdateOrder=(initUpdOrd:boolean)=>({type:OrdersConstantsEnum.SET_INITIAL_UPDATE_ORDER,initUpdOrd})
const setInitializeDeleteOrder=(initDelOrd:boolean)=>({type:OrdersConstantsEnum.SET_INITIALIZE_DELETE_ORDER,initDelOrd})
const setFilterOrderData=(filterOrderData:OrderFiltersType)=>({type:OrdersConstantsEnum.SET_ORDER_FILTER_DATA,filterOrderData})

export{
    setOrdersData,
    setInitializeOrders,
    setPage,
    setSize,
    setTotalCount,
    setVisibleModalOrder,
    setCreateOrderInitialize,
    setInitialUpdateOrder,
    setInitializeDeleteOrder,
    setFilterOrderData
}
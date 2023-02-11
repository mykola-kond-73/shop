import { Nullable } from '../../types'
import { CustomerType } from './customersTypes'
import { ProductType } from './productsTypes'

export enum OrdersConstantsEnum {
    SET_ORDERS_DATA = 'SET_ORDERS_DATA',
    SET_INITIALIZE_ORDERS = 'SET_INITIALIZE_ORDERS',
    SET_PAGE_ORDER = 'SET_PAGE_ORDER',
    SET_SIZE_ORDER = 'SET_SIZE_ORDER',
    SET_TOTAL_COUNT_ORDER = 'SET_TOTAL_COUNT_ORDER',
    SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL',
    CREATE_ORDER_INITIALIZE = 'CREATE_ORDER_INITIALIZE',
    SET_INITIAL_UPDATE_ORDER = 'SET_INITIAL_UPDATE_ORDER',
    SET_INITIALIZE_DELETE_ORDER = 'SET_INITIALIZE_DELETE_ORDER',
    SET_ORDER_FILTER_DATA = 'SET_ORDER_FILTER_DATA'
}

export type OrdersInitialStateType = {
    ordersData:Nullable<Array<OrderDataType>>
    initializeOrders: boolean
    page: number
    size: number
    totalCount: number
    visibleModal: boolean
    createOrderInitialize: boolean
    initialUpdateOrder: boolean
    initialDeleteOrder: boolean
    filter:OrderFiltersType
}

export type OrderDataType = {
    _id:string
    customer:CustomerType
    products:Array<ProductOrderType>
    comment:string
}

export type ProductOrderType={
    product:Omit<ProductType,'description'>
    count:number
}
export type OrderFiltersType = Partial<Record<'orderId' | 'clientId', string>>

type OrdersSetOrdersDataActionType={type:OrdersConstantsEnum.SET_ORDERS_DATA,data:Nullable<Array<OrderDataType>>}
type OrdersSetInitializeOrdersActionType={type:OrdersConstantsEnum.SET_INITIALIZE_ORDERS,initOrders:boolean}
type OrdersSetPageActionType={type:OrdersConstantsEnum.SET_PAGE_ORDER,page:number}
type OrdersSetSizeActionType={type:OrdersConstantsEnum.SET_SIZE_ORDER,size:number}
type OrdersSetTotalCountActionType={type:OrdersConstantsEnum.SET_TOTAL_COUNT_ORDER,totalCount:number}
type OrdersSetVisibleModalOrderActionType={type:OrdersConstantsEnum.SET_VISIBLE_MODAL,visible:boolean}
type OrdersSetCreateOrderInitializeActionType={type:OrdersConstantsEnum.CREATE_ORDER_INITIALIZE,initCreateOrd:boolean}
type OrdersSetInitialUpdateOrderActionType={type:OrdersConstantsEnum.SET_INITIAL_UPDATE_ORDER,initUpdOrd:boolean}
type OrdersSetInitializeDeleteOrderActionType={type:OrdersConstantsEnum.SET_INITIALIZE_DELETE_ORDER,initDelOrd:boolean}
type OrdersSetFilterOrderDataActionType={type:OrdersConstantsEnum.SET_ORDER_FILTER_DATA,filterOrderData:OrderFiltersType}

export type OrdersActionType=OrdersSetOrdersDataActionType | OrdersSetInitializeOrdersActionType | OrdersSetPageActionType | OrdersSetSizeActionType | OrdersSetTotalCountActionType | OrdersSetVisibleModalOrderActionType | OrdersSetCreateOrderInitializeActionType | OrdersSetInitialUpdateOrderActionType | OrdersSetInitializeDeleteOrderActionType | OrdersSetFilterOrderDataActionType
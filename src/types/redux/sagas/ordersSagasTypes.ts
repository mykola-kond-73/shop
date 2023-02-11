import { BasketProductType } from '../reducers/basketTypes'

export enum OrdersSagasConstantsEnum {
    SAGA_CREATE_ORDER = 'SAGA_CREATE_ORDER',
    SAGA_GET_OTDERS = 'SAGA_GET_OTDERS',
    SAGA_UPDATE_ORDER = 'SAGA_UPDATE_ORDER',
    SAGA_DELETE_ORDER = 'SAGA_DELETE_ORDER'
}

export type CreateOrderDataType = {
    customer: string
    products: Array<BasketProductType>
    comment:string
}

// export type MinProductOrderType = {
//     product: string
//     count: string
// }
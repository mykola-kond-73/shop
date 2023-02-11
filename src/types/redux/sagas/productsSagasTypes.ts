import { Nullable } from '../../types'
import { ProductType } from '../reducers/productsTypes'
import { AvatarType, ShareType } from '../reducers/reducersTypes'

export enum ProductsSagasConstantsEnum{
    SAGA_CREATE_PRODUCT='SAGA_CREATE_PRODUCT',
    SAGA_GET_PRODUCTS_DATA='SAGA_GET_PRODUCTS_DATA',
    SAGA_GET_PRODUCT_SAGA='SAGA_GET_PRODUCT_SAGA',
    SAGA_UPDATE_PRODUCT_DATA='SAGA_UPDATE_PRODUCT_DATA',
    SAGA_DELETE_PRODUCT='SAGA_DELETE_PRODUCT'   
}

export type CreateProductType=Omit<ProductType,'_id'>
// {
//     title:string,
//     description:string,
//     price:number,
//     discount:number,
//     total:number,
//     isTop:boolean,
//     section:string,
//     share:Nullable<ShareType>
//     avatar:AvatarType
//     photos:Array<string>
// }
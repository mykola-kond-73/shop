import { Nullable } from '../../types';
import { ProductType } from './../reducers/productsTypes';

export type BasketModificateNewProductObjType = {
    count: number
    product: Omit<ProductType, 'avatar' | 'description' | 'section' | 'photos'> &
    { 
        avatar: string 
        description?:string 
        section?:Nullable<string> 
        photos?:Array<string>
    }
}
export type BasketModificateProductList=Omit<BasketModificateNewProductObjType, 'avatar' | 'description' | 'section' | 'photos'> & {avatar: string }

export type BasketGetOrderedProductsSelectorType={
    totalPrice:number
    fullProductsList:Array<BasketModificateNewProductObjType>
}

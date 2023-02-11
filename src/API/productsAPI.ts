import { AxiosPromise } from 'axios';
import { productsFilterType, ProductType } from '../types/redux/reducers/productsTypes'
import { CreateProductType } from '../types/redux/sagas/productsSagasTypes'
import { ResponceType, ResponceWithMetaDataType } from '../types/redux/sagas/sagasTypes'
import { Nullable } from '../types/types'
import {instance, ResponceAxiosType} from './api'

export const productsAPI={
    createProduct(data:CreateProductType){

        return instance.post<ResponceAxiosType<ResponceType<string>>>('/products',data)
    },
    getProducts(pageCount:number=1,pageSize:number=2,section:Nullable<string>=null,filter:productsFilterType|string={}){
        return instance.get<ResponceAxiosType<ResponceWithMetaDataType<ProductType[]>>>(`/products?pg=${pageCount}&sz=${pageSize}&sct=${section}&filter=${filter}`)
    },
    getProduct(productId:string){
        return instance.get<ResponceAxiosType<ResponceType<ProductType>>>(`/products/${productId}`)
    },
    updateProduct(hash:string,data:CreateProductType){
        return instance.put<ResponceAxiosType<ResponceType<string>>>(`/products/${hash}`,data)
    },
    deleteProduct(productId:string){
        return instance.delete(`/products/${productId}`) as AxiosPromise<ResponceAxiosType<ProductType>>
    }
}
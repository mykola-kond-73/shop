import { AxiosPromise } from 'axios';
import { OrderDataType, OrderFiltersType } from '../types/redux/reducers/orderTypes'
import { CreateOrderDataType } from '../types/redux/sagas/ordersSagasTypes'
import { ResponceType, ResponceWithMetaDataType } from '../types/redux/sagas/sagasTypes'
import {instance, ResponceAxiosType} from './api'

export const orderAPI={
    createOrder(data:CreateOrderDataType){
        return instance.post<ResponceAxiosType<ResponceType<string>>>('/orders',data)
    },
    getOrders(page:number,size:number,filter:OrderFiltersType={}){
        return instance.get<ResponceAxiosType<ResponceWithMetaDataType<OrderDataType[]>>>(`/orders?page=${page}&size=${size}&filter=${JSON.stringify(filter)}`)
    },
    updateOrder(hash:string,data:CreateOrderDataType){
        return instance.put<ResponceAxiosType<ResponceType<string>>>(`/orders/${hash}`,data)
    },
    deleteOrder(hash:string){
        return instance.delete(`/orders/${hash}`) as AxiosPromise<ResponceAxiosType<OrderDataType>>
    }
}
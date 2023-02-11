import { AxiosPromise } from 'axios'
import { CustomerFilterType, CustomerType } from '../types/redux/reducers/customersTypes'
import { CreateCustomerDataType, UpdateCustomerDataType } from '../types/redux/sagas/CustomersSagasTypes'
import { ResponceType, ResponceWithMetaDataType } from '../types/redux/sagas/sagasTypes'
import {instance, ResponceAxiosType} from './api'

export const customersAPI={
    getCustomers(page:number,size:number,filter:CustomerFilterType={}){
        return instance.get<ResponceAxiosType<ResponceWithMetaDataType<CustomerType[]>>>(`/customers?page=${page}&size=${size}&filter=${JSON.stringify(filter)}`)
    },
    getCustomer(hash:string){
        return instance.get<ResponceAxiosType<ResponceType<CustomerType>>>(`/customers/${hash}`)
    },
    createCustomer(data:CreateCustomerDataType){
        return instance.post<ResponceAxiosType<ResponceType<string>>>('/customers',data)
    },
    updateCustomer(hash:string,data:UpdateCustomerDataType){
        return instance.put<ResponceAxiosType<ResponceType<string>>>(`/customers/${hash}`,data)
    },
    //todo      можливо тип невірний
    deleteCuctomer(hash:string){
        return instance.delete(`/customers/${hash}`) as AxiosPromise<ResponceAxiosType<CustomerType>>
    }
}


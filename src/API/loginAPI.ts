import { AxiosPromise } from 'axios';
import { loginDataType } from '../types/redux/sagas/loginSagasTypes'
import { ResponceType } from '../types/redux/sagas/sagasTypes'
import {instance, ResponceAxiosType} from './api'

export const loginAPI={
    loginStaff(autorization:string){
        return instance.post<ResponceAxiosType<ResponceType<loginDataType>>>('/auth/login',{},{headers:{'Authorization':autorization}}) 
    },
    //todo реалізувати на сервері
    LoginCustomer(autorization:string){
        return instance.post<ResponceAxiosType<ResponceType<loginDataType>>>('/auth/loginCust',{},{headers:{'Authorization':autorization}})
    },
    unlogin(){
        return instance.delete('/auth/unlogin') as AxiosPromise<ResponceAxiosType<{}>>
    }
}
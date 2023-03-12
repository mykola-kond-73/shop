import { AxiosPromise } from 'axios';
import { loginDataType } from '../types/redux/sagas/loginSagasTypes'
import { ResponceType } from '../types/redux/sagas/sagasTypes'
import {instance, ResponceAxiosType} from './api'

export const loginAPI={
    loginStaff(email:string,password:string){
        return instance.post<ResponceAxiosType<ResponceType<loginDataType>>>('/auth/login',{email,password}) 
    },
    LoginCustomer(email:string,password:string){
        return instance.post<ResponceAxiosType<ResponceType<loginDataType>>>('/auth/loginCust',{email,password})
    },
    unlogin(){
        return instance.delete('/auth/logout') as AxiosPromise<ResponceAxiosType<{}>>
    }
}
import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    // baseURL: 'http://localhost:8000',
    baseURL: process.env.REACT_APP_SERVER 

})

export type ResponceAxiosType<T={}>=T & {
    message:Array<string>
    resultCode:number
}
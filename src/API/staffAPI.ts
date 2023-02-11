import { AxiosPromise } from 'axios';
import { StaffDataType } from '../types/redux/reducers/staffTypes'
import { ResponceType, ResponceWithMetaDataType } from '../types/redux/sagas/sagasTypes'
import { CreateStaffDataType, UpdateStaffDataType } from '../types/redux/sagas/staffSagasTypes'
import {instance, ResponceAxiosType} from './api'

export const StaffAPI={
    getStaff(hash:string){
        return instance.get<ResponceAxiosType<ResponceType<StaffDataType>>>(`/staff/${hash}`)
    },
    getStaffs(page:number,size:number,filter={}){
        return instance.get<ResponceAxiosType<ResponceWithMetaDataType<StaffDataType[]>>>(`/staff?page=${page}&size=${size}&filter=${JSON.stringify(filter)}`)
    },
    createStaff(data:CreateStaffDataType){
        return instance.post<ResponceAxiosType<ResponceType<string>>>('/staff',data)
    },
    updateStaff(hash:string,data:UpdateStaffDataType){
        return instance.put<ResponceAxiosType<ResponceType<string>>>(`/staff/${hash}`,data)
    },
    deleteStaff(hash:string){
        return instance.delete(`staff/${hash}`) as AxiosPromise<ResponceAxiosType<StaffDataType>>
    }
}
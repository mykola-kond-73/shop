import { RoleStaffType } from '../reducers/reducersTypes'

export enum StaffSagasConstantsType {
    SAGA_CREATE_STAFF = 'SAGA_CREATE_STAFF',
    SAGA_GET_STAFFS = 'SAGA_GET_STAFFS',
    SAGA_GET_STAFF = 'SAGA_GET_STAFF',
    SAGA_UPDATE_STAFF = 'SAGA_UPDATE_STAFF',
    SAGA_DELETE_STAFF = 'SAGA_DELETE_STAFF'
}

export type getStaffWorkerSagaType={
    type:StaffSagasConstantsType.SAGA_GET_STAFF
    hash:string
}

export type CreateStaffDataType = {
    name:string
    email:string
    phone:string
    role:RoleStaffType
    password:string
    isAdmin:boolean
    secretKey?:string
}

export type UpdateStaffDataType=Omit<CreateStaffDataType,'password'|'secretKey'>
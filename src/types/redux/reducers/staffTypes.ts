import { Nullable } from '../../types'
import { NameObjType, RoleStaffType } from './reducersTypes'

export enum StaffConstantsEnum {
    SET_STAFF_ID = 'SET_STAFF_ID',
    SET_STAFF_DATA = 'SET_STAFF_DATA',
    SET_INITIALIZE_STAFF = 'SET_INITIALIZE_STAFF',
    IS_UPDATE_STAFF = 'IS_UPDATE_STAFF',
    UPDATE_STAFF_INITIALIZE = 'UPDATE_STAFF_INITIALIZE',
    DELETE_STAFF_INITALIZE = 'DELETE_STAFF_INITALIZE',
    SET_STAFFS_DATA = 'SET_STAFFS_DATA',
    SET_INITIALIZE_STAFFS = 'SET_INITIALIZE_STAFFS',
    SET_PAGE_STAFF = 'SET_PAGE_STAFF',
    SET_SIZE_STAFF = 'SET_SIZE_STAFF',
    SET_TOTAL_STAFF = 'SET_TOTAL_STAFF',
    SET_CREATE_STAFF_INITIALIZE = 'SET_CREATE_STAFF_INITIALIZE',
    SET_FILTER_STAFFS_DATA = 'SET_FILTER_STAFFS_DATA',
}

export type StaffInitialStateType = {
    staffId: Nullable<string>,
    staffs: Nullable<Array<StaffDataType>>,
    initializeStaffs: boolean,
    page: number
    size: number
    total: number
    filter: StaffFilterType
    staff: Nullable<StaffDataType>,
    initializeStaff: boolean
    isUpdateStaff: boolean
    updateStaffInitialize: boolean
    deleteStaffInitialize: boolean
    createStaffInitialize: boolean
}

export type StaffDataType = {
    _id: string
    name: NameObjType
    email: string
    phone: string
    role: RoleStaffType
    isAdmin: boolean
}

export type StaffFilterType =Partial<{
    staffId:string
    isAdmin:boolean
    name:string
    role:RoleStaffType
    phone:string
    email:string
}>

type StaffSetStaffIdActionType={type:StaffConstantsEnum.SET_STAFF_ID,staffId:Nullable<string>}
type StaffSetStaffDataActionType={type:StaffConstantsEnum.SET_STAFF_DATA,staffData:Nullable<StaffDataType>}
type StaffSetInitializeStaffActionType={type:StaffConstantsEnum.SET_INITIALIZE_STAFF,initStaff:boolean}
type StaffSetIsUpdateStaffActionType={type:StaffConstantsEnum.IS_UPDATE_STAFF,isUpdate:boolean}
type StaffSetUpdateStaffInitializeActionType={type:StaffConstantsEnum.UPDATE_STAFF_INITIALIZE,updateStaffInit:boolean}
type StaffSetDeleteStaffInitializeActionType={type:StaffConstantsEnum.DELETE_STAFF_INITALIZE,delStaffInit:boolean}
type StaffSetStaffsActionType={type:StaffConstantsEnum.SET_STAFFS_DATA,staffsData:Nullable<Array<StaffDataType>>}
type StaffSetInitializeStaffsActionType={type:StaffConstantsEnum.SET_INITIALIZE_STAFFS,staffsInit:boolean}
type StaffSetPageActionType={type:StaffConstantsEnum.SET_PAGE_STAFF,page:number}
type StaffSetSizeActionType={type:StaffConstantsEnum.SET_SIZE_STAFF,size:number}
type StaffSetTotalActionType={type:StaffConstantsEnum.SET_TOTAL_STAFF,total:number}
type StaffSetCreateStaffInitializeActionType={type:StaffConstantsEnum.SET_CREATE_STAFF_INITIALIZE,createStaffInit:boolean}
type StaffSetStaffsFilterDataActionType={type:StaffConstantsEnum.SET_FILTER_STAFFS_DATA,staffFilterData:StaffFilterType}

export type StaffActionType=StaffSetStaffIdActionType | StaffSetStaffDataActionType | StaffSetInitializeStaffActionType | StaffSetIsUpdateStaffActionType | StaffSetUpdateStaffInitializeActionType | StaffSetDeleteStaffInitializeActionType | StaffSetStaffsActionType | StaffSetInitializeStaffsActionType | StaffSetPageActionType | StaffSetSizeActionType | StaffSetTotalActionType | StaffSetCreateStaffInitializeActionType | StaffSetStaffsFilterDataActionType
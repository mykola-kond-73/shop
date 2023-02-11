import { StaffActionType, StaffConstantsEnum, StaffDataType, StaffFilterType, StaffInitialStateType } from '../../types/redux/reducers/staffTypes'
import { Nullable } from '../../types/types'


const initialState:StaffInitialStateType={
    staffId:null,

    staffs:null,
    initializeStaffs:false, 
    page:1,
    size:10,
    total:0,
    
    filter:{},
    
    staff:null,
    initializeStaff:false,

    isUpdateStaff:false,
    updateStaffInitialize:false,

    deleteStaffInitialize:false,

    createStaffInitialize:false
}

export const staffReducer=(state:StaffInitialStateType=initialState,action:StaffActionType):StaffInitialStateType=>{
    switch(action.type){
    case StaffConstantsEnum.SET_STAFF_ID:
        return{
            ...state,
            staffId:action.staffId
        }
    case StaffConstantsEnum.SET_STAFFS_DATA:
        return{
            ...state,
            staffs:action.staffsData
        }
    case StaffConstantsEnum.SET_INITIALIZE_STAFFS:
        return{
            ...state,
            initializeStaffs:action.staffsInit
        }            
    case StaffConstantsEnum.SET_PAGE_STAFF:
        return{
            ...state,
            page:action.page
        }
    case StaffConstantsEnum.SET_SIZE_STAFF:
        return{
            ...state,
            size:action.size
        }
    case StaffConstantsEnum.SET_TOTAL_STAFF:
        return{
            ...state,
            total:action.total
        }
    case StaffConstantsEnum.SET_CREATE_STAFF_INITIALIZE:
        return{
            ...state,
            createStaffInitialize:action.createStaffInit
        }
    case StaffConstantsEnum.SET_STAFF_DATA:
        return{
            ...state,
            staff:action.staffData
        }
    case StaffConstantsEnum.SET_INITIALIZE_STAFF:
        return{
            ...state,
            initializeStaff:action.initStaff
        }
    case StaffConstantsEnum.IS_UPDATE_STAFF:
        return{
            ...state,
            isUpdateStaff:action.isUpdate
        }
    case StaffConstantsEnum.UPDATE_STAFF_INITIALIZE:
        return{
            ...state,
            updateStaffInitialize:action.updateStaffInit
        }
    case StaffConstantsEnum.DELETE_STAFF_INITALIZE:
        return{
            ...state,
            deleteStaffInitialize:action.delStaffInit
        }
    case StaffConstantsEnum.SET_FILTER_STAFFS_DATA:
        return{
            ...state,
            filter:action.staffFilterData
        }
    default:
        return state
    }
}

const setStaffId=(staffId:Nullable<string>)=>({type:StaffConstantsEnum.SET_STAFF_ID,staffId})
const setStaffData=(staffData:Nullable<StaffDataType>)=>({type:StaffConstantsEnum.SET_STAFF_DATA,staffData})
const setInitializeStaff=(initStaff:boolean)=>({type:StaffConstantsEnum.SET_INITIALIZE_STAFF,initStaff})
const setIsUpdateStaff=(isUpdate:boolean)=>({type:StaffConstantsEnum.IS_UPDATE_STAFF,isUpdate})
const setUpdateStaffInitialize=(updateStaffInit:boolean)=>({type:StaffConstantsEnum.UPDATE_STAFF_INITIALIZE,updateStaffInit})
const setDeleteStaffInitialize=(delStaffInit:boolean)=>({type:StaffConstantsEnum.DELETE_STAFF_INITALIZE,delStaffInit})
const setStaffs=(staffsData:Nullable<Array<StaffDataType>>)=>({type:StaffConstantsEnum.SET_STAFFS_DATA,staffsData}) 
const setInitializeStaffs=(staffsInit:boolean)=>({type:StaffConstantsEnum.SET_INITIALIZE_STAFFS,staffsInit}) 
const setPage=(page:number)=>({type:StaffConstantsEnum.SET_PAGE_STAFF,page})
const setSize=(size:number)=>({type:StaffConstantsEnum.SET_SIZE_STAFF,size}) 
const setTotal=(total:number)=>({type:StaffConstantsEnum.SET_TOTAL_STAFF,total}) 
const setCreateStaffInitialize=(createStaffInit:boolean)=>({type:StaffConstantsEnum.SET_CREATE_STAFF_INITIALIZE,createStaffInit})
const setStaffsFilterData=(staffFilterData:StaffFilterType)=>({type:StaffConstantsEnum.SET_FILTER_STAFFS_DATA,staffFilterData})

export{
    setStaffId,
    setStaffData,
    setInitializeStaff,
    setIsUpdateStaff,
    setUpdateStaffInitialize,
    setDeleteStaffInitialize,
    setStaffs,
    setInitializeStaffs,
    setPage,
    setSize,
    setTotal,
    setCreateStaffInitialize,
    setStaffsFilterData
}
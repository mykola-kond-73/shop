import { AppStateType } from '../../types/redux/storeTypes'

const getStaffIdInit=(state:AppStateType)=>state?.staffData?.staffId || null
const getStaffData = (state:AppStateType) =>state?.staffData?.staff || null
const getInitializeStaff=(state:AppStateType)=>state?.staffData?.initializeStaff || false
const getStaffId=(state:AppStateType)=>{
    if(state.staffData&&state.staffData.staff){
        return state.staffData.staff._id
    }
    return null
}
const getIsUpdateStaff =(state:AppStateType) => state?.staffData?.isUpdateStaff || false
const getUpdateStaffInitialize=(state:AppStateType)=>state?.staffData?.updateStaffInitialize || false
const getDeleteStaffInitialize=(state:AppStateType)=>state?.staffData?.deleteStaffInitialize || false
const getStaffs=(state:AppStateType)=>{
    {
        if (state.staffData&&state.staffData.staffs) {
            const newData=[]
            for (let i = 0; i < state.staffData.staffs.length; i++) {
                newData.push({
                    _id:state.staffData.staffs[i]._id,
                    email:state.staffData.staffs[i].email,
                    phone:state.staffData.staffs[i].phone,
                    role:state.staffData.staffs[i].role,
                    isAdmin:state.staffData.staffs[i].isAdmin?'+':'',
                    firstname:state.staffData.staffs[i].name.firstname,
                    lastname:state.staffData.staffs[i].name.lastName
                })
            }
            return newData
        }
        return null
    }
}
const getInitializeStaffs=(state:AppStateType)=>state?.staffData?.initializeStaffs || false
const getPage=(state:AppStateType)=>state?.staffData?.page || 1
const getSize=(state:AppStateType)=>state?.staffData?.size || 10
const getTotal=(state:AppStateType)=>state?.staffData?.total || 0
const getCreateStaffInitialize=(state:AppStateType)=>state?.staffData?.createStaffInitialize || false
const getFilter=(state:AppStateType)=>state?.staffData?.filter || {}

export {
    getStaffIdInit,
    getStaffData,
    getStaffId,
    getIsUpdateStaff,
    getUpdateStaffInitialize,
    getDeleteStaffInitialize,
    getStaffs,
    getInitializeStaffs,
    getInitializeStaff,
    getPage,
    getSize,
    getTotal,
    getCreateStaffInitialize,
    getFilter
}
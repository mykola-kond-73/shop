import { StaffAPI } from '../../../API/staffAPI'
import { runSagaHelper } from '../../../test/helpers/runSagaHelper'
import { sagasCreateStaffDataForAction, sagasGetCustomerData, sagasGetCustomersData, sagasRejectData, sagasUpdateStaffDataForAction } from '../../../test/testingData'
import { createStaffWorker, deleteStaffWorker, getStaffsWorker, getStaffWorker, sagaCreateStaff, sagaDeleteStaff, sagaGetStaffs, sagaUpdateStaff, updateStaffWorker } from '../staffSaga'

describe('Staffes sagas testing',()=>{
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('createStaffWorker worker testing',()=>{
        const action=sagaCreateStaff(sagasCreateStaffDataForAction,()=>{},()=>{})
        test('witout error',async ()=>{
            StaffAPI.createStaff=jest.fn().mockResolvedValue()
            
            const dispatched=[]
            await runSagaHelper(createStaffWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.createStaff).toHaveBeenCalledWith(sagasCreateStaffDataForAction)
            expect(dispatched).toEqual([
                {type:'SET_CREATE_STAFF_INITIALIZE',createStaffInit:true},
                {type:'SET_STAFF_CREATE_ERROR_DATA',message:null,code:null},
                {type:'SET_CREATE_STAFF_INITIALIZE',createStaffInit:false}
            ])
        })

        test('with error',async()=>{
            StaffAPI.createStaff=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(createStaffWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.createStaff).toHaveBeenCalledWith(sagasCreateStaffDataForAction)
            expect(dispatched).toEqual([
                {type:'SET_CREATE_STAFF_INITIALIZE',createStaffInit:true},
                {type:'SET_STAFF_CREATE_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_CREATE_STAFF_INITIALIZE',createStaffInit:false}
            ])
        })
    })

    describe('getStaffsWorker worker testing',()=>{
        const action=sagaGetStaffs(1,20,{})
        test('witout error',async ()=>{
            StaffAPI.getStaffs=jest.fn().mockResolvedValue(sagasGetCustomersData)
            
            const dispatched=[]
            await runSagaHelper(getStaffsWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.getStaffs).toHaveBeenCalledWith(1,20,{})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_STAFFS',staffsInit:true},
                {type:'SET_STAFFS_ERROR_DATA',message:null,code:null},
                {type:'SET_STAFFS_DATA',staffsData:sagasGetCustomersData.data.data.data},
                {type:'SET_PAGE_STAFF',page:sagasGetCustomersData.data.data.meta.page},
                {type:'SET_SIZE_STAFF',size:sagasGetCustomersData.data.data.meta.size},
                {type:'SET_TOTAL_STAFF',total:sagasGetCustomersData.data.data.meta.total},
                {type:'SET_INITIALIZE_STAFFS',staffsInit:false}
            ])
        })

        test('with error',async()=>{
            StaffAPI.getStaffs=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(getStaffsWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.getStaffs).toHaveBeenCalledWith(1,20,{})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_STAFFS',staffsInit:true},
                {type:'SET_STAFFS_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIALIZE_STAFFS',staffsInit:false}
            ])
        })
    })

    describe('getStaffWorker worker testing',()=>{
        const action={type:'SAGA_GET_STAFF',hash:'testStaffId'}
        test('witout error',async ()=>{
            StaffAPI.getStaff=jest.fn().mockResolvedValue(sagasGetCustomerData)
            
            const dispatched=[]
            await runSagaHelper(getStaffWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.getStaff).toHaveBeenCalledWith('testStaffId')
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_STAFF',initStaff:true},
                {type:'SET_STAFF_ERROR_DATA',message:null,code:null},
                {type:'SET_STAFF_UPDATE_ERROR_DATA',message:null,code:null},
                {type:'SET_CUSTOMER_DATA',data:null},
                {type:'SET_INITIALIZE_CUSTOMER',initCust:false},
                {type:'SET_STAFF_ID',staffId:null},
                {type:'SET_STAFF_DATA',staffData:sagasGetCustomerData.data.data},
                {type:'SET_INITIALIZE_STAFF',initStaff:false}
            ])
        })

        test('with error',async()=>{
            StaffAPI.getStaff=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(getStaffWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.getStaff).toHaveBeenCalledWith('testStaffId')
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_STAFF',initStaff:true},
                {type:'SET_STAFF_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIALIZE_STAFF',initStaff:false}
            ])
        })
    })

    describe('updateStaffWorker worker testing',()=>{
        const action=sagaUpdateStaff('testStaffId',sagasUpdateStaffDataForAction,()=>{},()=>{})
        test('witout error',async ()=>{
            StaffAPI.updateStaff=jest.fn().mockResolvedValue(sagasGetCustomerData)
            
            const dispatched=[]
            await runSagaHelper(updateStaffWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.updateStaff).toHaveBeenCalledWith('testStaffId',sagasUpdateStaffDataForAction)
            expect(dispatched).toEqual([
                {type:'UPDATE_STAFF_INITIALIZE',updateStaffInit:true},
                {type:'SET_STAFF_UPDATE_ERROR_DATA',message:null,code:null},
                {type:'UPDATE_STAFF_INITIALIZE',updateStaffInit:false},  
                {type:'IS_UPDATE_STAFF',isUpdate:false}
            ])
        })

        test('with error',async()=>{
            StaffAPI.updateStaff=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(updateStaffWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.updateStaff).toHaveBeenCalledWith('testStaffId',sagasUpdateStaffDataForAction)
            expect(dispatched).toEqual([
                {type:'UPDATE_STAFF_INITIALIZE',updateStaffInit:true},
                {type:'SET_STAFF_UPDATE_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'UPDATE_STAFF_INITIALIZE',updateStaffInit:false},
                {type:'IS_UPDATE_STAFF',isUpdate:false}
            ])
        })
    })

    describe('deleteStaffWorker worker testing',()=>{
        const action=sagaDeleteStaff('testStaffId',()=>{},()=>{})
        test('witout error',async ()=>{
            StaffAPI.deleteStaff=jest.fn().mockResolvedValue()
            
            const dispatched=[]
            await runSagaHelper(deleteStaffWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.deleteStaff).toHaveBeenCalledWith('testStaffId')
            expect(dispatched).toEqual([
                {type:'DELETE_STAFF_INITALIZE',delStaffInit:true},
                {type:'SET_STAFF_DELETE_ERROR_DATA',message:null,code:null},
                {type:'DELETE_STAFF_INITALIZE',delStaffInit:false}
            ])
        })

        test('with error',async()=>{
            StaffAPI.deleteStaff=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(deleteStaffWorker, action, (action) => dispatched.push(action))
            
            expect(StaffAPI.deleteStaff).toHaveBeenCalledWith('testStaffId')
            expect(dispatched).toEqual([
                {type:'DELETE_STAFF_INITALIZE',delStaffInit:true},
                {type:'SET_STAFF_DELETE_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'DELETE_STAFF_INITALIZE',delStaffInit:false}
            ])
        })
    })
})
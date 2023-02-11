import { customersAPI } from '../../../API/customersAPI'
import { runSagaHelper } from '../../../test/helpers/runSagaHelper'
import { sagasCreateCustomerDataForAction, sagasGetCustomerData, sagasGetCustomersData, sagasRejectData, sagasUpdateCustomerDataForAction, sagasUpdateCustomerResolveData } from '../../../test/testingData'
import {createCustomerWorker,customersWatcher,deleteCustomerWorker,getCustomersWorker,getCustomerWorker,sagaCreateCustomer,sagaDeleteCustomer,sagaGetCustomers, sagaUpdateCustomer, SAGA_GET_CUSTOMER, updateCustomerWorker} from '../customersSaga'

describe('Customers sagas testing', () => {
    describe('createCustomerWorker worker testing', () => {
        const action = sagaCreateCustomer(sagasCreateCustomerDataForAction,()=>{},()=>{})
        test('without error', async () => {
            customersAPI.createCustomer = jest.fn().mockResolvedValue()
            
            const dispatched = []
            await runSagaHelper(createCustomerWorker, action, (action) => dispatched.push(action))

            expect(customersAPI.createCustomer).toHaveBeenCalledWith(sagasCreateCustomerDataForAction)
            expect(dispatched).toEqual([
                {type:'SET_CREATE_CUSTOMER_INITIALIZE',initCreateCust:true},
                {type:'SET_CUSTOMER_CREATE_ERROR_DATA',message:null,code:null},
                {type:'SET_INITIALIZE_STAFF',initStaff:false},
                {type:'SET_CUSTOMER_DATA',data:null},
                {type:'SET_INITIALIZE_CUSTOMER',initCust:false},
                {type:'SET_VISIBLE_MODAL',isVisible:false},
                {type:'SET_CREATE_CUSTOMER_INITIALIZE',initCreateCust:false}
            ])
        })

        test('with error', async() => {
            customersAPI.createCustomer = jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched = []
            await runSagaHelper(createCustomerWorker, action, (action) => dispatched.push(action))

            expect(customersAPI.createCustomer).toHaveBeenCalledWith(sagasCreateCustomerDataForAction)
            expect(dispatched).toEqual([
                {type:'SET_CREATE_CUSTOMER_INITIALIZE',initCreateCust:true},
                {type:'SET_CUSTOMER_CREATE_ERROR_DATA',message:sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_VISIBLE_MODAL',isVisible:false},
                {type:'SET_CREATE_CUSTOMER_INITIALIZE',initCreateCust:false}
            ])
        })
    })

    describe('getCustomersWorker worker testing', () => {
        const action=sagaGetCustomers(1,20,{})
        test('without error', async() => {
            customersAPI.getCustomers=jest.fn().mockResolvedValue(sagasGetCustomersData)

            const dispatched=[]
            await runSagaHelper(getCustomersWorker, action, (action) => dispatched.push(action))
             
            expect(customersAPI.getCustomers).toHaveBeenCalledWith(1,20,{})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_CUSTOMERS',initCustomers:true},
                {type:'SET_CUSTOMERS_ERROR_DATA',message:null,code:null},
                {type:'SET_PAGE_CUSTOMER',page:sagasGetCustomersData.data.data.meta.page},
                {type:'SET_SIZE_CUSTOMER',size:sagasGetCustomersData.data.data.meta.size},
                {type:'SET_TOTAL_CUSTOMER',total:sagasGetCustomersData.data.data.meta.total},
                {type:'SET_CUSTOMERS_DATA',customersData:sagasGetCustomersData.data.data.data},
                {type:'SET_INITIALIZE_CUSTOMERS',initCustomers:false}
            ])
        })

        test('with error', async () => {
            customersAPI.getCustomers=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(getCustomersWorker, action, (action) => dispatched.push(action))
             
            expect(customersAPI.getCustomers).toHaveBeenCalledWith(1,20,{})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_CUSTOMERS',initCustomers:true},
                {type:'SET_CUSTOMERS_ERROR_DATA',message:sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIALIZE_CUSTOMERS',initCustomers:false}
            ])
        })
    })

    describe('getCustomerWorker worker testing', () => {
        const action={type:'SAGA_GET_CUSTOMER',hash:'testUserId'}
        test('without error', async() => {
            customersAPI.getCustomer=jest.fn().mockResolvedValue(sagasGetCustomerData)

            const dispatched=[]
            await runSagaHelper(getCustomerWorker, action, (action) => dispatched.push(action))

            expect(customersAPI.getCustomer).toHaveBeenCalledWith('testUserId')
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_CUSTOMER',initCust:true},
                {type:'SET_CUSTOMER_ERROR_DATA',message:null,code:null},
                {type:'SET_CUSTOMER_UPDATE_ERROR_DATA',message:null,code:null},
                {type:'SET_STAFF_DATA',staffData:null},
                {type:'SET_INITIALIZE_STAFF',initStaff:false},
                {type:'SET_CUSTOMER_ID',customerId:null},
                {type:'SET_CUSTOMER_DATA',data:sagasGetCustomerData.data.data},
                {type:'SET_INITIALIZE_CUSTOMER',initCust:false}
            ])
        })

        test('with error', async () => {
            customersAPI.getCustomer=jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched=[]
            await runSagaHelper(getCustomerWorker, action, (action) => dispatched.push(action))
            
            expect(customersAPI.getCustomer).toHaveBeenCalledWith('testUserId')
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_CUSTOMER',initCust:true},
                {type:'SET_CUSTOMER_ERROR_DATA',message:sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIALIZE_CUSTOMER',initCust:false}
            ])
        })
    })

    describe('updateCustomerWorker worker testing', () => {
        const action=sagaUpdateCustomer('testUserId',sagasUpdateCustomerDataForAction,(data)=>{},()=>{})
        test('without error', async () => {
            customersAPI.updateCustomer=jest.fn().mockResolvedValue(sagasUpdateCustomerResolveData)
            
            const dispatched=[]
            await runSagaHelper(updateCustomerWorker, action, (action) => dispatched.push(action))

            expect(customersAPI.updateCustomer).toHaveBeenCalledWith('testUserId',sagasUpdateCustomerDataForAction)
            expect(dispatched).toEqual([
                {type:'UPDATE_CUSTOMER_INITIALIZE',updateCustInit:true},
                {type:'SET_CUSTOMER_UPDATE_ERROR_DATA',message:null,code:null},
                {type:'UPDATE_CUSTOMER_INITIALIZE',updateCustInit:false},
                {type:'IS_UPDATE_CUSTOMER',isUpdate:false}
            ])
        })

        test('with error', async() => {
            customersAPI.updateCustomer=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(updateCustomerWorker, action, (action) => dispatched.push(action))

            expect(customersAPI.updateCustomer).toHaveBeenCalledWith('testUserId',sagasUpdateCustomerDataForAction)
            expect(dispatched).toEqual([
                {type:'UPDATE_CUSTOMER_INITIALIZE',updateCustInit:true},
                {type:'SET_CUSTOMER_UPDATE_ERROR_DATA',message:sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'UPDATE_CUSTOMER_INITIALIZE',updateCustInit:false},
                {type:'IS_UPDATE_CUSTOMER',isUpdate:false}
            ])
        })
    })

    describe('deleteCustomerWorker worker testing', () => {
        const action=sagaDeleteCustomer('testUserId',()=>{},()=>{})
        test('without error', async() => {
            customersAPI.deleteCuctomer=jest.fn().mockResolvedValue()

            const dispatched=[]
            await runSagaHelper(deleteCustomerWorker, action, (action) => dispatched.push(action))

            expect(customersAPI.deleteCuctomer).toHaveBeenCalled()
            expect(dispatched).toEqual([
                {type:'DELETE_CUSTOMER_INITIALIZE',delCustInit:true},
                {type:'SET_CUSTOMER_DELETE_ERROR_DATA',message:null,code:null},
                {type:'DELETE_CUSTOMER_INITIALIZE',delCustInit:false}                
            ])
        })

        test('with error',async () => {
            customersAPI.deleteCuctomer=jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched=[]
            await runSagaHelper(deleteCustomerWorker, action, (action) => dispatched.push(action))

            expect(customersAPI.deleteCuctomer).toHaveBeenCalled()
            expect(dispatched).toEqual([
                {type:'DELETE_CUSTOMER_INITIALIZE',delCustInit:true},
                {type:'SET_CUSTOMER_DELETE_ERROR_DATA',message:sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'DELETE_CUSTOMER_INITIALIZE',delCustInit:false}                
            ])
        })
    })
})
import { orderAPI } from '../../../API/orderAPI'
import { runSagaHelper } from '../../../test/helpers/runSagaHelper'
import { sagasGetCustomersData, sagasRejectData } from '../../../test/testingData'
import { createOrderSaga, createOrderWorker, deleteOrderSaga, deleteOrderWorker, getOrdersDataSaga, getOrderWorker, updateOrderData, updateOrderWorker } from '../ordersSaga'

describe('Orders sagas testing',()=>{
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('createOrderWorker worker testing',()=>{
        const action=createOrderSaga({},()=>{},()=>{},()=>{},true,1,20,{})
        test('without error',async()=>{
            orderAPI.createOrder=jest.fn().mockResolvedValue()

            const dispatched=[]
            await runSagaHelper(createOrderWorker, action, (action) => dispatched.push(action))

            expect(orderAPI.createOrder).toHaveBeenCalledWith({})
            expect(dispatched).toEqual([
                {type:'SET_ORDER_CREATE_ERROR_DATA',message:null,code:null},
                {type: 'CLEAN_PRODUCTS_LIST'},
                {type:'SET_VISIBLE_MODAL',visible:false},
                {type:'CREATE_ORDER_INITIALIZE',initCreateOrd:false},
                {type: 'SAGA_GET_OTDERS',page:1,size:20,filter:{}}
            ])
        })

        test('with error',async()=>{
            orderAPI.createOrder=jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched=[]
            await runSagaHelper(createOrderWorker, action, (action) => dispatched.push(action))

            expect(orderAPI.createOrder).toHaveBeenCalledWith({})
            expect(dispatched).toEqual([
                {type:'SET_ORDER_CREATE_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_VISIBLE_MODAL',visible:false},
                {type:'CREATE_ORDER_INITIALIZE',initCreateOrd:false}
            ])
        })
    })

    describe('getOrderWorker worker testing',()=>{
        const action=getOrdersDataSaga(1,20,{})
        test('without error',async()=>{
            orderAPI.getOrders=jest.fn().mockResolvedValue(sagasGetCustomersData)

            const dispatched=[]
            await runSagaHelper(getOrderWorker, action, (action) => dispatched.push(action))

            expect(orderAPI.getOrders).toHaveBeenCalledWith(1,20,{})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_ORDERS',initOrders:true},
                {type:'SET_ORDER_ERROR_DATA',message:null,code:null},
                {type:'SET_ORDERS_DATA',data:sagasGetCustomersData.data.data.data},
                {type:'SET_SIZE_ORDER',size:sagasGetCustomersData.data.data.meta.size},
                {type:'SET_PAGE_ORDER',page:sagasGetCustomersData.data.data.meta.page},
                {type:'SET_TOTAL_COUNT_ORDER',totalCount:sagasGetCustomersData.data.data.meta.total},
                {type:'SET_INITIALIZE_ORDERS',initOrders:false}
            ])            
        })

        test('with error',async()=>{
            orderAPI.getOrders=jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched=[]
            await runSagaHelper(getOrderWorker, action, (action) => dispatched.push(action))

            expect(orderAPI.getOrders).toHaveBeenCalledWith(1,20,{})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_ORDERS',initOrders:true},
                {type:'SET_ORDER_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIALIZE_ORDERS',initOrders:false}
            ])
        })
    })

    describe('updateOrderWorker worker testing',()=>{
        const action=updateOrderData('testOrderId',{},()=>{},()=>{},()=>{},1,20)
        test('without error',async()=>{
            orderAPI.updateOrder=jest.fn().mockResolvedValue()

            const dispatched=[]
            await runSagaHelper(updateOrderWorker, action, (action) => dispatched.push(action))

            expect(orderAPI.updateOrder).toHaveBeenCalledWith('testOrderId',{})
            expect(dispatched).toEqual([
                {type:'SET_INITIAL_UPDATE_ORDER',initUpdOrd:true},
                {type:'SET_ORDER_UPDATE_ERROR_DATA',message:null,code:null},
                {type:'SET_INITIAL_UPDATE_ORDER',initUpdOrd:false},
                {type: 'SAGA_GET_OTDERS',page:1,size:20}
            ])
        })

        test('with error',async()=>{
            orderAPI.updateOrder=jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched=[]
            await runSagaHelper(updateOrderWorker, action, (action) => dispatched.push(action))

            expect(orderAPI.updateOrder).toHaveBeenCalledWith('testOrderId',{})
            expect(dispatched).toEqual([
                {type:'SET_INITIAL_UPDATE_ORDER',initUpdOrd:true},
                {type:'SET_ORDER_UPDATE_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIAL_UPDATE_ORDER',initUpdOrd:false}
            ])
        })
    })

    describe('deleteOrderWorker worker testing',()=>{
        const action=deleteOrderSaga('testOrderId',()=>{},()=>{},1,20)
        test('without error',async()=>{
            orderAPI.deleteOrder=jest.fn().mockResolvedValue()

            const dispatched=[]
            await runSagaHelper(deleteOrderWorker, action, (action) => dispatched.push(action))

            expect(orderAPI.deleteOrder).toHaveBeenCalledWith('testOrderId')
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_DELETE_ORDER',initDelOrd:true},
                {type:'SET_ORDER_DELETE_ERROR_DATA',message:null,code:null},
                {type:'SET_INITIALIZE_DELETE_ORDER',initDelOrd:false},
                {type: 'SAGA_GET_OTDERS',page:1,size:20}
            ])
        })

        test('with error',async()=>{
            orderAPI.deleteOrder=jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched=[]
            await runSagaHelper(deleteOrderWorker, action, (action) => dispatched.push(action))

            expect(orderAPI.deleteOrder).toHaveBeenCalledWith('testOrderId')
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_DELETE_ORDER',initDelOrd:true},
                {type:'SET_ORDER_DELETE_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIALIZE_DELETE_ORDER',initDelOrd:false}
            ])
        })
    })
})
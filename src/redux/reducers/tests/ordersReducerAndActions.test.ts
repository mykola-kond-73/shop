import { orderFilterForState,orderForState } from '../../../test/testingData'
import {ordersReducer,setVisibleModalOrder,setCreateOrderInitialize,setOrdersData,setInitializeOrders,setPage,setSize,setTotalCount,setInitialUpdateOrder,setInitializeDeleteOrder,setFilterOrderData} from '../ordersReducer'

describe('Order reducer and order actions testing', () => {
    let state = null
    beforeEach(() => {
        state = {
            ordersData: null,
            initializeOrders: false,

            page: 1,
            size: 10,
            totalCount: 0,

            visibleModal: false,
            createOrderInitialize: false,

            initialUpdateOrder: false,
            initialDeleteOrder: false,

            filter: {}
        }

    })

    test('setOrdersData action testing', () => {
        const action = setOrdersData([{
            orderForState
        }])
        const newState = ordersReducer(state, action)
        expect(newState.ordersData.length).toBe(1)
        expect(newState.ordersData).toEqual([{
            orderForState
        }])
    })

    describe('setInitializeOrders action testing', () => {
        test('with true', () => {
            const action = setInitializeOrders(true)
            const newState = ordersReducer(state, action)
            expect(newState.initializeOrders).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitializeOrders(false)
            const newState = ordersReducer(state, action)
            expect(newState.initializeOrders).toBeFalsy()
        })
    })

    test('setPage action testing', () => {
        const action = setPage(5)
        const newState = ordersReducer(state, action)
        expect(newState.page).toBe(5)
    })

    test('setSize action testing', () => {
        const action = setSize(50)
        const newState = ordersReducer(state, action)
        expect(newState.size).toBe(50)
    })

    test('setTotalCount action testing', () => {
        const action = setTotalCount(100)
        const newState = ordersReducer(state, action)
        expect(newState.totalCount).toBe(100)
    })

    describe('setVisibleModalOrder action testing', () => {
        test('with true', () => {
            const action = setVisibleModalOrder(true)
            const newState = ordersReducer(state, action)

            expect(newState.visibleModal).toBeTruthy()
        })

        test('with false', () => {
            const action = setVisibleModalOrder(false)
            const newState = ordersReducer(state, action)

            expect(newState.visibleModal).toBeFalsy()
        })
    })

    describe('setCreateOrderInitialize action testing', () => {
        test('with true', () => {
            const action = setCreateOrderInitialize(true)
            const newState = ordersReducer(state, action)

            expect(newState.createOrderInitialize).toBeTruthy()
        })

        test('with false', () => {
            const action = setCreateOrderInitialize(false)
            const newState = ordersReducer(state, action)

            expect(newState.createOrderInitialize).toBeFalsy()
        })
    })

    describe('setInitialUpdateOrder action testing', () => {
        test('with true', () => {
            const action = setInitialUpdateOrder(true)
            const newState = ordersReducer(state, action)

            expect(newState.initialUpdateOrder).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitialUpdateOrder(false)
            const newState = ordersReducer(state, action)

            expect(newState.initialUpdateOrder).toBeFalsy()
        })
    })

    describe('setInitializeDeleteOrder action testing', () => {
        test('with true', () => {
            const action = setInitializeDeleteOrder(true)
            const newState = ordersReducer(state, action)

            expect(newState.initialDeleteOrder).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitializeDeleteOrder(false)
            const newState = ordersReducer(state, action)

            expect(newState.initialDeleteOrder).toBeFalsy()
        })
    })

    test('setFilterOrderData action testing', () => {
        const action = setFilterOrderData(orderFilterForState)
        const newState = ordersReducer(state, action)
        expect(newState.filter).toEqual(orderFilterForState)
    })
})
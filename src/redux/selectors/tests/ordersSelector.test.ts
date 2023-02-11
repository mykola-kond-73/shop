import {getCreateOrderInitialize,getFilterOrderData,getInitialDeleteOrder,getInitializeOrders,getInitialUpdateOrder,getOrderData,getOrderModData,getPage,getSize,getTotalCount,getVisibleModalOrder} from '../ordersSelector'
import {orderForState,orderFilterForState} from '../../../test/testingData'

describe('Orders selectors testing', () => {
    let state = null
    beforeEach(() => {
        state = {
            ordersData: {
                ordersData: [orderForState],
                initializeOrders: true,

                page: 5,
                size: 50,
                totalCount: 100,

                visibleModal: true,
                createOrderInitialize: true,

                initialUpdateOrder: true,
                initialDeleteOrder: true,

                filter: orderFilterForState
            }
        }
    })

    test('getVisibleModalOrder selector testing', () => {
        expect(getVisibleModalOrder(state)).toBeTruthy()

        state.ordersData = null
        expect(getVisibleModalOrder(state)).toBeFalsy()
    })

    test('getCreateOrderInitialize selector testing', () => {
        expect(getCreateOrderInitialize(state)).toBeTruthy()

        state.ordersData = null
        expect(getCreateOrderInitialize(state)).toBeFalsy()
    })

    test('getInitializeOrders selector testing', () => {
        expect(getInitializeOrders(state)).toBeTruthy()

        state.ordersData = null
        expect(getInitializeOrders(state)).toBeFalsy()
    })

    test('getInitialUpdateOrder selector testing', () => {
        expect(getInitialUpdateOrder(state)).toBeTruthy()

        state.ordersData = null
        expect(getInitialUpdateOrder(state)).toBeFalsy()
    })

    test('getInitialDeleteOrder selector testing', () => {
        expect(getInitialDeleteOrder(state)).toBeTruthy()

        state.ordersData = null
        expect(getInitialDeleteOrder(state)).toBeFalsy()
    })

    test('getPage selector testing', () => {
        expect(getPage(state)).toBe(5)

        state.ordersData = null
        expect(getPage(state)).toBe(1)
    })

    test('getSize selector testing', () => {
        expect(getSize(state)).toBe(50)

        state.ordersData = null
        expect(getSize(state)).toBe(10)
    })

    test('getTotalCount selector testing', () => {
        expect(getTotalCount(state)).toBe(100)

        state.ordersData = null
        expect(getTotalCount(state)).toBe(0)
    })

    describe('getFilterOrderData selector testing', () => {
        test('with normal data', () => {
            expect(getFilterOrderData(state)).toEqual(orderFilterForState)
        })

        test('with not normal data', () => {
            state.ordersData = null
            expect(getFilterOrderData(state)).toEqual({})
        })
    })

    describe('getOrderData selector testing', () => {
        test('with normal data', () => {
            expect(getOrderData(state)).toEqual([orderForState])
        })

        test('with not normal data', () => {
            state.ordersData = null
            expect(getOrderData(state)).toBe(null)
        })
    })

    describe('getOrderModData selector testing', () => {
        test('with normal data', () => {
            expect(getOrderModData(state)).toEqual([{
                _id: '618e8c4c2f8e652e9cb16bcd',
                comment: 'test comment',
                customer: '60b61ecbe91b0626a85d6974',
                product: '604b4d9e8815342c243a2a86',
                count: '3'
            }])
        })

        test('with not normal data', () => {
            state.ordersData = null
            expect(getOrderModData(state)).toBe(null)
        })
    })
})
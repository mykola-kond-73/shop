import {getCreateCustomerInitialize,getCustomerData,getCustomerId,getCustomersMOdData,getCustometIdInit,getDeleteCustomerInitialize,getFilterData,getInitializeCustomer,getInitializeCustomers,getIsUpdateCustomer,getPage,getSize,getTotal,getUpdateCustomerInitialize,getVisibleModal} from '../customersSelector'
import {customerForState,customerModData,customerFilterDataForState} from '../../../test/testingData'

describe('Customers selectors testing', () => {
    let state = null
    beforeEach(() => {
        state = {
            customerData: {
                customerId: '618fbd8aeac16f2c6cf8e467',

                customers: [customerForState],
                initializeCustomers: true,

                page: 8,
                size: 50,
                total: 100,
                filter: customerFilterDataForState,

                customer: customerForState,
                initializeCustomer: true,

                createCustomerInitialize: true,

                isUpdateCustomer: true,
                updateCustomerInitialize: true,

                deleteCustomerInitialize: true,

                visibleModal: true
            }
        }
    })

    test('getCustometIdInit selector testing', () => {
        expect(getCustometIdInit(state)).toEqual('618fbd8aeac16f2c6cf8e467')

        state.customerData = null
        expect(getCustometIdInit(state)).toBe(null)
    })

    describe('getCustomersMOdData selector testing', () => {
        test('with normal data', () => {
            expect(getCustomersMOdData(state)).toEqual([customerModData])
        })

        test('with not normal data', () => {
            state.customerData = null
            expect(getCustomersMOdData(state)).toBe(null)
        })
    })

    test('getInitializeCustomer selector testing', () => {
        expect(getInitializeCustomer(state)).toBeTruthy()

        state.customerData = null
        expect(getInitializeCustomer(state)).toBeFalsy()
    })

    test('getInitializeCustomers selector testing', () => {
        expect(getInitializeCustomers(state)).toBeTruthy()

        state.customerData = null
        expect(getInitializeCustomers(state)).toBeFalsy()
    })

    test('getPage selector testing', () => {
        expect(getPage(state)).toBe(8)

        state.customerData = null
        expect(getPage(state)).toBe(1)
    })

    test('getSize selector testing', () => {
        expect(getSize(state)).toBe(50)

        state.customerData = null
        expect(getSize(state)).toBe(10)
    })

    test('getTotal selector testing', () => {
        expect(getTotal(state)).toBe(100)

        state.customerData = null
        expect(getTotal(state)).toBe(0)
    })

    test('getFilterData selector testing', () => {
        expect(getFilterData(state)).toEqual(customerFilterDataForState)

        state.customerData = null
        expect(getFilterData(state)).toEqual({})
    })

    describe('getCustomerData selector testing', () => {
        test('with normal data', () => {
            expect(getCustomerData(state)).toEqual(customerForState)
        })

        test('with not normal data', () => {
            state.customerData = null
            expect(getCustomerData(state)).toBe(null)
        })
    })

    test('getCustomerId selector testing', () => {
        expect(getCustomerId(state)).toBe('61757440c15a8d2d141b20df')

        state.customerData = null
        expect(getCustomerId(state)).toBe(null)
    })

    test('getVisibleModal selector testing', () => {
        expect(getVisibleModal(state)).toBeTruthy()

        state.customerData = null
        expect(getVisibleModal(state)).toBeFalsy()
    })

    test('getCreateCustomerInitialize selector testing', () => {
        expect(getCreateCustomerInitialize(state)).toBeTruthy()

        state.customerData = null
        expect(getCreateCustomerInitialize(state)).toBeFalsy()
    })

    test('getIsUpdateCustomer selector testing', () => {
        expect(getIsUpdateCustomer(state)).toBeTruthy()

        state.customerData = null
        expect(getIsUpdateCustomer(state)).toBeFalsy()
    })

    test('getUpdateCustomerInitialize selector testing', () => {
        expect(getUpdateCustomerInitialize(state)).toBeTruthy()

        state.customerData = null
        expect(getUpdateCustomerInitialize(state)).toBeFalsy()
    })

    test('getDeleteCustomerInitialize selector testing', () => {
        expect(getDeleteCustomerInitialize(state)).toBeTruthy()

        state.customerData = null
        expect(getDeleteCustomerInitialize(state)).toBeFalsy()
    })
})
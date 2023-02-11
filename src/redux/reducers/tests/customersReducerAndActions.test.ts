import { customerFilterDataForState } from '../../../test/testingData'
import {customersReducer,setCustomerId,setCustomerData,setInitializeCustomer,setCreateCustomerInitialize,setVisibleModal,setIsUpdateCustomer,setUpdateCustomerInitialize,setDeleteCustomerInitialize,setCustomersData,setInitializeCustomers,setPage,setSize,setTotal,setFilterCustData} from '../customersReducer'

describe('Customer reducer and sctions testing', () => {
    let state = null

    beforeEach(() => {
        state = {
            customerId: null,

            customers: null,
            initializeCustomers: false,

            page: 1,
            size: 10,
            total: 0,
            filter: {},

            customer: null,
            initializeCustomer: false,

            createCustomerInitialize: false,

            isUpdateCustomer: false,
            updateCustomerInitialize: false,

            deleteCustomerInitialize: false,

            visibleModal: false
        }
    })

    test('setCustomerId action', () => {
        const action = setCustomerId('111')
        const newState = customersReducer(state, action)

        expect(newState.customerId).toBe('111')
    })

    test('setCustomersData action testing', () => {
        const action = setCustomersData([{
            _id: '111',
            name: 'jjj hhh'
        }])
        const newState = customersReducer(state, action)
        expect(newState.customers.length).toBe(1)
        expect(newState.customers).toEqual([{
            _id: '111',
            name: 'jjj hhh'
        }])
    })

    describe('setInitializeCustomers action testing', () => {

        test('with true', () => {
            const action = setInitializeCustomers(true)
            const newState = customersReducer(state, action)
            expect(newState.initializeCustomers).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitializeCustomers(false)
            const newState = customersReducer(state, action)
            expect(newState.initializeCustomers).toBeFalsy()
        })
    })

    test('setPage action testing', () => {
        const action = setPage(10)
        const newState = customersReducer(state, action)
        expect(newState.page).toBe(10)
    })

    test('setSize action testing', () => {
        const action = setSize(50)
        const newState = customersReducer(state, action)
        expect(newState.size).toBe(50)
    })

    test('setTotal action testing', () => {
        const action = setTotal(100)
        const newState = customersReducer(state, action)
        expect(newState.total).toBe(100)
    })

    test('setFilterCustData action testing', () => {
        const action = setFilterCustData(customerFilterDataForState)
        const newState = customersReducer(state, action)
        expect(newState.filter).toEqual(customerFilterDataForState)
    })

    test('setCustomerData action', () => {
        const action = setCustomerData({
            _id: '111',
            name: 'jjj hhh'
        })
        const newState = customersReducer(state, action)

        expect(newState.customer).toBeTruthy()
        expect(newState.customer).toStrictEqual({
            _id: '111',
            name: 'jjj hhh'
        })
    })

    describe('test setInitializeCustomer action', () => {

        test('with true', () => {
            const action = setInitializeCustomer(true)
            const newState = customersReducer(state, action)

            expect(newState.initializeCustomer).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitializeCustomer(false)
            const newState = customersReducer(state, action)

            expect(newState.initializeCustomer).toBeFalsy()
        })
    })

    describe('test setCreateCustomerInitialize action', () => {

        test('with true', () => {
            const action = setCreateCustomerInitialize(true)
            const newState = customersReducer(state, action)

            expect(newState.createCustomerInitialize).toBeTruthy()
        })

        test('with false', () => {
            const action = setCreateCustomerInitialize(false)
            const newState = customersReducer(state, action)

            expect(newState.createCustomerInitialize).toBeFalsy()
        })
    })

    describe('test setVisibleModal action', () => {
        test('with true', () => {
            const action = setVisibleModal(true)
            const newState = customersReducer(state, action)

            expect(newState.visibleModal).toBeTruthy()
        })

        test('with false', () => {
            const action = setVisibleModal(false)
            const newState = customersReducer(state, action)

            expect(newState.visibleModal).toBeFalsy()
        })
    })

    describe('test setIsUpdateCustomer action', () => {

        test('with true', () => {
            const action = setIsUpdateCustomer(true)
            const newState = customersReducer(state, action)

            expect(newState.isUpdateCustomer).toBeTruthy()
        })

        test('with false', () => {
            const action = setIsUpdateCustomer(false)
            const newState = customersReducer(state, action)

            expect(newState.isUpdateCustomer).toBeFalsy()
        })
    })

    describe('test setUpdateCustomerInitialize action', () => {
        test('with true', () => {
            const action = setUpdateCustomerInitialize(true)
            const newState = customersReducer(state, action)

            expect(newState.updateCustomerInitialize).toBeTruthy()
        })

        test('with false', () => {
            const action = setUpdateCustomerInitialize(false)
            const newState = customersReducer(state, action)

            expect(newState.updateCustomerInitialize).toBeFalsy()
        })
    })

    describe('test setDeleteCustomerInitialize action', () => {
        test('with true', () => {
            const action = setDeleteCustomerInitialize(true)
            const newState = customersReducer(state, action)

            expect(newState.deleteCustomerInitialize).toBeTruthy()
        })

        test('with false', () => {
            const action = setDeleteCustomerInitialize(false)
            const newState = customersReducer(state, action)

            expect(newState.deleteCustomerInitialize).toBeFalsy()
        })
    })
})
import { errorObjWithNull, messageErrorText, statusCode } from '../../../test/testingData'
import {setProductsErrorData,SetProductErrorData,setLoginErrorData,setUnloginErrorData,setCustomerErrorData,setCustomerCreateErrorData,setCustomerUpdateErrorData,setCustomerDeleteErrorData,setStaffErrorData,setStaffUpdateErrorData,setStaffDeleteErrorData,setOrderCreateErrorData,ErrorReducer,setProductCreateErrorData,setProductUpdateErrorData,setProductDeleteErrorData,setCustomersErrorData,setStaffsErrorData,setStaffCreateErrorData,setOrderErrorData,setOrderUpdateErrorData,setOrderDeleteErrorData} from '../errorReducer'

describe('Error reducer and actions testing', () => {

    let state = null

    beforeEach(() => {
        state = {
            products: errorObjWithNull,
            product: errorObjWithNull,
            productCreate: errorObjWithNull,
            productUpdate: errorObjWithNull,
            productDelete: errorObjWithNull,

            login: errorObjWithNull,
            unlogin: errorObjWithNull,

            customers: errorObjWithNull,
            customer: errorObjWithNull,
            customerCreate: errorObjWithNull,
            customerUpdate: errorObjWithNull,
            customerDelete: errorObjWithNull,

            staffs: errorObjWithNull,
            staff: errorObjWithNull,
            staffUpdate: errorObjWithNull,
            staffDelete: errorObjWithNull,
            orderCreate: errorObjWithNull,

            orders: errorObjWithNull,
            orderCreate: errorObjWithNull,
            orderUpdate: errorObjWithNull,
            orderDelete: errorObjWithNull
        }
    })

    describe('setProductsErrorData action testing', () => {
        test('with null', () => {
            const action = setProductsErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.products.code).toBeNull()
            expect(newState.products.message).toBeNull()
        })

        test('with error data', () => {
            const action = setProductsErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.products.code).toEqual(statusCode)
            expect(newState.products.message).toBe(messageErrorText)
        })
    })

    describe('SetProductErrorData action testing', () => {
        test('with null', () => {
            const action = SetProductErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.product.code).toBeNull()
            expect(newState.product.message).toBeNull()
        })

        test('with error data', () => {
            const action = SetProductErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.product.code).toEqual(statusCode)
            expect(newState.product.message).toBe(messageErrorText)
        })
    })

    describe('setProductCreateErrorData action testing', () => {
        test('with null', () => {
            const action = setProductCreateErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.productCreate.code).toBeNull()
            expect(newState.productCreate.message).toBeNull()
        })

        test('with error data', () => {
            const action = setProductCreateErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.productCreate.code).toEqual(statusCode)
            expect(newState.productCreate.message).toBe(messageErrorText)
        })
    })

    describe('setProductUpdateErrorData action testing', () => {
        test('with null', () => {
            const action = setProductUpdateErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.productUpdate.code).toBeNull()
            expect(newState.productUpdate.message).toBeNull()
        })

        test('with error data', () => {
            const action = setProductUpdateErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.productUpdate.code).toEqual(statusCode)
            expect(newState.productUpdate.message).toBe(messageErrorText)
        })
    })

    describe('setProductDeleteErrorData action testing', () => {
        test('with null', () => {
            const action = setProductDeleteErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.productDelete.code).toBeNull()
            expect(newState.productDelete.message).toBeNull()
        })

        test('with error data', () => {
            const action = setProductDeleteErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.productDelete.code).toEqual(statusCode)
            expect(newState.productDelete.message).toBe(messageErrorText)
        })
    })

    describe('setLoginErrorData action testing', () => {
        test('with null', () => {
            const action = setLoginErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.login.code).toBeNull()
            expect(newState.login.message).toBeNull()
        })

        test('with error data', () => {
            const action = setLoginErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.login.code).toEqual(statusCode)
            expect(newState.login.message).toBe(messageErrorText)
        })
    })

    describe('setUnloginErrorData action testing', () => {
        test('with null', () => {
            const action = setUnloginErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.unlogin.code).toBeNull()
            expect(newState.unlogin.message).toBeNull()
        })

        test('with error data', () => {
            const action = setUnloginErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.unlogin.code).toEqual(statusCode)
            expect(newState.unlogin.message).toBe(messageErrorText)
        })
    })

    describe('setCustomersErrorData action testing', () => {
        test('with null', () => {
            const action = setCustomersErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.customers.code).toBeNull()
            expect(newState.customers.message).toBeNull()
        })

        test('with error data', () => {
            const action = setCustomersErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.customers.code).toEqual(statusCode)
            expect(newState.customers.message).toBe(messageErrorText)
        })
    })

    describe('setCustomerErrorData action testing', () => {
        test('with null', () => {
            const action = setCustomerErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.customer.code).toBeNull()
            expect(newState.customer.message).toBeNull()
        })

        test('with error data', () => {
            const action = setCustomerErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.customer.code).toEqual(statusCode)
            expect(newState.customer.message).toBe(messageErrorText)
        })
    })

    describe('setCustomerCreateErrorData action testing', () => {
        test('with null', () => {
            const action = setCustomerCreateErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.customerCreate.code).toBeNull()
            expect(newState.customerCreate.message).toBeNull()
        })

        test('with error data', () => {
            const action = setCustomerCreateErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.customerCreate.code).toEqual(statusCode)
            expect(newState.customerCreate.message).toBe(messageErrorText)
        })
    })

    describe('setCustomerUpdateErrorData action testing', () => {
        test('with null', () => {
            const action = setCustomerUpdateErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.customerUpdate.code).toBeNull()
            expect(newState.customerUpdate.message).toBeNull()
        })

        test('with error data', () => {
            const action = setCustomerUpdateErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.customerUpdate.code).toEqual(statusCode)
            expect(newState.customerUpdate.message).toBe(messageErrorText)
        })
    })

    describe('setCustomerDeleteErrorData action testing', () => {
        test('with null', () => {
            const action = setCustomerDeleteErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.customerDelete.code).toBeNull()
            expect(newState.customerDelete.message).toBeNull()
        })

        test('with error data', () => {
            const action = setCustomerDeleteErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.customerDelete.code).toEqual(statusCode)
            expect(newState.customerDelete.message).toBe(messageErrorText)
        })
    })

    describe('setStaffErrorData action testing', () => {
        test('with null', () => {
            const action = setStaffErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.staff.code).toBeNull()
            expect(newState.staff.message).toBeNull()
        })

        test('with error data', () => {
            const action = setStaffErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.staff.code).toEqual(statusCode)
            expect(newState.staff.message).toBe(messageErrorText)
        })
    })

    describe('setStaffsErrorData action testing', () => {
        test('with null', () => {
            const action = setStaffsErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.staffs.code).toBeNull()
            expect(newState.staffs.message).toBeNull()
        })

        test('with error data', () => {
            const action = setStaffsErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.staffs.code).toEqual(statusCode)
            expect(newState.staffs.message).toBe(messageErrorText)
        })
    })

    describe('setStaffCreateErrorData action testing', () => {
        test('with null', () => {
            const action = setStaffCreateErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.staffCreate.code).toBeNull()
            expect(newState.staffCreate.message).toBeNull()
        })

        test('with error data', () => {
            const action = setStaffCreateErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.staffCreate.code).toEqual(statusCode)
            expect(newState.staffCreate.message).toBe(messageErrorText)
        })
    })

    describe('setStaffUpdateErrorData action testing', () => {
        test('with null', () => {
            const action = setStaffUpdateErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.staffUpdate.code).toBeNull()
            expect(newState.staffUpdate.message).toBeNull()
        })

        test('with error data', () => {
            const action = setStaffUpdateErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.staffUpdate.code).toEqual(statusCode)
            expect(newState.staffUpdate.message).toBe(messageErrorText)
        })
    })

    describe('setStaffDeleteErrorData action testing', () => {
        test('with null', () => {
            const action = setStaffDeleteErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.staffDelete.code).toBeNull()
            expect(newState.staffDelete.message).toBeNull()
        })

        test('with error data', () => {
            const action = setStaffDeleteErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.staffDelete.code).toEqual(statusCode)
            expect(newState.staffDelete.message).toBe(messageErrorText)
        })
    })

    describe('setOrderErrorData action testing', () => {
        test('with null', () => {
            const action = setOrderErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.orders.code).toBeNull()
            expect(newState.orders.message).toBeNull()
        })

        test('with error data', () => {
            const action = setOrderErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.orders.code).toEqual(statusCode)
            expect(newState.orders.message).toBe(messageErrorText)
        })
    })

    describe('setOrderCreateErrorData action testing', () => {
        test('with null', () => {
            const action = setOrderCreateErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.orderCreate.code).toBeNull()
            expect(newState.orderCreate.message).toBeNull()
        })

        test('with error data', () => {
            const action = setOrderCreateErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.orderCreate.code).toEqual(statusCode)
            expect(newState.orderCreate.message).toBe(messageErrorText)
        })
    })

    describe('setOrderUpdateErrorData action testing', () => {
        test('with null', () => {
            const action = setOrderUpdateErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.orderUpdate.code).toBeNull()
            expect(newState.orderUpdate.message).toBeNull()
        })

        test('with error data', () => {
            const action = setOrderUpdateErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.orderUpdate.code).toEqual(statusCode)
            expect(newState.orderUpdate.message).toBe(messageErrorText)
        })
    })

    describe('setOrderDeleteErrorData action testing', () => {
        test('with null', () => {
            const action = setOrderDeleteErrorData(null, null)
            const newState = ErrorReducer(state, action)

            expect(newState.orderDelete.code).toBeNull()
            expect(newState.orderDelete.message).toBeNull()
        })

        test('with error data', () => {
            const action = setOrderDeleteErrorData(messageErrorText, statusCode)
            const newState = ErrorReducer(state, action)

            expect(newState.orderDelete.code).toEqual(statusCode)
            expect(newState.orderDelete.message).toBe(messageErrorText)
        })
    })
})
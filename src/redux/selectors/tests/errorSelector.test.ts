import {getCustomerCreateErrorData,getCustomerErrorData,getCustomerUpdateErrorData,getLoginErrorData,getProductErrorData,getProductsErrorData,getStaffErrorData,getStaffUpdateErrorData} from '../errorSelector'
import {errorObjWithNull,errorObjForState} from '../../../test/testingData'

describe('Errors selectors testing', () => {
    let state = null
    beforeEach(() => {
        state = {
            errorData: {
                products: errorObjForState,
                product: errorObjForState,
                login: errorObjForState,
                customer: errorObjForState,
                customerCreate: errorObjForState,
                customerUpdate: errorObjForState,
                staff: errorObjForState,
                staffUpdate: errorObjForState
            }
        }
    })

    describe('getProductsErrorData selector testing', () => {
        test('with error data', () => {
            expect(getProductsErrorData(state)).toEqual(errorObjForState)
        })

        test('without error data', () => {
            state.errorData.products = errorObjWithNull
            expect(getProductsErrorData(state)).toEqual(errorObjWithNull)
        })

        test('without normal data', () => {
            state.errorData = null
            expect(getProductsErrorData(state)).toEqual(errorObjWithNull)
        })
    })

    describe('getProductErrorData selector testing', () => {
        test('with error data', () => {
            expect(getProductErrorData(state)).toEqual(errorObjForState)
        })

        test('without error data', () => {
            state.errorData.product = errorObjWithNull
            expect(getProductErrorData(state)).toEqual(errorObjWithNull)
        })

        test('without normal data', () => {
            state.errorData = null
            expect(getProductErrorData(state)).toEqual(errorObjWithNull)
        })
    })

    describe('getLoginErrorData selector testing', () => {
        test('with error data', () => {
            expect(getLoginErrorData(state)).toEqual(errorObjForState)
        })

        test('without error data', () => {
            state.errorData.login = errorObjWithNull
            expect(getLoginErrorData(state)).toEqual(errorObjWithNull)
        })

        test('without normal data', () => {
            state.errorData = null
            expect(getLoginErrorData(state)).toEqual(errorObjWithNull)
        })
    })

    describe('getCustomerErrorData selector testing', () => {
        test('with error data', () => {
            expect(getCustomerErrorData(state)).toEqual(errorObjForState)
        })

        test('without error data', () => {
            state.errorData.customer = errorObjWithNull
            expect(getCustomerErrorData(state)).toEqual(errorObjWithNull)
        })

        test('without normal data', () => {
            state.errorData = null
            expect(getCustomerErrorData(state)).toEqual(errorObjWithNull)
        })
    })

    describe('getCustomerCreateErrorData selector testing', () => {
        test('with error data', () => {
            expect(getCustomerCreateErrorData(state)).toEqual(errorObjForState)
        })

        test('without error data', () => {
            state.errorData.customerCreate = errorObjWithNull
            expect(getCustomerCreateErrorData(state)).toEqual(errorObjWithNull)
        })

        test('without normal data', () => {
            state.errorData = null
            expect(getCustomerCreateErrorData(state)).toEqual(errorObjWithNull)
        })
    })

    describe('getCustomerUpdateErrorData selector testing', () => {
        test('with error data', () => {
            expect(getCustomerUpdateErrorData(state)).toEqual(errorObjForState)
        })

        test('without error data', () => {
            state.errorData.customerUpdate = errorObjWithNull
            expect(getCustomerUpdateErrorData(state)).toEqual(errorObjWithNull)
        })

        test('without normal data', () => {
            state.errorData = null
            expect(getCustomerUpdateErrorData(state)).toEqual(errorObjWithNull)
        })
    })

    describe('getStaffErrorData selector testing', () => {
        test('with error data', () => {
            expect(getStaffErrorData(state)).toEqual(errorObjForState)
        })

        test('without error data', () => {
            state.errorData.staff = errorObjWithNull
            expect(getStaffErrorData(state)).toEqual(errorObjWithNull)
        })

        test('without normal data', () => {
            state.errorData = null
            expect(getStaffErrorData(state)).toEqual(errorObjWithNull)
        })
    })

    describe('getStaffUpdateErrorData selector testing', () => {
        test('with error data', () => {
            expect(getStaffUpdateErrorData(state)).toEqual(errorObjForState)
        })

        test('without error data', () => {
            state.errorData.staffUpdate = errorObjWithNull
            expect(getStaffUpdateErrorData(state)).toEqual(errorObjWithNull)
        })

        test('without normal data', () => {
            state.errorData = null
            expect(getStaffUpdateErrorData(state)).toEqual(errorObjWithNull)
        })
    })
})
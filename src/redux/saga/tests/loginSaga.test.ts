import {loginAPI} from '../../../API/loginAPI'
import {loginCustomerWorker,loginStaffWorker,sagaLoginCustomer,sagaLoginStaff,SAGA_DELETE_SESSION,unloginWorker} from '../loginSaga'
import {code} from '../../../utils/crypto'
import {sagasLoginResolveData,sagasRejectData} from '../../../test/testingData'
import { runSagaHelper } from '../../../test/helpers/runSagaHelper'

describe('login sagas testing', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('loginStaffWorker worker saga testing', () => {
        const action = sagaLoginStaff('testLogin', 'testPassword')

        test('without error', async () => {
            loginAPI.loginStaff = jest.fn().mockResolvedValue(sagasLoginResolveData)

            const dispatched = []
            await runSagaHelper(loginStaffWorker, action, (action) => dispatched.push(action))

            expect(loginAPI.loginStaff).toHaveBeenCalledWith(code(`${action.login}:${action.password}`))
            expect(dispatched).toEqual([
                {type: 'SET_LOGIN_ERROR_DATA',message: null,code: null},
                {type: 'SET_STAFF_ID',staffId: sagasLoginResolveData.data.data.userId},
                {type: 'SAGA_GET_STAFF',hash: sagasLoginResolveData.data.data.userId},
                {type: 'SET_AUTH',isAuth: true}
            ])
        })

        test('with error', async () => {
            loginAPI.loginStaff = jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched = []
            await runSagaHelper(loginStaffWorker, action, (action) => dispatched.push(action))

            expect(loginAPI.loginStaff).toHaveBeenCalledWith(code(`${action.login}:${action.password}`))
            expect(dispatched).toEqual([
                {type: 'SET_LOGIN_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode} 
            ])
        })
    })

    describe('loginCustomerWorker worker saga testing', () => {
        const action = sagaLoginCustomer('testLogin', 'testPassword')

        test('without error', async () => {
            loginAPI.LoginCustomer = jest.fn().mockResolvedValue(sagasLoginResolveData)

            const dispatched = []
            await runSagaHelper(loginCustomerWorker, action, (action) => dispatched.push(action))

            expect(loginAPI.LoginCustomer).toHaveBeenCalledWith(code(`${action.login}:${action.password}`))
            expect(dispatched).toEqual([
                {type: 'SET_LOGIN_ERROR_DATA',message: null,code: null},
                {type: 'SET_CUSTOMER_ID',customerId: sagasLoginResolveData.data.data.userId},
                {type: 'SAGA_GET_CUSTOMER',hash: sagasLoginResolveData.data.data.userId},
                {type: 'SET_AUTH',isAuth: true}
            ])
        })

        test('with error', async () => {
            loginAPI.LoginCustomer = jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched = []
            await runSagaHelper(loginCustomerWorker, action, (action) => dispatched.push(action))

            expect(loginAPI.LoginCustomer).toHaveBeenCalledWith(code(`${action.login}:${action.password}`))
            expect(dispatched).toEqual([
                {type: 'SET_LOGIN_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode}
            ])
        })
    })

    describe('unloginWorker worker testing', () => {
        const action = {
            type: SAGA_DELETE_SESSION,
            error:()=>{}
        }

        test('without error', async () => {
            loginAPI.unlogin = jest.fn().mockResolvedValue()

            const dispatched = []
            await runSagaHelper(unloginWorker, action, (action) => dispatched.push(action))

            expect(loginAPI.unlogin).toHaveBeenCalled()
            expect(dispatched).toEqual([
                {type: 'SET_UNLOGIN_ERROR_DATA',message: null,code: null},
                {type: 'SET_AUTH',isAuth: false},
                {type: 'SET_STAFF_DATA',staffData: null},
                {type: 'SET_INITIALIZE_STAFF',initStaff: false},
                {type: 'SET_CUSTOMER_DATA',data: null},
                {type: 'SET_INITIALIZE_CUSTOMER',initCust: false}
            ])

        })

        test('with error', async () => {
            loginAPI.unlogin = jest.fn().mockRejectedValue(sagasRejectData)

            const dispatched = []
            await runSagaHelper(unloginWorker, action, (action) => dispatched.push(action))

            expect(loginAPI.unlogin).toHaveBeenCalled()
            expect(dispatched).toEqual([
                {type: 'SET_UNLOGIN_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode}
            ])
        })
    })
})
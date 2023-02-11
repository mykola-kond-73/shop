import {loginReducer,setAuth} from '../loginReducer'

describe('login reducer and actions testing', () => {

    let state = null

    beforeEach(() => {
        state = {
            isAuth: false
        }
    })

    describe('setAuth action testing', () => {
        test('with true', () => {
            const action = setAuth(true)
            const newState = loginReducer(state, action)

            expect(newState.isAuth).toBeTruthy()
        })

        test('with false', () => {
            const action = setAuth(false)
            const newState = loginReducer(state, action)

            expect(newState.isAuth).toBeFalsy()
        })
    })
})
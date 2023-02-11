import { getIsAuth } from '../loginSelector'

describe('Logins selectors testing', () => {
    let state = null
    beforeEach(() => {
        state = {
            loginData: {
                isAuth: true
            }
        }
    })

    test('getIsAuth selector testing', () => {
        expect(getIsAuth(state)).toBeTruthy()

        state.loginData=null
        expect(getIsAuth(state)).toBeFalsy()
    })
})
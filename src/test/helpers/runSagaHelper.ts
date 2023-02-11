import {runSaga,Saga} from 'redux-saga'

export const runSagaHelper = (
    saga:Saga,
    action:(...args:any[])=>object,
    dispatchCallback = (action:(...args:any[])=>object) => console.log(action),
    getStateCallback = () => ({
        state: 'test state'
    })
) => {
    return runSaga({
        dispatch: dispatchCallback,
        getState: getStateCallback
    },
    saga,
    action
    ).toPromise()
}
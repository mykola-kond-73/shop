import {errorObjForState,errorObjWithNull} from '../../test/testingData'
import {actionCreatorFromErrorReducer,errorReducerCase} from '../reducers'

describe('reducers utils testing', () => {
    test('errorReducerCase function testing', () => {
        const newStatesProperty = errorReducerCase(errorObjWithNull, errorObjForState)
        expect(newStatesProperty).toEqual(newStatesProperty)
    })

    test('actionCreatorFromErrorReducer function testing', () => {
        const action = actionCreatorFromErrorReducer('TEST-TYPE')(errorObjForState.message,errorObjForState.code)
        expect(action).toEqual({
            type: 'TEST-TYPE',
            message:errorObjForState.message,
            code: errorObjForState.code
        })
    })
})
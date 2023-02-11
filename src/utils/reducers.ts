import { ErrorObjType } from '../types/redux/reducers/errorTypes'
import { Nullable } from '../types/types'

const errorReducerCase = (prevErrorObj: ErrorObjType, errorObj: ErrorObjType) => {
    return {
        ...prevErrorObj,
        message: errorObj.message,
        code: errorObj.code
    }
}

const actionCreatorFromErrorReducer = (type: string) => (message: Nullable<string>, code: Nullable<number>) => ({ type, message, code })

export {
    errorReducerCase,
    actionCreatorFromErrorReducer
}
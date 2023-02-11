import { loginAPI } from '../../API/loginAPI'
import { LoginActionType, LoginConstantsEnum, LoginInitialStateType } from '../../types/redux/reducers/loginTypes'
import { setLoginErrorData } from './errorReducer'

const initialState:LoginInitialStateType={
    isAuth:false
}

export const loginReducer=(state:LoginInitialStateType=initialState,action:LoginActionType):LoginInitialStateType=>{
    switch(action.type){
    case LoginConstantsEnum.SET_AUTH:
        return{
            ...state,
            isAuth:action.isAuth
        }
    default:
        return state
    }
}

export const setAuth=(isAuth:boolean)=>({type:LoginConstantsEnum.SET_AUTH,isAuth})
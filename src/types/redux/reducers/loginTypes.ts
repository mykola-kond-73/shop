export enum LoginConstantsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_TOKEN = 'SET_TOKEN'
}

export type LoginInitialStateType={
    isAuth:boolean
}

type LoginSetAuthActionType={
    type:LoginConstantsEnum.SET_AUTH
    isAuth:boolean
}

export type LoginActionType=LoginSetAuthActionType
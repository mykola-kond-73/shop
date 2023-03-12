export enum LoginSagasConstantsEnum {
    SAGA_LOGIN_STAFF = 'SAGA_LOGIN_STAFF',
    SAGA_LOGIN_CUSTOMER = 'SAGA_LOGIN_CUSTOMER',
    SAGA_DELETE_SESSION = 'SAGA_DELETE_SESSION'
}

export type unloginWorkerSagaType={type:LoginSagasConstantsEnum.SAGA_DELETE_SESSION,error?:()=>void}

export type loginDataType={
    userId:string
    accessToken:string
    refreshToken:string
}
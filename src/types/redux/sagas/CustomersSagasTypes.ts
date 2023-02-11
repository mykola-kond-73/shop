export enum CustomersSagasConstantsEnum {
    SAGA_GET_CUSTOMERS = 'SAGA_GET_CUSTOMERS',
    SAGA_GET_CUSTOMER = 'SAGA_GET_CUSTOMER',
    SAGA_CREATE_CUSTOMER = 'SAGA_CREATE_CUSTOMER',
    SAGA_UPDATE_CUSTOMER = 'SAGA_UPDATE_CUSTOMER',
    SAGA_DELTE_CUSTOMER = 'SAGA_DELTE_CUSTOMER'
}

export type getCustomerWorkerSagaType = {
    type: CustomersSagasConstantsEnum.SAGA_GET_CUSTOMER
    hash: string
}

export type CreateCustomerDataType = {
    name: string
    country: string
    city: string
    email: string
    phone: string
    password: string
}

export type UpdateCustomerDataType = {
    name: string
    email: string
    phone: string
    city: string
    country: string
}
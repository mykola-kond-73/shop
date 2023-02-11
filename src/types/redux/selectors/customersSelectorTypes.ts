import { CustomerType } from '../reducers/customersTypes';

export type CustomerModificateDataType = Omit<CustomerType, 'name'> &
{
    firstname: string
    lastname: string
}
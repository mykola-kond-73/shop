import { StaffDataType } from '../reducers/staffTypes';

export type StaffModificateDataType=Omit<StaffDataType,'name'|'isAdmin'> &
{
    firstname: string
    lastname: string
    isAdmin: string
}
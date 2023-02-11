import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { getCustomerData } from '../../redux/selectors/customersSelector'
import { getIsAuth } from '../../redux/selectors/loginSelector'
import { getStaffData } from '../../redux/selectors/staffesSelector'
import { ErrorMiddleware } from '../error/ErrorMiddleware'
import { PersonalData } from '../fragments/personalData/PersonalData'

export const PersonalOfficeContainer = () => {
    const isAuth = useSelector(getIsAuth)
    const staffData = useSelector(getStaffData)
    const customerData = useSelector(getCustomerData)

    if (staffData || !customerData || !isAuth) {
        return <Navigate to="/products" />
    }
    return (
        <ErrorMiddleware page="customerUpdate">
            {
                customerData &&
                <PersonalData data={customerData} isStaff={false} />
            }
        </ErrorMiddleware>
    )
}
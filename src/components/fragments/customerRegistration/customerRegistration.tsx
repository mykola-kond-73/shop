import React, { FC } from 'react'
import { FormPropsType } from '../../../types/components/formsTypes'
import { CreateCustomerForm } from '../../forms/createCustomer/CreateCustomerForm'

export const CustomerRegistration:FC<FormPropsType> = props => {
    return (
        <div data-testid="create-customer-form-component">
            <CreateCustomerForm
                successModalFunc={props.successModalFunc}
                errorModalFunc={props.errorModalFunc}
            />
        </div>

    )
}
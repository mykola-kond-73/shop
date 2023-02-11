import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import { Divider, Spin } from 'antd'
import { Input } from '../../../utils/form/FormComponents'
import { getDeleteStaffInitialize, getUpdateStaffInitialize } from '../../../redux/selectors/staffesSelector'
import { getDeleteCustomerInitialize, getUpdateCustomerInitialize } from '../../../redux/selectors/customersSelector'
import { sagaUpdateCustomer } from '../../../redux/saga/customersSaga'
import { getCustomerUpdateErrorData, getStaffUpdateErrorData } from '../../../redux/selectors/errorSelector'
import { sagaUpdateStaff } from '../../../redux/saga/staffSaga'
import { setIsUpdateCustomer } from '../../../redux/reducers/customersReducer'
import classes from './PersonalDataForm.module.css'
import classess from '../../../css/colors.module.css'
import { FormCallbacksType, FormPropsType } from '../../../types/components/formsTypes'
import {CustomerType} from '../../../types/redux/reducers/customersTypes'

export const PersonalDataForm:FC<PropsType> = props => {
    const dispatch = useDispatch()
    const updateCustomerInitialize = useSelector(getUpdateCustomerInitialize)
    const deleteCustomerInitialize = useSelector(getDeleteCustomerInitialize)

    const submit = (values:ValuesType, { setSubmitting, resetForm }:FormCallbacksType) => {
        const lastname = values.lastname ? ' ' + values.lastname : ''
        const data:DataType = {
            ...props.data,
            email: values.email,
            phone: values.phone,
            name: values.firstname + lastname
        }
        data.country = values.country
        data.city = values.city
        delete data._id

        dispatch(sagaUpdateCustomer(props.data._id, data, props.successModalFunc as ()=>void, props.errorModalFunc))

        setSubmitting(false)
    }

    const cancel = () => dispatch(setIsUpdateCustomer(false))

    const formValidate = (values:ValuesType) => {
        const errors:Partial<ValuesType> = {}
        if (!values.firstname) errors.firstname = 'This field is required'
        if (!values.country) errors.country = 'This field is required'
        if (!values.city) errors.city = 'This field is required'
        if (!values.phone) errors.phone = 'This field is required'
        else if (!/[0-9]{10}/.test(values.phone)) errors.phone = 'Invalid phone'
        if (!values.email) errors.email = 'This field is required'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address'

        return errors
    }

    return (
        <div data-testid="personal-data-update-form" className={classes.root}>
            <Formik onSubmit={submit}
                initialValues={{
                    firstname: props.data.name.firstname,
                    lastname: props.data.name.lastName ? props.data.name.lastName : '',
                    country: props.data.country,
                    city: props.data.city,
                    phone: props.data.phone,
                    email: props.data.email
                }}
                validate={formValidate}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <div className={classes.rootForm}>
                            <div className={classes.fields}>
                                <Input touched={touched} errors={errors} name="firstname" type="text" placeholder="Напишіть своє ім'я" />
                                <Input touched={touched} errors={errors} name="lastname" type="text" placeholder="Напишіть своє прізвище" />
                                <Input touched={touched} errors={errors} name="country" type="text" placeholder="Напишіть свою країну" />
                                <Input touched={touched} errors={errors} name="city" type="text" placeholder="Напишіть своє місто" />
                                <Input touched={touched} errors={errors} name="phone" type="text" placeholder="Напишіть свій номер телефону" />
                                <Input touched={touched} errors={errors} name="email" type="text" placeholder="Напишіть свій E-mail" />
                            </div>
                            <div>
                                {
                                    updateCustomerInitialize
                                        ? <Spin size="large" />
                                        : <button type="submit" disabled={isSubmitting} className={`${classes.button} ${classess.buttonUpd}`}>
                                            Оновити
                                        </button>
                                }
                                {
                                    deleteCustomerInitialize
                                        ? <Spin size="large" />
                                        : <button type="button" onClick={cancel} className={`${classes.button} ${classess.buttonDel}`}>
                                            Скасувати
                                        </button>
                                }
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

type PropsType=FormPropsType&{data:CustomerType}
type ValuesType=Omit<CustomerType,'name'|'_id'>&{firstname:string,lastname:string,_id?:string}
type DataType=Omit<CustomerType,'name'|'_id'>&{name:string,_id?:string}
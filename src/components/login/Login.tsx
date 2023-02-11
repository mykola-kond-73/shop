import React, { useState } from 'react'
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { getCustomerErrorData, getLoginErrorData, getStaffErrorData } from '../../redux/selectors/errorSelector'
import { sagaLoginCustomer, sagaLoginStaff } from '../../redux/saga/loginSaga'
import classes from '../../css/form.module.css'
import classess from './login.module.css'
import { LoginServerError } from '../error/loginServerError'
import { getIsAuth } from '../../redux/selectors/loginSelector'
import { Navigate } from 'react-router'
import { getStaffData } from '../../redux/selectors/staffesSelector'
import { getCustomerData } from '../../redux/selectors/customersSelector'
import { Checkbox, Input } from '../../utils/form/FormComponents';
import { FormCallbacksType } from '../../types/components/formsTypes';

type ValuesType = {
    login: string
    password: string
    isStaff:boolean
}

export const Login = React.memo(() => {
    const dispatch = useDispatch()

    const isAuth = useSelector(getIsAuth)
    const staff = useSelector(getStaffData)
    const customer = useSelector(getCustomerData)

    const error = {
        serverLoginError: useSelector(getLoginErrorData),
        serverCustomerError: useSelector(getCustomerErrorData),
        serverStaffError: useSelector(getStaffErrorData)
    }

    const submit = async (values:ValuesType, { setSubmitting, resetForm }: FormCallbacksType) => {
        values.isStaff
            ? dispatch(sagaLoginStaff(values.login, values.password))
            : dispatch(sagaLoginCustomer(values.login, values.password))
        setSubmitting(false)
        resetForm()
    }

    const formValidate = (values:ValuesType) => {
        const errors:Partial<ValuesType> = {}
        if (!values.login) errors.login = 'This field is required'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) errors.login = 'Invalid email address'
        if (!values.password) errors.password = 'This field is required'
        else if (values.password.length < 8) errors.password = 'At least 8 characters'

        return errors
    }

    if (isAuth && customer) {
        return <Navigate to="/products" />
    } else if (isAuth && staff) {
        return <Navigate to="/crm" />
    }
    return (
        <div data-testid="login-page" className={classess.root}>
            <Formik onSubmit={submit}
                initialValues={{ login: '', password: '', isStaff: false }}
                validate={formValidate}>

                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <div className={classess.form}>
                            <div className={classess.fields}>
                                <Input touched={touched} errors={errors} name="login" type="email" placeholder="Введіть логін" />
                                <Input touched={touched} errors={errors} name="password" type="password" placeholder="Введіть пароль" />
                                <Checkbox touched={touched} errors={errors} name="isStaff" type="checkbox" text="Зайти як працівник" />
                            </div>
                            <div>
                                {
                                    (error.serverLoginError.message || error.serverCustomerError.message || error.serverStaffError.message) &&
                                    <div className={`${classes.fieldError} ${classes.errorMessage} ${classess.field} ${classess.error}`}>
                                        {error.serverLoginError.message && <LoginServerError message={error.serverLoginError.message} code={error.serverLoginError.code!} />}
                                        {error.serverCustomerError.message && <LoginServerError message={error.serverCustomerError.message} code={error.serverCustomerError.code!} />}
                                        {error.serverStaffError.message && <LoginServerError message={error.serverStaffError.message} code={error.serverStaffError.code!} />}
                                    </div>
                                }
                            </div>
                            <button type="submit" disabled={isSubmitting} className={classess.button}>
                                Зайти
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
})
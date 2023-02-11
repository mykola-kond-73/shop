import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import { Input } from '../../../utils/form/FormComponents'
import { sagaCreateCustomer } from '../../../redux/saga/customersSaga'
import { Spin } from 'antd'
import { getCreateCustomerInitialize } from '../../../redux/selectors/customersSelector'
import classes from './CreateCustomer.module.css'
import { FormCallbacksType, FormPropsType } from '../../../types/components/formsTypes'
import { CreateCustomerDataType } from '../../../types/redux/sagas/CustomersSagasTypes'

export const CreateCustomerForm: FC<FormPropsType> = props => {
    const dispatch = useDispatch()
    const createCustomerInitialize = useSelector(getCreateCustomerInitialize)

    const submit = async (values:ValuesType, { setSubmitting, resetForm }: FormCallbacksType) => {
        const data = { ...values }
        delete data.passwordRepeat
        dispatch(sagaCreateCustomer(data, props.successModalFunc, props.errorModalFunc))
        setSubmitting(false)
        resetForm()
    }


    const formValidate = (values:ValuesType) => {
        const errors:Partial<ValuesType> = {}
        if (!values.name) errors.name = 'This field is required'
        else if (values.name.length < 2) errors.name = 'Name is too short'
        if (!values.country) errors.country = 'This field is required'
        else if (values.country.length < 2) errors.country = 'Country is too short'
        if (!values.city) errors.city = 'This field is required'
        else if (values.city.length < 2) errors.city = 'City is too short'
        if (!values.email) errors.email = 'This field is required'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address'
        if (!values.phone) errors.phone = 'This field is required'
        else if (!/[0-9]{10}/.test(values.phone)) errors.phone = 'Invalid phone number'
        if (!values.password) errors.password = 'This field is required'
        else if (values.password.length < 8) errors.password = 'At least 8 characters'
        if (!values.passwordRepeat) errors.passwordRepeat = 'This field is required'
        else if (values.passwordRepeat.length < 8) errors.passwordRepeat = 'At least 8 characters'
        else if (values.password !== values.passwordRepeat) errors.passwordRepeat = 'passwords do not match'

        return errors
    }

    return (
        <Formik onSubmit={submit}
            initialValues={{ name: '', country: '', city: '', email: '', phone: '', password: '', passwordRepeat: '' }}
            validate={formValidate}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form className={classes.contentForm}>
                    <div className={classes.contentForm}>
                        <div>
                            <Input touched={touched} errors={errors} name="name" type="text" placeholder="Ваше ім'я" />
                            <Input touched={touched} errors={errors} name="country" type="text" placeholder="Ваша країна" />
                            <Input touched={touched} errors={errors} name="city" type="text" placeholder="Ваше місто" />
                            <Input touched={touched} errors={errors} name="email" type="email" placeholder="Ваш email" />
                            <Input touched={touched} errors={errors} name="phone" type="text" placeholder="Ваш номер телефону" />
                            <Input touched={touched} errors={errors} name="password" type="text" placeholder="Ваш пароль" />
                            <Input touched={touched} errors={errors} name="passwordRepeat" type="text" placeholder="Повторіть пароль" />
                        </div>
                        <div>
                            {
                                createCustomerInitialize
                                    ? <div data-testid="spin"><Spin size="large" /></div>
                                    : <button type="submit" disabled={isSubmitting} style={{ padding: '15px', backgroundColor: '#1E6523', fontWeight: 600, fontSize: '1.2em' }}>
                                        Зареєструватися
                                    </button>
                            }
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

type ValuesType = CreateCustomerDataType &{passwordRepeat?: string}
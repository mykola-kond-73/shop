import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import { Checkbox, Input } from '../../../utils/form/FormComponents'
import { Spin } from 'antd'
import { getCreateStaffInitialize } from '../../../redux/selectors/staffesSelector'
import { sagaCreateStaff } from '../../../redux/saga/staffSaga'
import {FormCallbacksType, FormPropsType} from '../../../types/components/formsTypes'
import {CreateStaffDataType} from '../../../types/redux/sagas/staffSagasTypes'

export const CreateStaffForm:FC<FormPropsType> = props => {
    const dispatch = useDispatch()
    const createStaffInitialize=useSelector(getCreateStaffInitialize)
    const submit = async (values:ValuesType, { setSubmitting, resetForm }:FormCallbacksType) => {
        const data:ValuesType = { ...values }
        // if(data.isAdmin) data.secretKey='secretKey'
        delete data.passwordRepeat
        console.log(data)
        dispatch(sagaCreateStaff(data, props.successModalFunc as ()=>void, props.errorModalFunc))
        setSubmitting(false)
        resetForm()
    }


    const formValidate = (values:ValuesType) => {
        const errors:DataType = {}
        if (!values.name) errors.name = 'This field is required'
        else if (values.name.length < 2) errors.name = 'Name is too short'
        if(!values.role) errors.role='This field is required'
        else if (values.role != 'ceo' && values.role != 'frontend' && values.role != 'backend') errors.role = 'in the field can only be CEO, frontend, backend'
        if (!values.email) errors.email = 'This field is required'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address'
        if (!values.phone) errors.phone = 'This field is required'
        else if (!/[0-9]{10}/.test(values.phone)) errors.phone = 'Invalid phone number'
        if (!values.password) errors.password = 'This field is required'
        else if (values.password.length < 8) errors.password = 'At least 8 characters'
        if (!values.passwordRepeat) errors.passwordRepeat = 'This field is required'
        else if (values.passwordRepeat.length < 8) errors.passwordRepeat = 'At least 8 characters'
        else if (values.password != values.passwordRepeat) errors.passwordRepeat = 'passwords do not match'

        return errors
    }

    return (
        <Formik onSubmit={submit}
            initialValues={{ name: '', email: '', phone: '', password: '', passwordRepeat: '',role:'',isAdmin:false,secretKey:'' }}
            validate={formValidate}>
            {({ isSubmitting, errors, touched }) => (
                <Form>
                    <Input touched={touched} errors={errors} name="name" type="text" placeholder="Ваше ім'я" />
                    <Input touched={touched} errors={errors} name="role" type="text" placeholder="Напишіть свою посаду" />
                    <Input touched={touched} errors={errors} name="email" type="email" placeholder="Ваш email" />
                    <Input touched={touched} errors={errors} name="phone" type="text" placeholder="Ваш номер телефону" />
                    <Input touched={touched} errors={errors} name="password" type="text" placeholder="Ваш пароль" />
                    <Input touched={touched} errors={errors} name="passwordRepeat" type="text" placeholder="Повторіть пароль" />
                    <Checkbox touched={touched} errors={errors} name="isAdmin" type="checkbox" text="Адміністратор"/>
                    {
                        createStaffInitialize
                            ? <Spin size="large" />
                            : <button type="submit" disabled={isSubmitting} style={{ padding: '15px', backgroundColor: '#1d6929', fontWeight: 500, fontSize: '1.1em' }}>
                                Зареєструватися
                            </button>
                    }

                </Form>
            )}
        </Formik>
    )
}

type DataType=Omit<Partial<ValuesType>,'role'>&{role?:string}
type ValuesType=CreateStaffDataType & {passwordRepeat?:string}
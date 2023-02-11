import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import { Spin } from 'antd'
import { Checkbox, Input } from '../../../utils/form/FormComponents'
import { getDeleteStaffInitialize, getUpdateStaffInitialize } from '../../../redux/selectors/staffesSelector'
import { sagaUpdateStaff } from '../../../redux/saga/staffSaga'
import { setIsUpdateStaff } from '../../../redux/reducers/staffReducer'
import classes from '../personalDataForm/PersonalDataForm.module.css'
import classess from '../../../css/colors.module.css'
import { FormCallbacksType, FormPropsType } from '../../../types/components/formsTypes'
import { StaffModificateDataType } from '../../../types/redux/selectors/staffSelectorTypes'

export const UpdateStaffForm:FC<PropsType> = props => {
    const dispatch = useDispatch()
    const updateStaffInitialize = useSelector(getUpdateStaffInitialize)
    const deleteStaffInitialize = useSelector(getDeleteStaffInitialize)
    const submit = (values:ValuesType, { setSubmitting, resetForm }:FormCallbacksType) => {
        const lastname = values.lastname ? ' ' + values.lastname : ''
        const data:DataType = {
            ...props.data,
            email: values.email,
            phone: values.phone,
            name: values.firstname + lastname
        }
        data.role = values.role
        data.isAdmin = values.isAdmin
        delete data._id
        delete data.firstname
        delete data.lastname

        dispatch(sagaUpdateStaff(props.data._id, data, props.successModalFunc as (hash:string)=>void, props.errorModalFunc))
        resetForm()
        setSubmitting(false)
    }

    const cancel = () => dispatch(setIsUpdateStaff(false))

    const formValidate = (values:ValuesType) => {
        const errors:ErrorsType = {}
        if (!values.firstname) errors.firstname = 'This field is required'
        if (!values.role) errors.role = 'This field is required'
        if (values.role != 'ceo' && values.role != 'frontend' && values.role != 'backend') errors.role = 'in the field can only be CEO, frontend, backend'
        if (!values.phone) errors.phone = 'This field is required'
        else if (!/[0-9]{10}/.test(values.phone)) errors.phone = 'Invalid phone'
        if (!values.email) errors.email = 'This field is required'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address'

        return errors
    }
    return (
        <div data-testid="update-staff-form" className={classes.root}>
            <Formik onSubmit={submit}
                initialValues={{
                    firstname: props.data.firstname,
                    lastname: props.data.lastname ? props.data.lastname : '',
                    role: props.data.role,
                    phone: props.data.phone,
                    email: props.data.email,
                    isAdmin: props.data.isAdmin
                }}
                validate={formValidate}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <div className={classes.rootForm}>
                            <div className={classes.fields}>
                                <Input touched={touched} errors={errors} name="firstname" type="text" placeholder="Напишіть своє ім'я" />
                                <Input touched={touched} errors={errors} name="lastname" type="text" placeholder="Напишіть своє прізвище" />
                                <Input touched={touched} errors={errors} name="role" type="text" placeholder="Напишіть свою посаду" />
                                <Input touched={touched} errors={errors} name="phone" type="text" placeholder="Напишіть свій номер телефону" />
                                <Input touched={touched} errors={errors} name="email" type="text" placeholder="Напишіть свій E-mail" />
                                <Checkbox touched={touched} errors={errors} name="isAdmin" type="checkbox" text="Адміністратор" />
                            </div>
                            <div>
                                {
                                    updateStaffInitialize
                                        ? <Spin size="large" />
                                        : <button type="submit" disabled={isSubmitting}  className={`${classes.button} ${classess.buttonUpd}`}>
                                            Оновити
                                        </button>
                                }
                                {
                                    deleteStaffInitialize
                                        ? <Spin size="large" />
                                        : <button type="button" onClick={cancel}  className={`${classes.button} ${classess.buttonDel}`}>
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

type PropsType=FormPropsType&{data:Omit<StaffModificateDataType,'isAdmin'> &{isAdmin:boolean}}
type ValuesType=Omit<StaffModificateDataType,'isAdmin'|'_id'> &{isAdmin:boolean,_id?:string}
type DataType=Omit<ValuesType,'firstname'|'lastname'>&{name:string,firstname?:string,lastname?:string}
type ErrorsType=Omit<Partial<ValuesType>,'role'>&{role?:string}
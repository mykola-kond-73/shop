import React, { FC } from 'react'
import { Button, Modal, Popconfirm, Spin } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons';
import { PersonalDataForm } from '../../forms/personalDataForm/PersonalDataForm'
import { useDispatch, useSelector } from 'react-redux'
import { setIsUpdateCustomer } from '../../../redux/reducers/customersReducer'
import { setIsUpdateStaff } from '../../../redux/reducers/staffReducer'
import { getDeleteCustomerInitialize, getIsUpdateCustomer, getInitializeCustomer } from '../../../redux/selectors/customersSelector'
import { getDeleteStaffInitialize, getInitializeStaff, getIsUpdateStaff } from '../../../redux/selectors/staffesSelector'
import { sagaDeleteCustomer } from '../../../redux/saga/customersSaga'
import { sagaDeleteStaff } from '../../../redux/saga/staffSaga'
import { UpdateStaffForm } from '../../forms/createStaff/UpdateStaffForm';
import classes from './PersonalData.module.css'
import { CustomersSagasConstantsEnum } from '../../../types/redux/sagas/CustomersSagasTypes';
import { LoginSagasConstantsEnum } from '../../../types/redux/sagas/loginSagasTypes';
import { StaffSagasConstantsType } from '../../../types/redux/sagas/staffSagasTypes';
import { CustomerType } from '../../../types/redux/reducers/customersTypes';
import { StaffDataType } from '../../../types/redux/reducers/staffTypes';
import { StaffModificateDataType } from '../../../types/redux/selectors/staffSelectorTypes';
import { NameObjType } from '../../../types/redux/reducers/reducersTypes';

type PropsType = {
    data: CustomerType | StaffDataType
    isStaff: boolean
}
type ButtonStyleType = {
        border: string
        color: string
        fontSize: string
        padding: string
        backgroundColor?: string
    }

type UpdateDataType=Omit<StaffDataType,'name'>&{name?:NameObjType,firstname:string,lastname:string}

export const PersonalData: FC<PropsType> = props => {
    const dispatch = useDispatch()

    const initializeCustomer = useSelector(getInitializeCustomer)
    const isUpdateCustomer = useSelector(getIsUpdateCustomer)
    const isUpdateStaff = useSelector(getIsUpdateStaff)

    const initializeStaff = useSelector(getInitializeStaff)
    const deleteCustomerInitialize = useSelector(getDeleteCustomerInitialize)
    const deleteStaffInitialize = useSelector(getDeleteStaffInitialize)

    const success = (hash: string) => {
        Modal.success({
            content: 'Ви успішно оновили дані',
            onOk: async () => {
                props.isStaff
                    ? dispatch({ type: StaffSagasConstantsType.SAGA_GET_STAFF, hash })
                    : dispatch({ type: CustomersSagasConstantsEnum.SAGA_GET_CUSTOMER, hash })
            }
        });
    }
    const error = () => {
        Modal.error({
            content: 'Нажаль у вас не вийшло оновити дані. Можливо ви використали email чи номер телефону який зайнятий інший користувачемі. \nБажаєте спробувати ще раз? ',
            closable: true,
            onOk() {
            }
        });
    }


    const successDelete = (
        // hash: string
    ): void => {
        Modal.success({
            content: 'Ви успішно скасували реєстрацію',
            onOk: async () => {
                dispatch({ type: LoginSagasConstantsEnum.SAGA_DELETE_SESSION })
            }
        });
    }
    const errorDelete = () => {
        Modal.error({
            content: 'Нажаль у вас не вийшло скасувати реєстрацію.\nБажаєте спробувати ще раз? ',
            closable: true,
            onOk() { }
        });
    }


    const updateButton = () => {
        props.isStaff
            ? dispatch(setIsUpdateStaff(true))
            : dispatch(setIsUpdateCustomer(true))
    }

    const removeCustomer = (id: string) => {
        props.isStaff
            ? dispatch(sagaDeleteStaff(id, successDelete, errorDelete))
            : dispatch(sagaDeleteCustomer(id, successDelete, errorDelete))
    }

    const newData:UpdateDataType = {
        ...props.data as StaffDataType,
        firstname: props.data.name.firstname,
        lastname: props.data.name.lastName ? props.data.name.lastName : ''
    }
    delete newData.name

    if ((!props.isStaff && initializeCustomer) || (props.isStaff && initializeStaff)) {
        return <Spin size="large" />
    }
    if ((!props.isStaff && isUpdateCustomer)) {
        return <PersonalDataForm
            successModalFunc={success}
            errorModalFunc={error}
            data={props.data as CustomerType}
        />

    }
    if ((props.isStaff && isUpdateStaff)) {
        return <UpdateStaffForm
            successModalFunc={success}
            errorModalFunc={error}
            data={newData as UpdateDataType}
        />
    }

    const buttonStyle = (color: string): ButtonStyleType => {
        const style:ButtonStyleType = {
            border: 'none',
            color: 'rgb(211, 208, 208)',
            fontSize: '1.15em',
            padding: '8px'
        }
        style.backgroundColor = color
        return style
    }

    return (
        <div className={classes.root}>
            <div>
                <h2 className={classes.names}>
                    {props.data.name.firstname}
                </h2>
                <h2 className={classes.names}>
                    {props.data.name.lastName && props.data.name.lastName}
                </h2>
            </div>
            <div className={classes.content}>
                {
                    props.isStaff
                        ? <div className={classes.field}>
                            <span className={classes.fieldName}>
                                Role:
                            </span>
                            {(props.data as StaffDataType).role}
                        </div>
                        : <div>
                            <div className={classes.field}>
                                <span className={classes.fieldName}>
                                    Country:
                                </span>
                                {(props.data as CustomerType).country}
                            </div>
                            <div className={classes.field}>
                                <span className={classes.fieldName}>
                                    City:
                                </span>
                                {(props.data as CustomerType).city}
                            </div>
                        </div>
                }
                <div className={classes.field}>
                    <span className={classes.fieldName}>
                        Phone:
                    </span>
                    {props.data.phone}
                </div>
                <div className={classes.field}>
                    <span className={classes.fieldName}>
                        Email:
                    </span>
                    {props.data.email}
                </div>
                <div className={classes.adm}>
                    {props.isStaff && (props.data as StaffDataType) && 'Admin'}
                </div>
            </div>
            <div className={classes.buttonCont}>
                <div className={classes.button}>
                    <Button size="large" onClick={updateButton} style={buttonStyle('#1E6523')}>Оновити</Button>
                </div>
                <Popconfirm
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    title="Ви справді хочете скасувати реєстрацію"
                    onConfirm={() => removeCustomer(props.data._id)}
                    // onCancel={}
                    okText="Так"
                    cancelText="Ні"
                >
                    <div className={classes.button}>
                        <Button size="large"
                            loading={
                                !props.isStaff && deleteCustomerInitialize
                                    ? deleteCustomerInitialize
                                    : props.isStaff && deleteStaffInitialize
                                        ? deleteStaffInitialize
                                        : false
                            }
                            style={buttonStyle('#202F56')}>
                            Скасувати реєстрацію
                        </Button>
                    </div>
                </Popconfirm>

            </div>
        </div>
    )
}
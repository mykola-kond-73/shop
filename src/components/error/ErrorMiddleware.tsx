import React, { FC, ReactNode, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'antd'
import { getPageSize, getInitialize, getInitializeProduct, getFilter, getSection } from '../../redux/selectors/productsSelector'
import { useParams } from 'react-router'
import { SagaGetProduct, SagaGetproducts } from '../../redux/saga/productsSaga'
import { sagaGetCustomers} from '../../redux/saga/customersSaga'
import { getCustomerId, getCustometIdInit } from '../../redux/selectors/customersSelector'
import { getInitializeStaffs, getStaffId,getStaffIdInit,getSize as getStaffsSize } from '../../redux/selectors/staffesSelector'
import { sagaGetStaffs } from '../../redux/saga/staffSaga'
import { getFilterOrderData, getInitializeOrders, getSize } from '../../redux/selectors/ordersSelector'
import { getOrdersDataSaga } from '../../redux/saga/ordersSaga'
import {getSize as getSizeCustomers,getInitializeCustomers} from '../../redux/selectors/customersSelector'
import {setFilterOrderData, setPage} from '../../redux/reducers/ordersReducer'
import {setFilterCustData, setPage as setPageCustomer} from '../../redux/reducers/customersReducer'
import {setPage as setPageStaffs, setStaffsFilterData} from '../../redux/reducers/staffReducer'
import { setFilterData, setPageCount } from '../../redux/reducers/productsReducer'
import { CustomersSagasConstantsEnum } from '../../types/redux/sagas/CustomersSagasTypes'
import { StaffSagasConstantsType } from '../../types/redux/sagas/staffSagasTypes'
import { AppStateType } from '../../types/redux/storeTypes'
import {ErrorObjType, InitialStateNamesType} from '../../types/redux/reducers/errorTypes'

export const ErrorMiddleware:FC<PropsType> = props => {
    const [loadButton, setLoadButton] = useState(false)
    const errorObject = useSelector((state:AppStateType):ErrorObjType => state.errorData[props.page])

    const pageSize = useSelector(getPageSize)
    const initialize = useSelector(getInitialize)
    const initializeProduct = useSelector(getInitializeProduct)
    // const filterProducts=useSelector(getFilter)
    const sectionProducts=useSelector(getSection)

    const customerId=useSelector(getCustometIdInit)
    const initializeCustomers=useSelector(getInitializeCustomers)
    const customersSize=useSelector(getSizeCustomers)
    const customerIdFromCustomerData=useSelector(getCustomerId)
    const staffId=useSelector(getStaffIdInit)
    const staffIdFromStaffData=useSelector(getStaffId)

    const orderSize=useSelector(getSize)
    const inializeOrders=useSelector(getInitializeOrders)
    // const filter=useSelector(getFilterOrderData)

    const initializeStaffs=useSelector(getInitializeStaffs)
    const staffsSize=useSelector(getStaffsSize)

    const {productId} = useParams<{productId:string}>()

    const dispatch = useDispatch()

    const onClick = async () => {
        setLoadButton(true)
        switch (props.page) {
        case 'products':
            dispatch(setPageCount(1))
            dispatch(setFilterData({}))
            dispatch(SagaGetproducts(1, pageSize, sectionProducts,JSON.stringify({})))
            setLoadButton(false)
            break;
        case 'product':
            dispatch(SagaGetProduct(productId!))
            setLoadButton(false)
            break;
        case 'customers':
            dispatch(setPageCustomer(1))
            dispatch(setFilterCustData({}))
            dispatch(sagaGetCustomers(1,customersSize,{}))
            setLoadButton(false)
            break;
        case 'customerUpdate':
            dispatch({type:CustomersSagasConstantsEnum.SAGA_GET_CUSTOMER,hash:customerId?customerId:customerIdFromCustomerData})
            setLoadButton(false)
            break;
        case 'staffUpdate':
            dispatch({type:StaffSagasConstantsType.SAGA_GET_STAFF,hash:staffId?staffId:staffIdFromStaffData})
            break;
        case 'orders':
            dispatch(setPage(1))
            dispatch(setFilterOrderData({}))
            dispatch(getOrdersDataSaga(1,orderSize,{}))
            setLoadButton(false)
            break;
        case 'staffs':
            dispatch(setPageStaffs(1))
            dispatch(setStaffsFilterData({}))
            dispatch(sagaGetStaffs(1,staffsSize,{}))
            setLoadButton(false)
            break;
        }
    }

    if (errorObject.message) {
        return (
            <Card style={{ width: 300 }}>
                <p>
                    {
                        errorObject.code && (errorObject.code > 400 && errorObject.code < 500)
                            ? `Сталася помилка пов'язана із неправильним запитом. Ви можете спробувати знову запросити дані, або написати у нашу службу підтримки, за адресою: ${'@@@@@@'}`
                            : errorObject.code && errorObject.code > 500
                                ? `Сталася помилка пов'язана із серверною помилкою. Будь ласка зверніться до нашої служби підтримки за адресою: ${'@@@@@@'}`
                                : `Сталася помилка, яка можливо пов'яза із проблемами з підключенням до мережі. Спробуйте знову запросити дані, якщо це не вийде, то зверніться у нашу службу підтримки за адресою: ${'@@@@@'}`
                    }
                </p>
                <p>
                    {errorObject.message}
                </p>
                {
                    errorObject.code
                        ? <p>{errorObject.code}</p>
                        : false
                }
                {
                    errorObject.code && errorObject.code > 500
                        ? false
                        : <Button onClick={onClick}
                            loading={loadButton}
                            disabled={props.page === 'products'
                                ? !initialize
                                : props.page === 'product'
                                    ? initializeProduct
                                    : props.page==='orders'
                                        ?inializeOrders
                                        :props.page==='customers'
                                            ?initializeCustomers
                                            :props.page==='staffs'
                                                ?initializeStaffs
                                                :false
                            }
                        >
                            Повторно запросити дані
                        </Button>
                }
            </Card>
        )
    }
    return (
        <>
            {props.children}
        </>
    )
}

type PropsType={
    page:InitialStateNamesType
    children:ReactNode
}
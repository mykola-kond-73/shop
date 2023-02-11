import React, { FC } from 'react'
import { Spin } from 'antd'
import { Formik,Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { getCreateOrderInitialize, getFilterOrderData } from '../../../redux/selectors/ordersSelector'
import { createOrderSaga } from '../../../redux/saga/ordersSaga'
import {Input} from '../../../utils/form/FormComponents'
import { getCustomerId } from '../../../redux/selectors/customersSelector'
import {getProductsList} from '../../../redux/selectors/basketSelector'
import { setCreateOrderInitialize } from '../../../redux/reducers/ordersReducer'
import { FormCallbacksType, FormPropsType} from '../../../types/components/formsTypes'
import { BasketProductType } from '../../../types/redux/reducers/basketTypes'
import { Nullable } from '../../../types/types'
import { CreateOrderDataType } from '../../../types/redux/sagas/ordersSagasTypes'

export const CreateOrder:FC<FormPropsType> = (props) => {
    const dispatch = useDispatch()
    const createOrderInitialize = useSelector(getCreateOrderInitialize)
    const customerId=useSelector(getCustomerId)
    const productsList=useSelector(getProductsList)
    const filter=useSelector(getFilterOrderData)

    const submit = (values:ValuesType, { setSubmitting, resetForm }:FormCallbacksType) => {
        dispatch(setCreateOrderInitialize(true))
        if(productsList && productsList.length==0){
            dispatch(setCreateOrderInitialize(false))
        }else{
            const data:CreateOrderDataType={
                customer:customerId!,
                products:productsList!,
                comment:values.description
            }
            dispatch(createOrderSaga(data, props.successModalFunc as ()=>void, props.errorModalFunc,resetForm,false,null,null,filter))
            setSubmitting(false)
        }
        
    }
    return (
        <Formik onSubmit={submit}
            initialValues={{ description: '' }}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form>
                    <Input touched={touched} errors={errors} name="description" type="textarea" placeholder="Напишіть коментар до замовлення" />
                    {
                        createOrderInitialize
                            ? <Spin size="large" />
                            : <button type="submit" disabled={isSubmitting} style={{ padding: '15px', backgroundColor: '#1d6929', fontWeight: 500, fontSize: '1.1em' }}>
                                зареєструвати
                            </button>
                    }

                </Form>
            )}
        </Formik>
    )
}

type ValuesType={
    description:string
}
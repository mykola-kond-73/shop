import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import { Input } from '../../../utils/form/FormComponents'
import { getFilterOrderData, getPage, getSize } from '../../../redux/selectors/ordersSelector'
import { createOrderSaga, getOrdersDataSaga, updateOrderData } from '../../../redux/saga/ordersSaga'
import { FormCallbacksType } from '../../../types/components/formsTypes'
import { OrderDataType } from '../../../types/redux/reducers/orderTypes'
import { CreateOrderDataType } from '../../../types/redux/sagas/ordersSagasTypes'

export const UpdateCreateOrder: FC<PropsType> = props => {
    const page = useSelector(getPage)
    const size = useSelector(getSize)
    const filter = useSelector(getFilterOrderData)

    const dispatch = useDispatch()
    const submit = (values: ValuesType, { setSubmitting, resetForm }: FormCallbacksType) => {
        const productsObjArr = []
        const productsArr = values.products.split(' ')
        const countsArr = values.counts.split(' ')

        for (let i = 0; i < productsArr.length; i++) {
            productsObjArr.push({
                product: productsArr[i],
                count: +countsArr[i]
            })
        }

        const data:DataType = {
            ...values,
            products: productsObjArr
        }
        delete data.counts

        if (props.role === 'update') dispatch(updateOrderData(props.data!.id, data, props.successUpdateModalFunc!, props.errorUpdateModalFunc!, resetForm, page, size, filter))
        else if (props.role === 'create') dispatch(createOrderSaga(data, props.successCreateModalFunc!, props.errorCreateModalFunc!, resetForm, true, page, size, filter))

        setSubmitting(false)
    }
    const formValidate = (values: ValuesType) => {
        const errors: Partial<ValuesType> = {}

        const productsArr = values.products.split(' ')
        const countsArr = values.counts.split(' ')

        if (!values.customer) errors.customer = 'This field is required'
        if (!values.products) errors.products = 'This field is required'
        else if (productsArr.length != countsArr.length) {
            errors.products = 'the number of records in the field must be equal to the number of records in the field "counts"'
            errors.counts = 'the number of records in the field must be equal to the number of records in the field "products"'
        }
        if (!values.counts) errors.counts = 'This field is required'

        return errors
    }

    return (
        <>
            <Formik onSubmit={submit}
                initialValues={{
                    customer: props.data ? props.data.customer : '',
                    products: props.data ? props.data.product : '',
                    counts: props.data ? String(props.data.count) : '',
                    comment: props.data ? props.data.comment : ''
                }}
                validate={formValidate}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <Input touched={touched} errors={errors} name="customer" type="text" placeholder="Напишіть id клієнта" />
                        <Input touched={touched} errors={errors} name="products" type="text" placeholder="Напишіть id товарів через пробіл" />
                        <Input touched={touched} errors={errors} name="counts" type="text" placeholder="Напишіть к-сть кожного товару через пробіл" />
                        <Input touched={touched} errors={errors} name="comment" type="text" placeholder="Напишіть коментар" />
                        <button type="submit" disabled={isSubmitting} style={{ padding: '3px', backgroundColor: '#1d6929', fontWeight: 500, fontSize: '1.1em' }}>
                            {props.role === 'update' ? 'Оновити' : props.role === 'create' ? 'Створити' : ''}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

type PropsType = {
    role: 'update' | 'create'
    data?: {
        id:string
        customer:string
        product:string
        count:number
        comment:string
    }
    successUpdateModalFunc?:()=>void 
    errorUpdateModalFunc?:()=>void

    successCreateModalFunc?:()=>void
    errorCreateModalFunc?:()=>void
}

type ValuesType = {
    customer: string
    products: string
    counts: string
    comment: string
}

type DataType=CreateOrderDataType & { counts?: string }
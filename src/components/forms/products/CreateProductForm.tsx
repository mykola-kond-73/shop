import { Spin, Checkbox as CheckboxAntd } from 'antd'
import { Field, Form, Formik } from 'formik'
import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sagaCreateProduct } from '../../../redux/saga/productsSaga'
import { getInitializeCreateProduct } from '../../../redux/selectors/productsSelector'
import { FormCallbacksType, FormPropsType, ProductFormDataType, ProductFormErrorsType, ProductFormValuesType } from '../../../types/components/formsTypes'
import { CreateProductType } from '../../../types/redux/sagas/productsSagasTypes'
import { Checkbox, Input } from '../../../utils/form/FormComponents'

export const CreateProductForm:FC<FormPropsType> = props => {
    const dispatch = useDispatch()
    const [isShare, setIsShare] = useState(false)
    const initializeCreateProduct = useSelector(getInitializeCreateProduct)

    const onChange = (e:any) => setIsShare(e.target.checked)
    const menuArr = ['IPhone', 'Mac', 'IPad', 'Apple Watch', 'AirPods', 'Accessories', 'Covers & Bags']

    const submit = async (values:ProductFormValuesType, { setSubmitting, resetForm }:FormCallbacksType) => {
        const data:ProductFormDataType = {
            ...values,
            price: +values.price,
            discount: +values.discount,
            total: +values.total,
            share: isShare
                ? {
                    title: values.titleShare,
                    description: values.descriptionShare
                }
                : null,
            avatar: {
                small: '',
                large: ''
            },
            photos: []
        }
        // delete data.small
        delete data.titleShare
        delete data.descriptionShare

        dispatch(sagaCreateProduct(data, props.successModalFunc as ()=>void, props.errorModalFunc))

        setSubmitting(false)
        resetForm()
    }

    const formValidate = (values:ProductFormValuesType) => {
        const errors:ProductFormErrorsType = {}
        if (!values.title) errors.title = 'This field is required'
        else if (values.title.length < 2) errors.title = 'Title is too short'
        if (!values.description) errors.description = 'This field is required'
        else if (values.description.length < 2) errors.description = 'Description is too short'
        if (!values.section) errors.section = 'This field is required'
        else if (menuArr.indexOf(values.section) == -1) errors.section = 'Not true section'

        if (!values.price) errors.price = 'This field is required'
        if (!values.discount && +values.discount != 0) errors.discount = 'This field is required'
        if (!values.total) errors.total = 'This field is required'

        if (isShare && !values.titleShare) errors.titleShare = 'This field is required'
        if (isShare && !values.descriptionShare) errors.descriptionShare = 'This field is required'

        return errors
    }

    return (
        
        <Formik onSubmit={submit}
            initialValues={{
                title: '',
                description: '',
                section: '',
                price: '',
                discount: '',
                total: '',
                titleShare: '',
                descriptionShare: '',
                isTop: false
            }}
            validate={formValidate}>
            {({ isSubmitting, errors, touched }) => (
                <Form>
                    {/* <Input touched={touched} errors={errors} name='small' type='file' placeholder="Оберіть фото" /> */}

                    <Input touched={touched} errors={errors} name="title" type="text" placeholder="Напишіть назву продукту" />
                    <Input touched={touched} errors={errors} name="description" type="text" placeholder="Напишіть опис продукту" />
                    <Input touched={touched} errors={errors} name="section" type="text" placeholder="Напишіть назву секції продукту" />
                    <Input touched={touched} errors={errors} name="price" type="number" placeholder="Напишіть ціну продукту" />
                    <Input touched={touched} errors={errors} name="discount" type="number" placeholder="Напишіть розмір знижки" />
                    <Input touched={touched} errors={errors} name="total" type="number" placeholder="Напишіть к-сть продуктів" />
                    <Checkbox touched={touched} errors={errors} name="isTop" type="checkbox" text="Вивести в топ" />
                    <CheckboxAntd onChange={onChange} checked={isShare}>isShare</CheckboxAntd>
                    {
                        isShare
                            ? <div>
                                <Input touched={touched} errors={errors} name="titleShare" type="text" placeholder="Напишіть назву акії" />
                                <Input touched={touched} errors={errors} name="descriptionShare" type="text" placeholder="Напишіть опис акції" />
                            </div>
                            : null
                    }
                    {
                        initializeCreateProduct
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
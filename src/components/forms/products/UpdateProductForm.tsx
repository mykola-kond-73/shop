import { Form, Formik } from 'formik'
import React, { FC, useEffect, useState } from 'react'
import { Checkbox, Input } from '../../../utils/form/FormComponents'
import { Checkbox as CheckboxAntd, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialUpdateProduct, getIsShareForCheckbox } from '../../../redux/selectors/productsSelector';
import { sagaUpdateProduct } from '../../../redux/saga/productsSaga';
import { setIsShareForCheckbox } from '../../../redux/reducers/productsReducer';
import { FormCallbacksType, FormPropsType, ProductFormDataType, ProductFormErrorsType, ProductFormValuesType } from '../../../types/components/formsTypes';
import { ProductType } from '../../../types/redux/reducers/productsTypes';
import { CreateProductType } from '../../../types/redux/sagas/productsSagasTypes';

export const UpdateProductForm: FC<PropsType> = props => {
    const dispatch = useDispatch()

    const initialUpdateProduct = useSelector(getInitialUpdateProduct)
    const isShare = useSelector(getIsShareForCheckbox)

    useEffect(() => {
        dispatch(setIsShareForCheckbox(Boolean(props.data.share)))
    }, [])


    function onChange(e: any) {
        dispatch(setIsShareForCheckbox(e.target.checked))
    }

    const submit = (values:ProductFormValuesType, { setSubmitting, resetForm }: FormCallbacksType) => {
        const data:ProductFormDataType = {
            ...values,
            price: Number(values.price),
            discount: Number(values.discount),
            total: Number(values.total),
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

        delete data.titleShare
        delete data.descriptionShare

        dispatch(sagaUpdateProduct(props.data._id, data, props.successModalFunc as (hash:string)=>void, props.errorModalFunc))

        setSubmitting(false)

    }

    const formValidate = (values:ProductFormValuesType) => {
        const errors:ProductFormErrorsType = {}
        if (!values.title) errors.title = 'This field is required'
        if (!values.description) errors.description = 'This field is required'
        if (!values.price) errors.price = 'This field is required'
        if (!values.discount) errors.discount = 'This field is required'
        if (!values.section) errors.section = 'This field is required'
        if (!values.total) errors.total = 'This field is required'
        if (isShare && !values.titleShare) errors.titleShare = 'This field is required'
        if (isShare && !values.descriptionShare) errors.descriptionShare = 'This field is required'

        return errors
    }

    return (
        <>
            <Formik onSubmit={submit}
                initialValues={{
                    title: props.data.title ? props.data.title : '',
                    description: props.data.description ? props.data.description : '',
                    section: props.data.section ? props.data.section : '',
                    price: props.data.price ? String(props.data.price) : '',
                    discount: props.data.discount ? String(props.data.discount) : '',
                    total: props.data.total ? String(props.data.total) : '',
                    isTop: props.data.isTop ? props.data.isTop : false,
                    titleShare: props.data.share ? props.data.share.title : '',
                    descriptionShare: props.data.share ? props.data.share.description : ''
                }}
                validate={formValidate}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
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
                            initialUpdateProduct
                                ? <Spin size="large" />
                                : <button type="submit" disabled={isSubmitting} style={{ padding: '15px', backgroundColor: '#1d6929', fontWeight: 500, fontSize: '1.1em' }}>
                                    Оновити
                                </button>
                        }
                    </Form>
                )}
            </Formik>
        </>
    )
}

type PropsType = FormPropsType&{data: ProductType}
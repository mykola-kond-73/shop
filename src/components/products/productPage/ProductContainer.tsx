import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { SagaGetProduct } from '../../../redux/saga/productsSaga'
import { getProductErrorData } from '../../../redux/selectors/errorSelector'
import { getProductData, getInitializeProduct } from '../../../redux/selectors/productsSelector'
import { ErrorMiddleware } from '../../error/ErrorMiddleware'
import { Load } from '../../fragments/Load/Load'
import { PopoverProductCount } from '../../fragments/popoverProductCount/PopoverProductCount'
import { Product } from './Product'

type ParamsType={
    productId:string
}

export const ProductContainer = () => {

    const product = useSelector(getProductData)
    const initialiae = useSelector(getInitializeProduct)
    const errorMessage = useSelector(getProductErrorData).message
    const {productId} = useParams<ParamsType>()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(SagaGetProduct(productId!))
    }, [])



    if (!initialiae && !errorMessage) {
        return <Load/>
    }
    return (
        <>
            <ErrorMiddleware page="product">

                {product && <Product title={product.title}
                    price={product.price}
                    discount={product.discount}
                    share={product.share}
                    total={product.total}
                    description={product.description}
                    photos={product.photos}
                    isTop={product.isTop}
                    id={product._id}
                />
                }
            </ErrorMiddleware>
        </>
    )
}

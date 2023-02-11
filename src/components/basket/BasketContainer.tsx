import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderedProducts } from '../../redux/selectors/basketSelector'
import { ProductForBasket } from './ProductForBasket'
import { cleanProductsList } from '../../redux/reducers/basketReducer'
import { getCustomerData } from '../../redux/selectors/customersSelector';
import { setVisibleModal } from '../../redux/reducers/customersReducer';
import { setVisibleModalOrder } from '../../redux/reducers/ordersReducer';
import { ModalCreateOrder } from '../fragments/modal/ModalCreateOrder';
import classes from './BasketContainer.module.css'
import classess from '../../css/colors.module.css'
import { CustomerType } from '../../types/redux/reducers/customersTypes'
import { Nullable } from '../../types/types'
import { BasketGetOrderedProductsSelectorType } from '../../types/redux/selectors/basketSelectorsTypes'

export const BasketContainer = () => {
    const dispatch = useDispatch()
    const orderedProducts:Nullable<BasketGetOrderedProductsSelectorType> = useSelector(getOrderedProducts)
    const customer:Nullable<CustomerType> = useSelector(getCustomerData)
    const clear = () => {
        dispatch(cleanProductsList())
    }
    const makeOrder = () => {
        if (!customer) dispatch(setVisibleModal(true))
        else {
            dispatch(setVisibleModalOrder(true))
        }
    }
    return (
        <div data-testid="basket-container" className={classes.root} style={orderedProducts?.fullProductsList && orderedProducts?.fullProductsList.length > 0 ? {}:{height: '100vh'}}>
            <ModalCreateOrder />
            {
                orderedProducts?.fullProductsList && orderedProducts?.fullProductsList.length > 0
                    ? <div className={classes.topBar}>
                        <h3>
                            Загальна ціна {orderedProducts.totalPrice}
                        </h3>
                        <div className={classes.buttons}>
                            <button onClick={makeOrder} className={`${classes.button} ${classess.buttonUpd}`}>Оформити Замовлення</button>
                            <button onClick={clear} className={`${classes.button} ${classess.buttonDel}`}>Очистити кошик</button>
                        </div>
                    </div>
                    : <h2 className={classes.clear}>
                        Кошик порожній
                    </h2>
            }
            <div className={classes.productsCont}>
                {
                    orderedProducts?.fullProductsList && orderedProducts?.fullProductsList.length > 0 && orderedProducts?.fullProductsList.map(elem => {
                        return (
                            <div key={elem.product._id} className={classes.products}>
                                <div>
                                    <ProductForBasket {...elem} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

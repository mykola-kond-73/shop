import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilterOrderData } from '../../../redux/reducers/ordersReducer'
import classes from './FilterBar.module.css'
import { ButtonFilter, CheckboxAll, CheckboxFilter, FieldId } from './Fragments'

export const FilterBarOrders:FC = () => {
    const dispatch = useDispatch()

    const [orderId, setOrderId] = useState('')
    const [clientId, setClientId] = useState('')
    const [isAll, setIsAll] = useState(false)

    const filterData = {
        orderId,
        clientId
    }
    const onChangeCheckboxAll = (e:any) => {
        setOrderId('')
        setClientId('')
        setIsAll(e.target.checked)
    }
    const onClick = () => dispatch(setFilterOrderData(isAll ? {} : filterData))

    return (
        <div className={classes.filterRoot}>
            <div>
                <FieldId defaultValue={orderId} value={orderId} placeholder="orderId" callback={setOrderId} disabled={isAll||Boolean(clientId)} />
                <FieldId defaultValue={clientId} value={clientId} placeholder="clientId" callback={setClientId} disabled={isAll||Boolean(orderId)} />
                <CheckboxAll class={classes.checkbox} checked={isAll} disabled={Boolean(orderId) || Boolean(clientId)} callback={onChangeCheckboxAll}/>  
                <div className={classes.searchButton}>
                    <ButtonFilter class={classes.button} callback={onClick}/>
                </div>
            </div>
        </div>
    )
}
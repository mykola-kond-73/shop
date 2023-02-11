import React, { FC, useState } from 'react'
import { Popover,InputNumber,message} from 'antd'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/reducers/basketReducer'
import classes from './PopoverProductCount.module.css'

type PropsType={
    productId:string
    total:number
}

export const PopoverProductCount:FC<PropsType> = props => {
    const dispatch=useDispatch()
    const [countProduct,setCountProduct]=useState(1)
    const onChange=(e:any)=>setCountProduct(e)
    
    const success = () => {
        message.success('Товар додано до вашого кошику!');
    }

    const onClick=()=>{
        const product={
            product:props.productId,
            count:countProduct
        }
        dispatch(addProduct(product))
        setCountProduct(1)

        success()
    }

    return (
        <Popover content={
            <button className={`${classes.button} ${props.total!=0?null:classes.buttonDisabled}`} onClick={onClick} disabled={props.total!=0?false:true}>Додати в кошик</button>
        } title={
            <InputNumber min={1} max={props.total!=0?props.total:0} value={props.total!=0?countProduct:0} defaultValue={1} onChange={onChange} disabled={props.total!=0?false:true} style={{width:'125px'}}/>
        }>
            <div data-testid="add-to-basket-button" className={classes.plus}>+</div>
        </Popover>
    )
}
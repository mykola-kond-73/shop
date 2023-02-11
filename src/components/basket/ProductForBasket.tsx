import React, { FC, SetStateAction, useState } from 'react'
import { InputNumber } from 'antd';
import { Description } from '../fragments/description/Description'
import { AvatarB } from '../fragments/avatar/Avatar'
import { useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from '../../redux/reducers/basketReducer';
import classes from './ProductForBasket.module.css'
import classess from '../../css/colors.module.css'
import { BasketModificateNewProductObjType } from '../../types/redux/selectors/basketSelectorsTypes';
import { ValueType } from 'rc-cascader/lib/Cascader';

export const ProductForBasket:FC<BasketModificateNewProductObjType> = props => {
    const dispatch = useDispatch()
    const [isUpdate, setIsUpdate] = useState(false)
    const [count, setCount] = useState(props.count)

    const remove = () => dispatch(removeProduct(props.product._id))
    const update = () => setIsUpdate(true)
    const onChange = (e:any) => setCount(e)
    const onClick = () => {
        const newProductData = {
            id: props.product._id,
            count
        }
        dispatch(updateProduct(newProductData))
        setIsUpdate(false)
    }
    return (
        <div className={classes.root}>
            <div className={classes.avatar}>
                <AvatarB avatar={props.product.avatar} />
            </div>
            <div>
                <Description discount={props.product.discount}
                    share={props.product.share}
                    total={props.product.total}
                    title={props.product.title}
                    price={props.product.price}
                    count={props.count}
                    isHome={true}
                    isTop={props.product.isTop}
                />
            </div>
            {
                isUpdate
                    ? <div data-testid="is-update-number-field">
                        <InputNumber min={1} max={props.product.total !== 0 ? props.product.total : 0} value={count} defaultValue={props.count} onChange={onChange} style={{height:'35px',position:'relative',top:'-3px'}} />
                        <button type="button" onClick={onClick} className={`${classes.button} ${classess.buttonUpd}`}>Оновити</button>
                    </div>
                    : <div data-testid="is-update-count" className={classes.count}>
                        кількість: {props.count}
                    </div>
            }
            {
                !isUpdate &&
                <div data-testid="button-group">
                    <button onClick={update} className={`${classes.button} ${classess.buttonUpd}`}>Оновити</button>
                    <button onClick={remove} className={`${classes.button} ${classess.buttonDel}`}>Видалити</button>
                </div>
            }

        </div>
    )
}
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Slider} from 'antd';
import classes from './FilterBar.module.css'
import { setFilterData } from '../../../redux/reducers/productsReducer';
import { ButtonFilter, CheckboxAll, CheckboxFilter, FieldId } from './Fragments';
import {productsFilterType} from '../../../types/redux/reducers/productsTypes'

export const FilterBar:FC<PropsType> = props => {
    const dispatch = useDispatch()

    const [textId, setTextId] = useState(props.filter?.textId?props.filter.textId:'')
    const [keyWord, setKeyWord] = useState(props.filter?.keyWord?props.filter.keyWord:'')
    const [isShare, setIsShare] = useState(props.filter?.isShare?props.filter.isShare:false)
    const [isTop, setIsTop] = useState(props.filter?.isTop?props.filter.isTop:false)
    const [isAll, setIsAll] = useState(false)
    const price:[[number,number],React.Dispatch<React.SetStateAction<[number,number]>>] = useState(props.filter?.price?props.filter.price:[0, 2000])

    const filterData:productsFilterType = {
        textId,
        keyWord,
        price:price[0],
        isShare,
        isTop
    }
    const onChangeSlider = (e:any) => price[1](e)
    const onChangeCheckboxAll = (e:any) => {
        setIsTop(false)
        setIsShare(false)
        setIsAll(e.target.checked)
    }
    const onClick = () =>dispatch(setFilterData(isAll ? {} : textId ? { textId } : filterData))

    return <form data-testid="filret-bar-component" className={classes.rootForm}>
        <div className={classes.mainBody}>
            {
                props.isCRM ?
                    <FieldId defaultValue={textId} value={textId} placeholder="id" callback={setTextId} disabled={isAll} />
                    : null
            }
            <FieldId defaultValue={keyWord} value={keyWord} placeholder="..." callback={setKeyWord} disabled={isAll || Boolean(textId)} />
            <div data-testid="filter-bar-slider">
                <Slider range defaultValue={price[0] || [0, 0]} step={10} max={5000} onChange={onChangeSlider} disabled={isAll || Boolean(textId)} />
            </div>
            <CheckboxFilter class={classes.checkbox} checked={isShare} disabled={isAll || Boolean(textId)} callback={setIsShare} text="Share" />
            <CheckboxFilter class={classes.checkbox} checked={isTop} disabled={isAll || Boolean(textId)} callback={setIsTop} text="TOP" />
            <CheckboxAll class={classes.checkbox} checked={isAll} disabled={Boolean(textId)} callback={onChangeCheckboxAll} />
        </div>
        <ButtonFilter class={classes.button} callback={onClick}/>
    </form>
}

type PropsType={
    isCRM:boolean,
    filter?:productsFilterType
}
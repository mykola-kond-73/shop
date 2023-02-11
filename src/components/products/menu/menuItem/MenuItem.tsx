import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import {setSection} from '../../../../redux/reducers/productsReducer'
import { Nullable } from '../../../../types/types'
import classes from './MenuItem.module.css'

type PropsType={
    section:Nullable<string>
}

export const Item:FC<PropsType> = props => {
    const dispatch=useDispatch()

    const [loading,setLoading]=useState(false)

    const onClick=async(section:Nullable<string>)=>{
        setLoading(true)
        dispatch(setSection(section))
        setLoading(false)
    }

    return <button data-testid="menu-item" onClick={() => onClick(props.section==='ALL'?null:props.section)}
        // type='text'
        className={classes.rootItem}
    >
        {props.section}
    </button>
}
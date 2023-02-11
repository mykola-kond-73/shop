import React, { FC } from 'react'
import classes from './IsTopTitle.module.css'

export const IsTopTitle:FC<PropsType> = props => {
    return <div className={classes.root}>
        <h3 className={classes.h3}>
            {props.title}
        </h3>
        {
            props.isTop
                ? <h4 className={classes.h4}>TOP</h4>
                : null
        }
    </div>
}

type PropsType={
    isTop:boolean
    title:string
}
import React, { FC } from 'react'
import classes from './Availability.module.css'

export const Availability:FC<PropsType> = props => {
    return (
        <>
            {
                props.total != 0
                    ?<div data-testid="greenCircle" className={classes.availability} style={{backgroundColor:'#3BC344'}}> </div>
                    :<div data-testid="redCircle" className={classes.availability} style={{backgroundColor:'#E11106'}}> </div>
            }
        </>
    )
}

type PropsType={
    total:number
}
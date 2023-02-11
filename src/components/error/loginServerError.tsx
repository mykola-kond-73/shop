import React, { FC } from 'react'

export const LoginServerError:FC<PropsType> = props => {
    return (
        <div>
            {props.message}
            {props.code&&props.code}
        </div>
    )
}

type PropsType={
    message:string
    code:number
}
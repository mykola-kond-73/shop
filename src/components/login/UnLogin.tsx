import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from 'antd';
import classes from './UnLogin.module.css'
import { LoginSagasConstantsEnum } from '../../types/redux/sagas/loginSagasTypes';

export const UnLogin = () => {
    const dispatch = useDispatch()
    function error() {
        Modal.error({
            title: 'Вам не вдалося вийти',
            content: 'бажаєте спробувати ще раз?',
            closable: true,
            onOk() {
                dispatch({ type: LoginSagasConstantsEnum.SAGA_DELETE_SESSION, error })
            }
        })

    }
    const onClick = () => {
        dispatch({ type: LoginSagasConstantsEnum.SAGA_DELETE_SESSION, error })
    }

    return (
        <div className={classes.rootdiv} onClick={onClick} >
            Exit
        </div>
    )
}
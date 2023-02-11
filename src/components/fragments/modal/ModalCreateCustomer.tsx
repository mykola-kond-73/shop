import React, { FC } from 'react'
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { sagaLoginCustomer } from '../../../redux/saga/loginSaga';
import { CustomerRegistration } from '../customerRegistration/customerRegistration';
import { getVisibleModal } from '../../../redux/selectors/customersSelector';
import { setVisibleModal } from '../../../redux/reducers/customersReducer';

export const ModalCreateCustomer:FC<PropsType> = props => {
    const dispatch = useDispatch()
    const visibleModal=useSelector(getVisibleModal)

    const success = (login:string,password:string):void => {
        Modal.success({
            content: 'Ви успішно зареєструвалися',
            onOk: async () => {
                dispatch(sagaLoginCustomer(login,password))
            }
        });
    }
    const error = () => {
        Modal.error({
            content: 'Нажаль у вас не вийшло зареєструватися. Можливо ви використали email чи номер телефону який зайнятий інший користувачемі. \nБажаєте спробувати ще раз?',
            closable: true,
            onOk() {
                dispatch(setVisibleModal(true))
            }
        });
    }

    return (
        <>
            <Modal title="Зареєструйтеся щоб мати змогу замовити наші товари"
                open={visibleModal}
                onCancel={() =>dispatch(setVisibleModal(false))}
                footer={null}
            >
                <CustomerRegistration 
                    successModalFunc={success}
                    errorModalFunc={error}
                />
            </Modal>
        </>
    )
}

type PropsType={}
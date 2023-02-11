import React from 'react'
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleModalOrder } from '../../../redux/selectors/ordersSelector';
import { setVisibleModalOrder } from '../../../redux/reducers/ordersReducer';
import { CreateOrder } from '../../forms/createOrder/CreateOrder';

export const ModalCreateOrder = () => {
    const dispatch = useDispatch()
    const visibleModal = useSelector(getVisibleModalOrder)

    const success = () => {
        Modal.success({
            content: 'Ви успішно зареєстрували замовлення. Заждіть докм наші менеджери зв\'яжуться з вами'
        });
    }
    const error = () => {
        Modal.error({
            content: 'Нажаль у вас не вийшло зараєструвати замовлення. \n Бажаєте спробувати ще раз?',
            closable: true,
            onOk() {
                dispatch(setVisibleModalOrder(true))
            }
        });
    }

    return (
        <Modal title="Зареєструйтеся щоб мати змогу замовити наші товари"
            open={visibleModal}
            onCancel={() => dispatch(setVisibleModalOrder(false))}
            footer={null}
        >
            <CreateOrder successModalFunc={success}
                errorModalFunc={error}
            />
        </Modal>
    )
}
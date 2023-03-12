import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrderSaga, getOrdersDataSaga } from '../../../../redux/saga/ordersSaga'
import { getFilterOrderData, getInitialDeleteOrder, getInitializeOrders, getInitialUpdateOrder, getOrderModData, getPage, getSize, getTotalCount } from '../../../../redux/selectors/ordersSelector'
import { Table, Space, Button, Spin, Popconfirm } from 'antd';
import { UpdateCreateOrder } from '../../../forms/createOrder/UpdateCreateOrder';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { errorModal, successModal } from '../../../../utils/modal'
import { FilterBarOrders } from '../../../fragments/filterBar/FilterBarOrders';
import classes from '../../CRM.module.css'

const { Column } = Table;

export const OrdersPage = () => {
    const ordersData = useSelector(getOrderModData)
    const initializeOrders = useSelector(getInitializeOrders)
    const page = Number(useSelector(getPage))
    const size = Number(useSelector(getSize))
    const totalCount = Number(useSelector(getTotalCount))
    const initialDeleteOrder = useSelector(getInitialDeleteOrder)
    const initialUpdateOrder = useSelector(getInitialUpdateOrder)

    const filterOrderData = useSelector(getFilterOrderData)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrdersDataSaga(page, size, filterOrderData))
    }, [filterOrderData])

    const remove = (orderId: string) =>{
        dispatch(deleteOrderSaga(
            orderId,
            successModal('Замовлення успішно видалено'),
            errorModal('Нажаль у вас не вийшло видалити замовлення. \n Бажаєте спробувати ще раз?'),
            page,
            size,
            filterOrderData
        ))
    }

    if (initializeOrders || !ordersData) {
        return <Spin size="large" />
    } else {
        return (
            <>
                <FilterBarOrders />
                <Table
                    className={classes.antTable}
                    rowKey={(record) => record._id} 
                    dataSource={ordersData} 
                    pagination={{ pageSize: size, total: totalCount, current: page, onChange: (page, size) => dispatch(getOrdersDataSaga(page, size, filterOrderData)) }} 
                >
                    <Column title="id" dataIndex="_id" key="_id" />
                    <Column title="comment" dataIndex="comment" key="comment" />
                    <Column title="customer" dataIndex="customer" key="customer" />
                    <Column title="product" dataIndex="product" key="product" />
                    <Column title="count" dataIndex="count" key="count" />
                    <Column
                        title="action"
                        key="action"
                        render={
                            (text, record) => {
                                return (
                                    <Space size="middle">
                                        {
                                            initialUpdateOrder
                                                ? <Spin size="default" />
                                                : <Popconfirm
                                                    icon={null}
                                                    title={<UpdateCreateOrder role="update"
                                                        data={text}
                                                        successUpdateModalFunc={successModal('Замовлення успішно оновлене')}
                                                        errorUpdateModalFunc={errorModal('Нажаль у вас не вийшло оновити замовлення. \n Бажаєте спробувати ще раз?')}
                                                    />}
                                                    // onConfirm={}
                                                    // onCancel={}
                                                    okText={null}
                                                    okType={undefined}
                                                    cancelText="Скасувати"
                                                >
                                                    <Button type="primary" >Update</Button>
                                                </Popconfirm>
                                        }

                                        {
                                            initialDeleteOrder
                                                ? <Spin size="default" />
                                                : <Popconfirm
                                                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                                    title="Ви справді хочете видалити замовлення"
                                                    onConfirm={() => remove(text.id)}
                                                    // onCancel={}
                                                    okText="Так"
                                                    cancelText="Ні"
                                                >
                                                    <Button type="primary" danger>Delete</Button>
                                                </Popconfirm>
                                        }

                                    </Space>
                                )
                            }
                        }
                    />
                </Table>
                {
                    <Popconfirm
                        icon={null}
                        title={<UpdateCreateOrder role="create"
                            successCreateModalFunc={successModal('Замовлення успішно зареєстровано')}
                            errorCreateModalFunc={errorModal('Нажаль у вас не вийшло зареєструвати замовлення. \n Бажаєте спробувати ще раз?')}
                        />}
                        // onConfirm={}
                        // onCancel={}
                        okText={null}
                        okType={undefined}
                        cancelText="Скасувати"
                    >
                        <Button type="primary" style={{ backgroundColor: '#1d6929', fontWeight: 500, fontSize: '1.2em' }}>+</Button>
                    </Popconfirm>
                }
            </>
        )
    }
}
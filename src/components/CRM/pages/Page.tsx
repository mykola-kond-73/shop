import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Table, Space, Button, Spin, Popconfirm, Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { UpdateCreateOrder } from '../../forms/createOrder/UpdateCreateOrder';
import { errorModal, successModal } from '../../../utils/modal';
import { PersonalDataForm } from '../../forms/personalDataForm/PersonalDataForm';
import { StaffSagasConstantsType } from '../../../types/redux/sagas/staffSagasTypes';
import { CustomersSagasConstantsEnum } from '../../../types/redux/sagas/CustomersSagasTypes';
import { CustomerType } from '../../../types/redux/reducers/customersTypes';
import { StaffDataType } from '../../../types/redux/reducers/staffTypes';
import { AnyAction } from 'redux';

const { Column } = Table;

const Orders: FC<OrdersPropsType> = props => {
    return (
        <UpdateCreateOrder role="update"
            data={props.data}
            successUpdateModalFunc={successModal('Замовлення успішно оновлене')}
            errorUpdateModalFunc={errorModal('Нажаль у вас не вийшло оновити замовлення. \n Бажаєте спробувати ще раз?')}
        />
    )
}

export const Page: FC<PagePropsType> = props => {
    const dispatch = useDispatch()

    const success = async (hash: string) => {
        Modal.success({
            content: 'Ви успішно оновили дані',
            onOk: async () => {
                props.isStaff
                    ? dispatch({ type: StaffSagasConstantsType.SAGA_GET_STAFF, hash })
                    : dispatch({ type: CustomersSagasConstantsEnum.SAGA_GET_CUSTOMER, hash })
            }
        });
    }
    const error = () => {
        Modal.error({
            content: 'Нажаль у вас не вийшло оновити дані. Можливо ви використали email чи номер телефону який зайнятий інший користувачемі. \nБажаєте спробувати ще раз? ',
            closable: true,
            onOk() {
            }
        });
    }
    const Customers:FC<CustomersPropsType> = props => {
        return (
            < PersonalDataForm successModalFunc={success}
                errorModalFunc={error}
                data={props.data as CustomerType} 
            />
        )
    }

    useEffect(() => {
        dispatch(props.callback(props.page, props.size))
    }, [props.total])

    const remove = (id:string) => dispatch(props.removeCallback(id, successModal('Замовлення успішно видалено'), errorModal('Нажаль у вас не вийшло видалити замовлення. \n Бажаєте спробувати ще раз?'), props.page, props.size))

    let column = null
    if (props.data) column = Object.keys(props.data[0])

    if (props.initialize || !props.data) {
        return <Spin size="large" />
    }
    return (
        <>
            <Table dataSource={props.data} pagination={{ pageSize: props.size, total: props.total, current: props.page, onChange: (page, size) => dispatch(props.callback(page, size)) }} >
                {
                    column && column.map(elem => {
                        return (
                            <Column title={elem} dataIndex={elem} key="elem" />
                        )
                    })
                }
                <Column
                    title="Action"
                    key="action"
                    render={
                        (text, record) => {
                            return (
                                <Space size="middle">
                                    {
                                        props.initialUpdate
                                            ? <Spin size="default" />
                                            : <Popconfirm
                                                icon={null}
                                                title={Orders(text)}
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
                                        props.initialDelete
                                            ? <Spin size="default" />
                                            : <Popconfirm
                                                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                                title="Ви справді хочете видалити замовлення"
                                                onConfirm={() => remove(text.id)}
                                                // onCancel={}
                                                okText="Так"
                                                cancelText="Ні"
                                            >
                                                {/*
                                                    //@ts-ignore */}
                                                <Button type="danger" >Delete</Button>
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
                    title={
                        <UpdateCreateOrder role="create"
                            successCreateModalFunc={successModal('Замовлення успішно зареєстровано')}
                            errorCreateModalFunc={errorModal('Нажаль у вас не вийшло зареєструвати замовлення. \n Бажаєте спробувати ще раз?')}
                        />
                    }
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

type PagePropsType={
    isStaff:boolean
    callback:(page:number,size:number)=>AnyAction
    removeCallback:(id:string,success:()=>void,error:()=>void,page:number,size:number)=>AnyAction
    page:number
    size:number
    total:number
    initialUpdate:boolean
    initialDelete:boolean
    initialize:boolean
    data:any
}

type CustomersPropsType={
    data:CustomerType | StaffDataType
}

type OrdersPropsType = {
    data: {
        id:string
        customer: string
        product: string
        count: number
        comment: string
    }
}
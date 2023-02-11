import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Button, Spin, Popconfirm } from 'antd';
import { getPage, getSize, getTotal, getCustomersMOdData, getDeleteCustomerInitialize, getInitializeCustomers, getUpdateCustomerInitialize, getFilterData } from '../../../../redux/selectors/customersSelector';
import { sagaDeleteCustomer, sagaGetCustomers } from '../../../../redux/saga/customersSaga';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { PersonalDataForm } from '../../../forms/personalDataForm/PersonalDataForm';
import { errorModal, successModal } from '../../../../utils/modal'
import { CreateCustomerForm } from '../../../forms/createCustomer/CreateCustomerForm';
import { FilterBarCustomers } from '../../../fragments/filterBar/FilterBarCustomers';
import classes from '../../CRM.module.css'
import { MessageArgInSuccessFunctionType } from '../../../../types/components/types';

const { Column } = Table;

export const CustomersPage = () => {
    const customersModData = useSelector(getCustomersMOdData)
    const initializeCustomers = useSelector(getInitializeCustomers)
    const page = Number(useSelector(getPage))
    const size = Number(useSelector(getSize))
    const total = Number(useSelector(getTotal))
    const initialUpdateCustomer = useSelector(getUpdateCustomerInitialize)
    const initialDeleteCustomer = useSelector(getDeleteCustomerInitialize)
    const filter=useSelector(getFilterData)

    const dispatch = useDispatch()

    const success = (message:MessageArgInSuccessFunctionType) =>()=> {
        message()
        dispatch(sagaGetCustomers(page, size,filter))
    }
    const error = () => errorModal('Нажаль у вас не вийшло оновити дані. Можливо ви використали email чи номер телефону який зайнятий інший користувачемі. \nБажаєте спробувати ще раз? ')()

    useEffect(() => {
        dispatch(sagaGetCustomers(page, size,filter))
    }, [filter])

    const successCreate = () => {
        successModal('Ви успішно зареєстрували користувача')()
        dispatch(sagaGetCustomers(page, size,filter))
    }
    const errorCreate = () => errorModal('Нажаль у вас не вийшло зареєструвати користувача')()

    const remove = (id:string) => dispatch(sagaDeleteCustomer(id, success(successModal('Ви успішно видалили користувача')), errorModal('Нажаль у вас не вийшло видалити дані користувача')))

    if (initializeCustomers || !customersModData) {
        return <Spin size="large" />
    }
    return (
        <>
            <FilterBarCustomers/>
            <Table className={classes.antTable} rowKey={(record)=>record._id} dataSource={customersModData} pagination={{pageSize: size, total: total,current: page, onChange: (page, size) => dispatch(sagaGetCustomers(page, size,filter)) }} >
                <Column title="id" dataIndex="_id" key="_id" />
                <Column title="firstname" dataIndex="firstname" key="firstname" />
                <Column title="lastname" dataIndex="lastname" key="lastname" />
                <Column title="country" dataIndex="country" key="country" />
                <Column title="city" dataIndex="city" key="city" />
                <Column title="phone" dataIndex="phone" key="phone" />
                <Column title="email" dataIndex="email" key="email" />
                <Column
                    title="action"
                    key="action"
                    render={
                        (text, record) => {
                            const newText = {
                                ...text,
                                name: {
                                    firstname: text.firstname,
                                    lastname: text.lastname
                                }
                            }
                            delete newText.firstname
                            delete newText.lastname

                            return (
                                <Space size="middle">
                                    {
                                        initialUpdateCustomer
                                            ? <Spin size="default" />
                                            : <Popconfirm
                                                icon={null}
                                                title={< PersonalDataForm successModalFunc={success(successModal('Ви успішно оновили дані користувача'))}
                                                    errorModalFunc={error}

                                                    // isStaff={false}
                                                    data={newText}
                                                />
                                                }
                                                okText={null}
                                                okType={undefined}
                                                cancelText="Скасувати"
                                            >
                                                <Button type="primary" >Update</Button>
                                            </Popconfirm>
                                    }

                                    {
                                        initialDeleteCustomer
                                            ? <Spin size="default" />
                                            : <Popconfirm
                                                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                                title="Ви справді хочете видалити користувача"
                                                onConfirm={() => remove(text._id)}
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
                    title={
                        <CreateCustomerForm
                            successModalFunc={successCreate}
                            errorModalFunc={errorCreate}
                        />
                        
                    }
                   
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
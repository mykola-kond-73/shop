import React, { useEffect } from 'react'
import { Table, Space, Button, Spin, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getInitializeStaffs, getStaffs, getPage, getSize, getTotal, getUpdateStaffInitialize, getDeleteStaffInitialize, getStaffData } from '../../../../redux/selectors/staffesSelector';
import { errorModal, successModal } from '../../../../utils/modal';
import { sagaDeleteStaff, sagaGetStaffs } from '../../../../redux/saga/staffSaga';
import { CreateStaffForm } from '../../../forms/createStaff/CreateStaffForm';
import { UpdateStaffForm } from '../../../forms/createStaff/UpdateStaffForm';
import { FilterBarStaffs } from '../../../fragments/filterBar/FilterBarStaffs';
import { getFilter } from '../../../../redux/selectors/staffesSelector';
import classes from '../../CRM.module.css'
import { MessageArgInSuccessFunctionType } from '../../../../types/components/types';

const { Column } = Table;

export const StaffsPage = () => {
    const dispatch = useDispatch()

    const staffsData = useSelector(getStaffs)
    const staffData = useSelector(getStaffData)
    const initializeStaffs = useSelector(getInitializeStaffs)
    const page = Number(useSelector(getPage))
    const size = Number(useSelector(getSize))
    const total = Number(useSelector(getTotal))
    const initialUpdateStaff = useSelector(getUpdateStaffInitialize)
    const initializeDeleteStaff = useSelector(getDeleteStaffInitialize)
    const filter = useSelector(getFilter)

    const success = (message: MessageArgInSuccessFunctionType) => () => {
        message()
        dispatch(sagaGetStaffs(page, size, filter))
    }
    const error = () => errorModal('Нажаль у вас не вийшло оновити дані. Можливо ви використали email чи номер телефону який зайнятий іншм працівником. \nБажаєте спробувати ще раз? ')()

    const successCreate = () => {
        successModal('Ви успішно зареєстрували працівника')()
        dispatch(sagaGetStaffs(page, size, filter))
    }
    const errorCreate = () => errorModal('Нажаль у вас не вийшло зареєструвати користувача')()

    const remove = (id: string) => dispatch(sagaDeleteStaff(id, success(successModal('Ви успішно видалили працівника')), errorModal('Нажаль у вас не вийшло видалити дані працівника')))

    useEffect(() => {
        dispatch(sagaGetStaffs(page, size, filter))
    }, [filter])

    if (initializeStaffs || !staffsData || !staffData) {
        return <Spin size="large" />
    } else {
        return (
            <>
                <FilterBarStaffs />
                <Table className={classes.antTable} rowKey={(record)=>record._id} dataSource={staffsData} pagination={{ pageSize: size, total: total, current: page, onChange: (page, size) => dispatch(sagaGetStaffs(page, size, filter)) }} >
                    <Column title="id" dataIndex="_id" key="_id" />
                    <Column title="firstname" dataIndex="firstname" key="firstname" />
                    <Column title="lastname" dataIndex="lastname" key="lastname" />
                    <Column title="email" dataIndex="email" key="email" />
                    <Column title="phone" dataIndex="phone" key="phone" />
                    <Column title="role" dataIndex="role" key="role" />
                    <Column title="isAdmin" dataIndex="isAdmin" key="isAdmin" />

                    {
                        staffData.isAdmin &&
                        <Column
                            title="action"
                            key="action"
                            render={
                                (text, record) => {
                                    const newText = { ...text }
                                    newText.isAdmin = Boolean(newText.isAdmin)
                                    return (
                                        <Space size="middle">
                                            {
                                                initialUpdateStaff
                                                    ? <Spin size="default" />
                                                    : <Popconfirm
                                                        icon={null}
                                                        title={< UpdateStaffForm
                                                            successModalFunc={success(successModal('Ви успішно оновили дані працівника'))}
                                                            errorModalFunc={error}
                                                            data={newText}
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
                                                initializeDeleteStaff
                                                    ? <Spin size="default" />
                                                    : <Popconfirm
                                                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                                        title="Ви справді хочете видалити працівника"
                                                        onConfirm={() => remove(text._id)}
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

                    }

                </Table>
                {
                    staffData.isAdmin &&
                    <Popconfirm
                        icon={null}
                        title={<CreateStaffForm
                            successModalFunc={successCreate}
                            errorModalFunc={errorCreate}
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
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Button, Spin, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { errorModal, successModal } from '../../../../utils/modal'
import { sagaDeleteProduct, SagaGetproducts } from '../../../../redux/saga/productsSaga';
import { getTotalCount, getFilter, getInitialize, getPageCount, getPageSize, getSection, getInitialUpdateProduct, getInitialDeleteProduct, getProductsModData } from '../../../../redux/selectors/productsSelector';
import { UpdateProductForm } from '../../../forms/products/UpdateProductForm';
import { CreateProductForm } from '../../../forms/products/CreateProductForm';
import { FilterBar } from '../../../fragments/filterBar/FilterBar';
import './ProductsPage.css'
import classess from '../../CRM.module.css'
import { MessageArgInSuccessFunctionType } from '../../../../types/components/types';

const { Column } = Table;

export const ProductsPage = () => {
    const dispatch = useDispatch()

    const productsData = useSelector(getProductsModData)
    const initialize = useSelector(getInitialize)
    const page = Number(useSelector(getPageCount))
    const size = Number(useSelector(getPageSize))
    const total = Number(useSelector(getTotalCount))
    const section = useSelector(getSection)
    const filter = useSelector(getFilter)
    const initialUpdateProduct = useSelector(getInitialUpdateProduct)
    const initialDeleteProduct = useSelector(getInitialDeleteProduct)

    const success = (message:MessageArgInSuccessFunctionType) => () => {
        message()
        dispatch(SagaGetproducts(page, size, section,JSON.stringify(filter)))
    }
    const error = () => errorModal('Нажаль у вас не вийшло оновити дані. Можливо ви використали email чи номер телефону який зайнятий іншм працівником. \nБажаєте спробувати ще раз? ')()

    const successCreate = () => {
        successModal('Ви успішно створили продукт')()
        dispatch(SagaGetproducts(page, size, section,JSON.stringify(filter)))
    }
    const errorCreate = () => errorModal('Нажаль у вас не вийшло створити продукт')()

    useEffect(() => {
        dispatch(SagaGetproducts(page, size, section,JSON.stringify(filter)))
    }, [filter,page])
    
    const remove=(id:string)=>dispatch(sagaDeleteProduct(id,success(successModal('Ви успішно видалили продукт')), errorModal('Нажаль у вас не вийшло видалити дані продукту')))
    if (!initialize || !productsData) {
        return <Spin size="large" />
    }
    return (
        <>
        
            <FilterBar isCRM={true}/>
            <Table className={classess.antTable} rowKey={(record)=>record._id} dataSource={productsData} pagination={{ pageSize: size, total: total,current:page, onChange: (page, size) => dispatch(SagaGetproducts(page, size, section,JSON.stringify(filter))) }} >
                <Column title="id" dataIndex="_id" key="_id" />
                <Column title="title" dataIndex="title" key="title" />
                <Column title="description" dataIndex="description" key="description" />
                <Column title="section" dataIndex="section" key="section" />
                <Column title="price" dataIndex="price" key="price" />
                <Column title="discount" dataIndex="discount" key="discount" />
                <Column title="cost" dataIndex="cost" key="cost" />
                <Column title="total" dataIndex="total" key="total" />
                <Column title="isTop" dataIndex="isTop" key="isTop" />
                <Column title="share" dataIndex="share" key="share" />
                
                <Column
                    title="action"
                    key="action"
                    render={
                        (text, record) => {
                            const [title,description] = text.share.split('\n')
                            const newText={
                                ...text,
                                isTop:Boolean(text.isTop),
                                share:Boolean(text.share)
                                    ?{title,description}
                                    :Boolean(text.share)
                            }
                            delete newText.cost
                            return (
                                <Space size="middle">
                                    {
                                        initialUpdateProduct
                                            ? <Spin size="default" />
                                            : <Popconfirm
                                                icon={null}
                                                title={
                                                    < UpdateProductForm 
                                                        successModalFunc={success(successModal('Ви успішно оновили дані продукту'))}
                                                        errorModalFunc={error}
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
                                        initialDeleteProduct
                                            ? <Spin size="default" />
                                            : <Popconfirm
                                                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                                title="Ви справді хочете видалити продукт"
                                                onConfirm={() => remove(text._id)}
                                                okText="Так"
                                                cancelText="Ні"
                                            >
                                                <Button type="primary"danger >Delete</Button>
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
                        <CreateProductForm
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
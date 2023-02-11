import React from 'react'
import { Tabs } from 'antd'
import {  useSelector } from 'react-redux';
import { getStaffData } from '../../redux/selectors/staffesSelector';
import { getIsAuth } from '../../redux/selectors/loginSelector';
import { Navigate } from 'react-router';
import { OrdersPage } from './pages/orders/OrdersPage';
import { ErrorMiddleware } from '../error/ErrorMiddleware';
import { CustomersPage } from './pages/customers/CustomersPage';
import { StaffsPage } from './pages/staffs/StaffsPage';
import { ProductsPage } from './pages/products/ProductsPage';

export const CRMContainer = () => {
    const staffData=useSelector(getStaffData)
    const isAuth=useSelector(getIsAuth)

    const callback=(key:string)=> {}

    if(!staffData || !isAuth){
        return <Navigate to="/products"/>
    }else{
        return (
            <div>
                <Tabs defaultActiveKey="1" 
                    onChange={callback}
                    items={[
                        {
                            label: 'Products',
                            key: '1',
                            children: <ErrorMiddleware page="products"><ProductsPage/></ErrorMiddleware>
                        },
                        {
                            label: 'Orders',
                            key: '2',
                            children: <ErrorMiddleware page="orders"><OrdersPage/></ErrorMiddleware>
                        },
                        {
                            label: 'Customers',
                            key: '3',
                            children: <ErrorMiddleware page="customers"><CustomersPage/></ErrorMiddleware>
                        },
                        {
                            label: 'Staffs',
                            key: '4',
                            children: <ErrorMiddleware page="staffs"><StaffsPage/></ErrorMiddleware>
                        }
                    ]}
                />   
            </div>
        )
    }
    
}
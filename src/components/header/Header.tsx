import React from 'react'
import { NavLink } from 'react-router-dom'
import { createFromIconfontCN } from '@ant-design/icons';
import classes from './Header.module.css'
import classess from '../login/UnLogin.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getStaffData } from '../../redux/selectors/staffesSelector';
import { getCustomerData, getVisibleModal } from '../../redux/selectors/customersSelector';
import { getIsAuth } from '../../redux/selectors/loginSelector';
import { UnLogin } from '../login/UnLogin';
import { HomeOutlined } from '@ant-design/icons';
import { ModalCreateCustomer } from '../fragments/modal/ModalCreateCustomer';
import { setVisibleModal } from '../../redux/reducers/customersReducer';

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js'
    ]
});

export const Header = () => {
    const dispatch = useDispatch()
    const staff = useSelector(getStaffData)
    const customer = useSelector(getCustomerData)
    const isAuth = useSelector(getIsAuth)
    const visibleModal = useSelector(getVisibleModal)
    
    return <div className={classes.rootHeader}>
        {visibleModal && <ModalCreateCustomer />}


        <NavLink to="/products" className={(isActive)=>!isActive?classes.active:classes.links}>
            <HomeOutlined />
        </NavLink>

        <NavLink to="/basket" className={(isActive)=>!isActive?classes.active:classes.links} >
            <IconFont type="icon-shoppingcart" />
        </NavLink>
        {
            isAuth && customer
                ? <NavLink to={`/customer/${customer._id}`} className={(isActive)=>!isActive?classes.active:classes.links}>
                    Personal Office
                </NavLink>
                : localStorage.getItem('token') && staff
                    ? <NavLink to={`/staff/${staff._id}`} className={(isActive)=>!isActive?classes.active:classes.links}>
                        Personal Office
                    </NavLink>
                    : false
        }
        {
            isAuth && staff
                ? <NavLink to="/crm" className={(isActive)=>!isActive?classes.active:classes.links} >
                    CRM
                </NavLink>
                : false
        }
        {!staff && <div className={classess.rootdiv} onClick={() => dispatch(setVisibleModal(true))}>Зареєструватися</div>}

        {
            isAuth && (staff || customer)
                ? <UnLogin />
                : <NavLink to="/login" className={(isActive)=>!isActive?classes.active:classes.links}>
                    Login
                </NavLink>
        }

    </div>
}
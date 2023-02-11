import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setStaffsFilterData } from '../../../redux/reducers/staffReducer'
import { StaffFilterType } from '../../../types/redux/reducers/staffTypes'
import classes from './FilterBar.module.css'
import { ButtonFilter, CheckboxAll, CheckboxFilter, FieldId } from './Fragments'

export const FilterBarStaffs = () => {
    const dispatch = useDispatch()

    const [staffId, setStaffId] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAll, setIsAll] = useState(false)

    const filterData = {
        staffId,
        name,
        role,
        phone,
        email,
        isAdmin
    }

    const onChangeCheckboxAll = (e:any) => {
        setStaffId('')
        setName('')
        setRole('')
        setPhone('')
        setEmail('')
        setIsAdmin(false)
        setIsAll(e.target.checked)
    }

    const onClick = () =>dispatch(setStaffsFilterData(isAll ? {} : staffId ? { staffId } : filterData as StaffFilterType)) 

    return (
        <div className={classes.filterRoot}>
            <div>
                <FieldId defaultValue={staffId} value={staffId} placeholder="staffId" callback={setStaffId} disabled={isAll} />
                <FieldId defaultValue={name} value={name} placeholder="name" callback={setName} disabled={isAll || Boolean(staffId)} />
                <FieldId defaultValue={role} value={role} placeholder="role" callback={setRole} disabled={isAll || Boolean(staffId)} />
                <FieldId defaultValue={phone} value={phone} placeholder="phone" callback={setPhone} disabled={isAll || Boolean(staffId)} />
                <FieldId defaultValue={email} value={email} placeholder="email" callback={setEmail} disabled={isAll || Boolean(staffId)} />

                <CheckboxFilter class={classes.checkbox} checked={isAdmin} disabled={isAll || Boolean(staffId)} callback={setIsAdmin} text="is Admin" />
                <CheckboxAll class={classes.checkbox} checked={isAll} disabled={Boolean(staffId)} callback={onChangeCheckboxAll} />
                <div className={classes.searchButton}>
                    <ButtonFilter class={classes.button} callback={onClick} />
                </div>
            </div>
        </div>
    )
}
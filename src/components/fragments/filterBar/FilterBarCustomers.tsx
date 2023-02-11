import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilterCustData } from '../../../redux/reducers/customersReducer'
import classes from './FilterBar.module.css'
import { ButtonFilter, CheckboxAll,FieldId } from './Fragments'

export const FilterBarCustomers = () => {
    const dispatch = useDispatch()

    const [customerId, setCustomerId] = useState('')
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [isAll, setIsAll] = useState(false)

    const filterData = {
        customerId,
        name,
        country,
        city,
        phone,
        email
    }

    const onChangeCheckboxAll = (e:any) => {
        setCustomerId('')
        setName('')
        setCountry('')
        setCity('')
        setPhone('')
        setEmail('')
        setIsAll(e.target.checked)
    }

    const onClick = () => dispatch(setFilterCustData(isAll ? {} : customerId ? { customerId } : filterData))

    return (
        <div className={classes.filterRoot}>
            <div>
                <FieldId defaultValue={customerId} value={customerId} placeholder="customerId" callback={setCustomerId} disabled={isAll} />
                <FieldId defaultValue={name} value={name} placeholder="name" callback={setName} disabled={isAll || Boolean(customerId)} />
                <FieldId defaultValue={country} value={country} placeholder="country" callback={setCountry} disabled={isAll || Boolean(customerId)} />
                <FieldId defaultValue={city} value={city} placeholder="city" callback={setCity} disabled={isAll || Boolean(customerId)} />
                <FieldId defaultValue={phone} value={phone} placeholder="phone" callback={setPhone} disabled={isAll || Boolean(customerId)} />
                <FieldId defaultValue={email} value={email} placeholder="email" callback={setEmail} disabled={isAll || Boolean(customerId)} />

                <CheckboxAll class={classes.checkbox} checked={isAll} disabled={Boolean(customerId)} callback={onChangeCheckboxAll} />
                <div className={classes.searchButton}>
                    <ButtonFilter class={classes.button} callback={onClick} />
                </div>
            </div>
        </div>
    )
}
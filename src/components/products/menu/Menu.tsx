import React, { useState } from 'react'
import { Item } from './menuItem/MenuItem'
import classes from './Menu.module.css'

export const Menu=()=>{
    const [section]=useState(['ALL','IPhone','Mac','IPad','Apple Watch','AirPods','Accessories','Covers & Bags'])

    return <div data-testid="menu-component" className={classes.root}>
        {section.map(elem=> <Item key={elem} section={elem}/>)}
    </div>
}
import React from 'react'
import classes from './Footer.module.css'

export const Footer=()=>{
    return <div className={classes.rootFooter}>
        <div className={classes.contactInformationContainer}>
            <p>
                Контактна інформація:
            </p>
            <div className={classes.contactInformation}>
                <p>
                    Україна м.Київ вулиця Кубанської України 45
                </p>
                <a type="tel">
                    телефон: +(380) 99 000 0000
                </a>
                <a type="email">
                    e-mail: fff@gmail.com
                </a>
            </div>
        </div>
      
        <div className={classes.roots}>
            c 2021 jjjjjjjjjjj
        </div>
    </div>
}
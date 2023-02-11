import React, { FC } from 'react'
import { ProductType } from '../../../types/redux/reducers/productsTypes'
import { Availability } from '../availability/Availability'
import { IsTopTitle } from '../isTopTitle/IsTopTitle'
import classes from './Description.module.css'

export const Description:FC<PropsType> = props => {
    const interest = 0.01 * props.discount
    let cost = (props.price - props.price * interest)
    if (props.count) cost *= props.count

    return (
        <div data-testid="description-component" className={classes.root}>
            <div>
                <div className={classes.title}>
                    {
                        props.title
                            ? <IsTopTitle data-testid="is-top-title-component" title={props.title} isTop={props.isTop} />
                            : null
                    }
                </div>
                <div className={!props.isHome?classes.content:''}>
                    <div>
                        <div>
                            Ціна: {props.price}
                        </div>
                        <div>
                            Знижка: {props.discount}%
                        </div>
                        <div>
                            Вартість: {cost}
                        </div>
                        {
                            props.total
                                ? <div>На складі: {props.total}шт</div>
                                : null
                        }
                    </div>
                    <div>
                        Наявність <Availability total={props.total} />
                    </div>
                </div>
            </div>
            {
                props.description
                    ? <div className={classes.description}>
                        {props.description}
                    </div>
                    : null
            }
            {
                props.share
                    ? <div data-testid="share-block">
                        <h4 className={classes.share}>
                            {props.share.title}
                        </h4>
                        {
                            props.share.description && !props.isHome
                                ? <p className={classes.shareDescription}>
                                    {props.share.description}
                                </p>
                                : null
                        }
                    </div>
                    : null
            }
        </div>
    )
}

type PropsType=Omit<ProductType,'_id'|'photos'|'avatar'|'section'|'title'|'description'>&{isHome:boolean,count?:number,description?:string,title?:string}
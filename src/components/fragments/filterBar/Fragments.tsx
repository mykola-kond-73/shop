import { Button, Checkbox, Input } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import React, { FC } from 'react'

export const FieldId: FC<FieldIdPropsType> = (props) => {
    const onChangeInput = (e:any) => {
        if (!e.nativeEvent.data) props.callback('')
        else props.callback(props.value + e.nativeEvent.data)
    }
    return (
        <div data-testid="fragment-to-filters-fiter-id">
            <Input allowClear={true} defaultValue={props.defaultValue} value={props.value} placeholder={props.placeholder} onChange={onChangeInput} disabled={props.disabled} />
        </div>
    )
}

export const ButtonFilter: FC<ButtonFilterPropsType> = (props) => {

    return (
        <div className={props.class}>
            <button type="button" onClick={props.callback}>
                Search
            </button>
        </div>
    )
}

export const CheckboxFilter: FC<CheckboxFilterPropsType> = (props) => {
    const onChangeCheckbox = (e: any) => props.callback(e.target.checked)

    return (
        <div data-testid="fragment-to-filters-checkbox-filter" className={props.class}>
            <Checkbox onChange={onChangeCheckbox}
                checked={props.checked}
                disabled={props.disabled}
            >
                {props.text}
            </Checkbox>
        </div>
    )
}

export const CheckboxAll: FC<CheckboxAllPropsType> = (props) => {

    return (
        <div className={props.class}>
            <Checkbox onChange={props.callback}
                checked={props.checked}
                disabled={props.disabled}
            >
                ALL
            </Checkbox>
        </div>
    )
}

type FieldIdPropsType = {
    defaultValue: string
    callback: (p: string) => void
    value: string
    placeholder:string
    disabled:boolean
}

type ButtonFilterPropsType = {
    class: string
    callback: (...args: any[]) => void
}

type CheckboxFilterPropsType = {
    checked: boolean
    disabled: boolean
    text: string
    callback: (p: boolean) => void
    class:string
}

type CheckboxAllPropsType = {
    class: string
    callback: (e: CheckboxChangeEvent) => void
    checked: boolean
    disabled: boolean
}
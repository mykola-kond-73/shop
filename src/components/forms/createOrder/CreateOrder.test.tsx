import {fireEvent, render,screen} from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { CreateOrder } from './CreateOrder'

describe('CreateOrder component testing',()=>{
    test('are all fields present',()=>{
        renderWithStore(<CreateOrder successModalFunc={()=>{}} errorModalFunc={()=>{}}/>)
        expect(screen.getByPlaceholderText('Напишіть коментар до замовлення')).toBeInTheDocument()
        expect(screen.getByText('зареєструвати')).toBeInTheDocument()
    })
})
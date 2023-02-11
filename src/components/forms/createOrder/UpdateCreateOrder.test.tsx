import {render,screen} from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { orderDataForUpdateTest } from '../../../test/testingData'
import { UpdateCreateOrder } from './UpdateCreateOrder'

describe('UpdateCreateOrder component testing',()=>{
    test('are all fields present',()=>{
        renderWithStore(<UpdateCreateOrder 
            role="update"
            successUpdateModalFunc={()=>{}}
            errorUpdateModalFunc={()=>{}}
            data={orderDataForUpdateTest}
        />)
        expect(screen.getByPlaceholderText('Напишіть id клієнта')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть id товарів через пробіл')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть к-сть кожного товару через пробіл')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть коментар')).toBeInTheDocument()
        expect(screen.getByText('Оновити')).toBeInTheDocument()
    })
})
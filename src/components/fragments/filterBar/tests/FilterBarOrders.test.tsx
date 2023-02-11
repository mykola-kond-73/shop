import {screen} from '@testing-library/react'
import { renderWithStore } from '../../../../test/helpers/renderWithStore'
import { FilterBarOrders } from '../FilterBarOrders'

describe('FilterBarOrders component testing',()=>{
    test('are all fields present',()=>{
        renderWithStore(<FilterBarOrders/>)
        expect(screen.getByPlaceholderText('orderId')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('clientId')).toBeInTheDocument()
        expect(screen.getByText('ALL')).toBeInTheDocument()
        expect(screen.getByText('Search')).toBeInTheDocument()
    })
})
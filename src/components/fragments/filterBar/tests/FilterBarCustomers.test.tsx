import {screen} from '@testing-library/react'
import { renderWithStore } from '../../../../test/helpers/renderWithStore'
import { FilterBarCustomers } from '../FilterBarCustomers'

describe('FilterBarCustomers component testing',()=>{
    test('are all fields present',()=>{
        renderWithStore(<FilterBarCustomers/>)
        expect(screen.getByPlaceholderText('customerId')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('name')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('country')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('city')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('phone')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('email')).toBeInTheDocument()
        expect(screen.getByText('ALL')).toBeInTheDocument()
        expect(screen.getByText('Search')).toBeInTheDocument()
    })
})
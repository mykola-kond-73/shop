import { renderWithStore } from '../../../../test/helpers/renderWithStore'
import {screen} from '@testing-library/react'
import { FilterBarStaffs } from '../FilterBarStaffs'

describe('FilterBarStaffs component testing',()=>{
    test('are all fields present',()=>{
        renderWithStore(<FilterBarStaffs/>)
        expect(screen.getByPlaceholderText('staffId')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('name')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('role')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('phone')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('email')).toBeInTheDocument()
        expect(screen.getByText('is Admin')).toBeInTheDocument()
        expect(screen.getByText('ALL')).toBeInTheDocument()
        expect(screen.getByText('Search')).toBeInTheDocument()
    })
})
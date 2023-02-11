import { renderWithStore } from '../../../../test/helpers/renderWithStore'
import {screen} from '@testing-library/react'
import { FilterBar } from '../FilterBar'

describe('FilterBar component testing',()=>{
    test('are all fields present',()=>{
        renderWithStore(<FilterBar isCRM={true}/>)
        expect(screen.getByPlaceholderText('id')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('...')).toBeInTheDocument()
        expect(screen.getByText('Share')).toBeInTheDocument()
        expect(screen.getByText('TOP')).toBeInTheDocument()
        expect(screen.getByText('ALL')).toBeInTheDocument()
        expect(screen.getByTestId('filter-bar-slider')).toBeInTheDocument()
        expect(screen.getByText('Search')).toBeInTheDocument()
    })
})
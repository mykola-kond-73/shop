import { ProductContainer } from './ProductContainer'
import {screen} from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'

describe('ProductContainer component testing',()=>{
    test('',()=>{
        renderWithStore(<ProductContainer/>)
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
    })
})
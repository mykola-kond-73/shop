import { renderWithStore } from '../../../../test/helpers/renderWithStore'
import {screen} from '@testing-library/react'
import { Item } from './MenuItem'

describe('MenuItem component testing',()=>{
    test('',()=>{
        renderWithStore(<Item section="testSection"/>)
        expect(screen.getByText(/testSection/i)).toBeInTheDocument()
    })
})
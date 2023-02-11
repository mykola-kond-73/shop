import {screen} from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { Menu } from './Menu'

describe('Menu component testing',()=>{
    test('',()=>{
        renderWithStore(<Menu/>)
        expect(screen.getByText(/ALL/i)).toBeInTheDocument()
        expect(screen.getByText(/IPhone/i)).toBeInTheDocument()
        expect(screen.getByText(/Mac/i)).toBeInTheDocument()
        expect(screen.getByText(/IPad/i)).toBeInTheDocument()
        expect(screen.getByText(/Apple Watch/i)).toBeInTheDocument()
        expect(screen.getByText(/AirPods/i)).toBeInTheDocument()
        expect(screen.getByText(/Accessories/i)).toBeInTheDocument()
        expect(screen.getByText(/Covers & Bags/i)).toBeInTheDocument()

    })
})
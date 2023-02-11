import { renderWithStore } from '../../test/helpers/renderWithStore'
import {render,screen} from '@testing-library/react'
import { UnLogin } from './UnLogin'

describe('UnLogin component testing',()=>{
    test('is present exit button',()=>{
        renderWithStore(<UnLogin/>)
        expect(screen.getByText(/Exit/i)).toBeInTheDocument()
    })
})
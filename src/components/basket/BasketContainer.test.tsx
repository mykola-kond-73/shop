import {render,screen} from '@testing-library/react'
import { renderWithStore } from '../../test/helpers/renderWithStore'
import { BasketContainer } from './BasketContainer'

describe('BasketContainer component testing',()=>{
    test('are all componet present',()=>{
        renderWithStore(<BasketContainer/>)
        expect(screen.getByText(/Кошик порожній/i))
    })
})
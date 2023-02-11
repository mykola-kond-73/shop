import {render,screen} from '@testing-library/react'
import { Load } from './Load'

test('Load component testing',()=>{
    render(<Load/>)
    const header=screen.getByText(/Loading.../i)
    expect(header).toBeInTheDocument()
})
import {render,screen} from '@testing-library/react'
import { LoginServerError } from '../loginServerError'

describe('loginServerError component testing',()=>{
    test('',()=>{
        render(<LoginServerError message="test message" code={1000}/>)
        expect(screen.getByText(/test message/i)).toBeInTheDocument()
        expect(screen.getByText(/1000/i)).toBeInTheDocument()
    })
})
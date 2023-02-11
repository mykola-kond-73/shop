import {render,screen} from '@testing-library/react'
import { renderWithStore } from '../../test/helpers/renderWithStore'
import { Login } from './Login'

describe('Login component testing',()=>{
    test('',()=>{
        renderWithStore(<Login/>)
        expect(screen.getByPlaceholderText(/Введіть логін/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Введіть пароль/i)).toBeInTheDocument()
        expect(screen.getByText(/Зайти як працівник/i)).toBeInTheDocument()
        expect(screen.getByText('Зайти')).toBeInTheDocument()
    })
})
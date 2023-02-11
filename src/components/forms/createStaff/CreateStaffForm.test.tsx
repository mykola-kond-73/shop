import {render,screen} from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { CreateStaffForm } from './CreateStaffForm'

describe('CreateStaffForm component testing',()=>{
    test('are all fields present',()=>{
        renderWithStore(<CreateStaffForm successModalFunc={()=>{}} errorModalFunc={()=>{}}/>)
        expect(screen.getByPlaceholderText('Ваше ім\'я')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть свою посаду')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ваш email')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ваш номер телефону')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ваш пароль')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Повторіть пароль')).toBeInTheDocument()
        expect(screen.getByText('Адміністратор')).toBeInTheDocument()
        expect(screen.getByText('Зареєструватися')).toBeInTheDocument()
    })
})
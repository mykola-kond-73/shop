import { fireEvent, render, screen } from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { CreateCustomerForm } from './CreateCustomerForm'

describe('CreateCustomerForm component testing', () => {

    test('are all fields present', () => {
        renderWithStore(<CreateCustomerForm successModalFunc={()=>{}} errorModalFunc={()=>{}} />)
        expect(screen.getByPlaceholderText('Ваше ім\'я')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ваша країна')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ваше місто')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ваш email')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ваш номер телефону')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ваш пароль')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Повторіть пароль')).toBeInTheDocument()
        expect(screen.getByText('Зареєструватися')).toBeInTheDocument()
    })
})
import { render, screen } from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { customerForState } from '../../../test/testingData'
import { PersonalDataForm } from './PersonalDataForm'

describe('PersonalDataForm component testing', () => {
    test('are all fields present', () => {
        renderWithStore(<PersonalDataForm successModalFunc={()=>{}} errorModalFunc={()=>{}} data={customerForState} />)
        expect(screen.getByPlaceholderText('Напишіть своє ім\'я')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть своє прізвище')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть свою країну')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть своє місто')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть свій номер телефону')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть свій E-mail')).toBeInTheDocument()
        expect(screen.getByText('Оновити')).toBeInTheDocument()
    })
})
import {render,screen} from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { CreateProductForm } from './CreateProductForm'

describe('CreateProductForm component testing',()=>{
    test('are all fields present',()=>{
        renderWithStore(<CreateProductForm successModalFunc={()=>{}} errorModalFunc={()=>{}}/>)
        expect(screen.getByPlaceholderText('Напишіть назву продукту')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть опис продукту')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть назву секції продукту')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть ціну продукту')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть розмір знижки')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть к-сть продуктів')).toBeInTheDocument()
        expect(screen.getByText('Вивести в топ')).toBeInTheDocument()
        expect(screen.getByText('isShare')).toBeInTheDocument()
        expect(screen.getByText('Зареєструватися')).toBeInTheDocument()
    })
})
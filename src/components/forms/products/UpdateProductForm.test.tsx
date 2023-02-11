import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { render, screen } from '@testing-library/react'
import { UpdateProductForm } from './UpdateProductForm'
import { productForTest2 } from '../../../test/testingData'

describe('UpdateProductForm component testing', () => {
    test('are all fields present', () => {
        renderWithStore(<UpdateProductForm successModalFunc={()=>{}} errorModalFunc={()=>{}} data={productForTest2} />)
        expect(screen.getByPlaceholderText('Напишіть назву продукту')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть опис продукту')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть назву секції продукту')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть ціну продукту')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть розмір знижки')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть к-сть продуктів')).toBeInTheDocument()
        expect(screen.getByText('Вивести в топ')).toBeInTheDocument()
        expect(screen.getByText('isShare')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть назву акії')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть опис акції')).toBeInTheDocument()
        expect(screen.getByText('Оновити')).toBeInTheDocument()
    })
})
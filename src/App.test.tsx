import { render, screen } from '@testing-library/react';
import App from './App';
import { renderTest } from './test/helpers/renderTest';

describe('App component testing', () => {
    test('is there Modal window with info text', () => {
        render(<App />);
        const infoTextModal = screen.getByRole('role')
        expect(infoTextModal).toBeInTheDocument();
    })
})

describe('Routers testing', () => {
    test('products router testing without productId', () => {
        renderTest(null,  '/products')
        const component = screen.getByTestId('products-container')
        expect(component).toBeInTheDocument()
    })

    test('products router with productId',()=>{
        renderTest(null, '/products/111')
        const component = screen.getByTestId('products-container')
        expect(component).toBeInTheDocument()
    })

    test('basket router testing', () => {
        renderTest(null, '/basket')
        const component = screen.getByTestId('basket-container')
        expect(component).toBeInTheDocument()
    })

    test('login router testing', () => {
        renderTest(null, '/login')
        const component = screen.getByTestId('login-page')
        expect(component).toBeInTheDocument()
    })

    test('customer router testing without customerId', () => {
        renderTest(null, '/customer')
        const component = screen.getByTestId('products-container')
        expect(component).toBeInTheDocument()
    })

    test('staff router testing without staffId', () => {
        renderTest(null, '/staff')
        const component = screen.getByTestId('products-container')
        expect(component).toBeInTheDocument()
    })

    test('crm router testing', () => {
        renderTest(null, '/crm')
        const component = screen.getByTestId('products-container')
        expect(component).toBeInTheDocument()
    })
})
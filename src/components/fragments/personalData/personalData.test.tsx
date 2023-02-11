import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import { Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Provider } from 'react-redux';
import { PersonalData } from './PersonalData';
import store from '../../../redux/store'
import { renderWithStore } from '../../../test/helpers/renderWithStore';
import { CustomerType } from '../../../types/redux/reducers/customersTypes';

describe('personalData component testing', () => {
    const testData:CustomerType = {
        name: {
            firstname: 'a',
            lastName: 'b'
        },
        phone: '1',
        email: 'em',
        country: 'u',
        city: 'k',
        _id:''
    }
    describe('from isStaff', () => {
        test('false', () => {
            renderWithStore(<PersonalData data={testData} isStaff={false} />)
            const phoneField = screen.queryByText('1')
            expect(phoneField).toBeInTheDocument()
        })

        test('true', () => {
            renderWithStore(<PersonalData data={testData} isStaff={true} />)
            const roleField = screen.queryByText('ceo')
            expect(roleField).not.toBeInTheDocument()
        })
    })

    test('click remove customer button', () => {
        renderWithStore(<PersonalData data={testData} isStaff={false} />)
        const removeButton = screen.getByText(/Скасувати реєстрацію/i)
        fireEvent.click(removeButton)
        const removeWarningText = screen.getByText(/Ви справді хочете скасувати реєстрацію/i)
        expect(removeWarningText).toBeInTheDocument()
    })

    describe('click update customer button', () => {
        test('with isStaff false', () => {
            renderWithStore(<PersonalData data={testData} isStaff={false} />)
            const removeButton = screen.getByText(/Оновити/i)
            fireEvent.click(removeButton)
            const updateComponent = screen.getByTestId('personal-data-update-form')
            expect(updateComponent).toBeInTheDocument()
        })

        test('with isStaff true', () => {
            renderWithStore(<PersonalData data={testData} isStaff={true} />)
            const removeButton = screen.getByText(/Оновити/i)
            fireEvent.click(removeButton)
            const updateComponent = screen.getByTestId('update-staff-form')
            expect(updateComponent).toBeInTheDocument()
        })
    })
})

// describe('testing')

// test('test click update button', () => {
//     const handleFunc = jest.fn()
//     render(<Button onClick={handleFunc}>Оновити</Button>)
//     fireEvent.click(screen.getByText('Оновити'))            //* клік по елементу
//     expect(handleFunc).toHaveBeenCalledTimes(1)
// })

// test('test click remove button', () => {
//     const handleFunc = jest.fn()
//     render(
//         <Popconfirm onConfirm={handleFunc}>
//             <Button>
//                 Скасувати реєстрацію
//             </Button>
//         </Popconfirm>
//     )
//     fireEvent.click(screen.getByText('Скасувати реєстрацію'))
//     const okButton = screen.queryByText('OK')
//     expect(okButton).toBeInTheDocument()
// })

// test('test click remove button', () => {
//     const handleFunc = jest.fn()
//     render(
//         <Popconfirm onConfirm={handleFunc}>
//             <Button>
//                 Скасувати реєстрацію
//             </Button>
//         </Popconfirm>
//     )
//     fireEvent.click(screen.getByText('Скасувати реєстрацію'))
//     fireEvent.click(screen.queryByText('OK'))
//     expect(handleFunc).toHaveBeenCalledTimes(1)
// })

// test('test click remove button', () => {
//     const handleFunc = jest.fn()
//     render(
//         <Popconfirm onConfirm={handleFunc}>
//             <Button>
//                 Скасувати реєстрацію
//             </Button>
//         </Popconfirm>
//     )
//     fireEvent.click(screen.getByText('Скасувати реєстрацію'))
//     fireEvent.click(screen.queryByText('Cancel'))
//     const cancelButton = screen.queryByText('Cancel')
//     expect(cancelButton).toBeInTheDocument()
// })
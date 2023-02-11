import {render,screen} from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { staffDataForUpdateStaffForm } from '../../../test/testingData'
import { StaffModificateDataType } from '../../../types/redux/selectors/staffSelectorTypes'
import { UpdateStaffForm } from './UpdateStaffForm'

describe('UpdateStaffForm componet testing',()=>{
    test('are all field present',()=>{
        renderWithStore(<UpdateStaffForm successModalFunc={()=>{}} errorModalFunc={()=>{}} data={staffDataForUpdateStaffForm}/>)
        expect(screen.getByPlaceholderText('Напишіть своє ім\'я')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть своє прізвище')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть свою посаду')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть свій номер телефону')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Напишіть свій E-mail')).toBeInTheDocument()
        expect(screen.getByText('Адміністратор')).toBeInTheDocument()
        expect(screen.getByText('Оновити')).toBeInTheDocument()
    })
})
import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../App'

export const renderWithRouter=(component:ReactNode,initialEntries='/')=>{
    return render(
        <MemoryRouter initialEntries={[initialEntries]}>
            <AppRouter/>
            {component}
        </MemoryRouter>
    )
}
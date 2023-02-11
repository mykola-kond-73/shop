import { render } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../App'
import store from '../../redux/store'

export const renderTest=(component:ReactNode,initialEntries='/')=>{
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialEntries]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
    )
}
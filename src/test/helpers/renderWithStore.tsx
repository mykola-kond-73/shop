import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'

export const renderWithStore=(component:ReactNode)=>{
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}
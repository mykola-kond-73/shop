import {screen} from '@testing-library/react'
import { renderWithStore } from '../../../test/helpers/renderWithStore'
import { Product } from './Product'

describe('Product compoent testing',()=>{
    test('are all components present',()=>{
        renderWithStore(<Product
            id="testId"
            price={100}
            share={{
                title:'',
                description:''
            }}
            total={10}
            title=""
            isTop={true}
            photos={[]}
            description=""
            discount={0}
        />)
        expect(screen.getByTestId('add-to-basket-button')).toBeInTheDocument()
        expect(screen.getByTestId('description-component')).toBeInTheDocument()
        expect(screen.getByTestId('product-item-carousel')).toBeInTheDocument()
    })
})
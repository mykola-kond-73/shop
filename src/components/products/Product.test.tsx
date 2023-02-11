import {fireEvent, render,screen} from '@testing-library/react'
import { renderTest } from '../../test/helpers/renderTest'
import { Product } from './Product'

describe('Product component testing',()=>{
    
    test('are all component',()=>{
        renderTest(<Product 
            _id="testId"
            price={100}
            share={{
                title:'',
                description:''
            }}
            total={10}
            title=""
            isTop={true}
            discount={0}
        />)
        expect(screen.getByTestId('description-component')).toBeInTheDocument()
    })
})
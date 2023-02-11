import {render,screen} from '@testing-library/react'
import { Availability } from './Availability'

describe('Availability component testing',()=>{
    test('with props total == 0',()=>{
        render(<Availability total={0}/>)
        const redCircle=screen.getByTestId('redCircle')
        const greenCircle=screen.queryByTestId('greenCircle')

        expect(redCircle).toBeInTheDocument()
        expect(greenCircle).not.toBeInTheDocument()
    })  

    test('with props total != 0',()=>{
        render(<Availability total={10}/>)
        const greenCircle=screen.getByTestId('greenCircle')
        const redCircle=screen.queryByTestId('redCircle')

        expect(greenCircle).toBeInTheDocument()
        expect(redCircle).not.toBeInTheDocument()
    })
})
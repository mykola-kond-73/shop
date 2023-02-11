import {render,screen} from '@testing-library/react'
import { Footer } from './Footer'

test('Footer component testing',()=>{
    render(<Footer/>)
    expect(screen.getByText('Контактна інформація:')).toBeInTheDocument()
    expect(screen.getByText('телефон: +(380) 99 000 0000')).toBeInTheDocument()
    expect(screen.getByText('e-mail: fff@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('c 2021 jjjjjjjjjjj')).toBeInTheDocument()
})
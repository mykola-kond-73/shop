import {render,screen} from '@testing-library/react'
import { ButtonFilter, CheckboxAll, CheckboxFilter, FieldId } from '../Fragments'

describe('Fragments components testing',()=>{
    test('FieldId component testing',()=>{
        render(<FieldId 
            defaultValue=""
            callback={(p)=>{}}
            value=""
            placeholder=""
            disabled={true}
        />)
        expect(screen.getByTestId('fragment-to-filters-fiter-id')).toBeInTheDocument()
    })

    test('ButtonFilter component testing',()=>{
        render(<ButtonFilter 
            class=""
            callback={()=>{}}
        />)
        expect(screen.getByText(/Search/i)).toBeInTheDocument()
    })

    test('CheckboxFilter component testing',()=>{
        render(<CheckboxFilter
            checked={true}
            disabled={true}
            text=""
            callback={()=>{}}
            class=""
        />)
        expect(screen.getByTestId('fragment-to-filters-checkbox-filter')).toBeInTheDocument()
    })

    test('CheckboxAll component testing',()=>{
        render(<CheckboxAll
            class=""
            callback={()=>{}}
            checked={true}
            disabled={true}
        />)
        expect(screen.getByText(/ALL/i)).toBeInTheDocument()
    })
})
import {render,screen} from '@testing-library/react'
import { Description } from './Description'

describe('Description component testing',()=>{
    test('with props title, with props description, with props total > 0, with props share not null, with props isTop true, with props isHome true',()=>{
        render(<Description  
            isHome={true}
            isTop={true}
            title="test title"
            price={100}
            discount={4}
            total={10}
            count={10}
            description="test description"
            share={{
                title:'test share title',
                description:'test share description'
            }}
        />)
        
        const title=screen.getByText(/test title/i)
        const isTop=screen.getByText(/TOP/)
        const price=screen.getByText(/ціна: 100/i)
        const discount=screen.getByText(/знижка: 4%/i)
        const cost=screen.getByText(/вартість: 96/i)
        const total=screen.getByText(/На складі: 10шт/i)
        const availabilityComponent=screen.getByTestId('greenCircle')
        const description=screen.getByText(/test description/i)
        const share=screen.getByTestId('share-block')
        const shareTitle=screen.getByText(/test share title/i)
        const shareDescription=screen.queryByText(/test share description/i)

        expect(title).toBeInTheDocument()
        expect(isTop).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(discount).toBeInTheDocument()
        expect(cost).toBeInTheDocument()
        expect(total).toBeInTheDocument()
        expect(availabilityComponent).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(share).toBeInTheDocument()
        expect(shareTitle).toBeInTheDocument()
        expect(shareDescription).not.toBeInTheDocument()
    })


    test('with props share not null, with props isHome false',()=>{
        render(<Description  
            isHome={false}
            isTop={true}
            title="test title"
            price={100}
            discount={4}
            total={10}
            count={10}
            description="test description"
            share={{
                title:'test share title',
                description:'test share description'
            }}
        />)
        
        const shareDescription=screen.getByText(/test share description/i)
        expect(shareDescription).toBeInTheDocument()
    })

    test('without props title, without props description, with props total == 0, with props share null, with props isTop true, with props isHome true',()=>{
        render(<Description  
            isHome={true}
            isTop={true}
            price={100}
            discount={4}
            total={0}
            share={null}
            count={10}
        />)
        
        const title=screen.queryByText(/test title/i)
        const isTop=screen.queryByText(/TOP/)
        const price=screen.getByText(/ціна: 100/i)
        const discount=screen.getByText(/знижка: 4%/i)
        const cost=screen.getByText(/вартість: 96/i)
        const total=screen.queryByText(/На складі:/i)
        const availabilityComponent=screen.getByTestId('redCircle')
        const description=screen.queryByText(/test description/i)
        const share=screen.queryByTestId('share-block')
        
        expect(title).not.toBeInTheDocument()
        expect(isTop).not.toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(discount).toBeInTheDocument()
        expect(cost).toBeInTheDocument()
        expect(total).not.toBeInTheDocument()
        expect(availabilityComponent).toBeInTheDocument()
        expect(description).not.toBeInTheDocument()
        expect(share).not.toBeInTheDocument()
    })
})
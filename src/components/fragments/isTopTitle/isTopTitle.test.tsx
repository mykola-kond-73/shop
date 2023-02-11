import { render, screen } from '@testing-library/react'
import { IsTopTitle } from './IsTopTitle'

describe('IsTopTitle component testing', () => {
    describe('render check isTop field', () => {
        test('from true', () => {
            render(<IsTopTitle isTop={true} title=""/>)
            const topText = screen.getByText('TOP')

            expect(topText).toBeInTheDocument()
        })

        test('from false', () => {
            render(<IsTopTitle isTop={false} title=""/>)
            const topText = screen.queryByText('TOP')

            expect(topText).toBeNull()
        })
    })

    test('render title', () => {
        render(<IsTopTitle title="titleText" isTop={false}/>)
        const text = screen.getByText('titleText')

        // expect(text).toBe(text)
    })

    test('', () => {

        // render(<IsTopTitle title='titleTest' isTop={true} />)
        // screen.debug()

        //* ============================тестування снапшотами======================
        // const {asFragment}=render(<IsTopTitle title='titleTest' isTop={true} />)
        // expect(asFragment(<IsTopTitle title='titleTest' isTop={true} />)).toMatchSnapshot()
        //* ============================тестування снапшотами======================

    })
})

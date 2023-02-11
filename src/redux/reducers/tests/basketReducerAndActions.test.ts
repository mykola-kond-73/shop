import {addProduct,basketReducer,cleanProductsList,removeProduct,updateProduct} from '../basketReducer'

describe('Basket reducer and actions testing', () => {

    let state = null

    beforeEach(() => {
        state = {
            productsList: [{
                product: '111',
                count: 1
            },
            {
                product: '222',
                count: 3
            }
            ]
        }
    })

    test('add product', () => {
        const product = {
            product: '333',
            count: 2
        }
        const action = addProduct(product)
        const newState = basketReducer(state, action)

        expect(newState.productsList.length).toEqual(3)
        expect(newState.productsList[2]).toBe(product)
    })

    test('clean productsList', () => {
        const action = cleanProductsList()
        const newState = basketReducer(state, action)

        expect(newState.productsList.length).toEqual(0)
    })

    test('remove product', () => {
        const action = removeProduct('111')
        const newState = basketReducer(state, action)

        expect(newState.productsList.length == state.productsList.length - 1).toBeTruthy()
        expect(newState.productsList[0]).toStrictEqual({
            product: '222',
            count: 3
        })
    })

    test('update product', () => {

        const action = updateProduct({
            id: '111',
            count: 9
        })
        const newState = basketReducer(state, action)

        expect(newState.productsList.length == state.productsList.length).toBeTruthy()
        expect(newState.productsList[0]).toStrictEqual({
            product: '111',
            count: 9
        })
    })
})
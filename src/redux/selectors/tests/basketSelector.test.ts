import {getOrderedProducts,getProductsList} from '../basketSelector'
import {productsListData,productForState,productForTest} from '../../../test/testingData'

describe('Basket selectors testing', () => {
    let state = null
    beforeEach(() => {
        state = {
            basketData: {
                productsList: [productsListData]
            },
            productsData: {
                products: [productForState]
            }
        }
    })

    describe('getProductsList selector testing', () => {

        test('with normal data', () => {
            expect(getProductsList(state).length).toBe(1)
            expect(getProductsList(state)).toEqual([productsListData])
        })

        test('with not normal data', () => {
            state.basketData = null
            expect(getProductsList(state)).toBe(null)
        })
    })

    describe('getOrderedProducts selector testing', () => {
        test('with normal data', () => {
            expect(getOrderedProducts(state).fullProductsList.length).toBe(1)
            expect(getOrderedProducts(state)).toEqual({
                totalPrice: 250,
                fullProductsList: [{
                    count: 1,
                    product: productForTest
                }]
            })
        })

        test('with not normal data', () => {
            state.basketData = null
            expect(getOrderedProducts(state)).toBe(null)
        })
    })
})
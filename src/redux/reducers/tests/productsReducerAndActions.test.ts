import { productForState, productsFilterData } from '../../../test/testingData'
import {setProductsData,setProductData,setInitialize,setPageSize,setPageCount,setTotalCount,setSection,setInitializeProduct,productsReducer,setFilterData,setInitializeUpdateProduct,setInitializeDeleteProduct,setInitializeCreateProduct,setIsShareForCheckbox} from '../productsReducer'

describe('Products reducer and actions testing', () => {
    let state = null

    beforeEach(() => {
        state = {
            products: null,
            product: null,

            initialize: false,
            initializeProduct: false,

            pageSize: 2,
            pageCount: 1,
            totalCount: 0,

            section: null,
            filter: {},

            initialUpdateProduct: false,
            initialDeleteProduct: false,
            initialCreateProduct: false,

            isShareForCheckbox: false
        }
    })

    test('setProductsData action testing', () => {
        const action = setProductsData([productForState, productForState])
        const newState = productsReducer(state, action)

        expect(newState.products.length).toEqual(2)
        expect(newState.products).toEqual([productForState, productForState])
    })

    test('setProductData action testing', () => {
        const action = setProductData(productForState)
        const newState = productsReducer(state, action)

        expect(newState.product).toBeTruthy()
        expect(newState.product).toStrictEqual(productForState)
    })

    describe('setInitialize action testing', () => {
        test('with true', () => {
            const action = setInitialize(true)
            const newState = productsReducer(state, action)

            expect(newState.initialize).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitialize(false)
            const newState = productsReducer(state, action)

            expect(newState.initialize).toBeFalsy()
        })
    })

    describe('setInitializeProduct action testing', () => {
        test('with true', () => {
            const action = setInitializeProduct(true)
            const newState = productsReducer(state, action)

            expect(newState.initializeProduct).toBeTruthy()
        })

        test('setInitializeProduct action testing with false', () => {
            const action = setInitializeProduct(false)
            const newState = productsReducer(state, action)

            expect(newState.initializeProduct).toBeFalsy()
        })
    })

    test('setPageSize action testing', () => {
        const action = setPageSize(20)
        const newState = productsReducer(state, action)

        expect(newState.pageSize).toEqual(20)
    })

    test('setPageCount action testing', () => {
        const action = setPageCount(4)
        const newState = productsReducer(state, action)

        expect(newState.pageCount).toEqual(4)
    })

    test('setTotalCount action testing', () => {
        const action = setTotalCount(568)
        const newState = productsReducer(state, action)

        expect(newState.totalCount).toEqual(568)
    })

    test('setSection action testing', () => {
        const action = setSection('IPhone')
        const newState = productsReducer(state, action)

        expect(newState.section).toBe('IPhone')
    })

    test('setFilterData action testing', () => {
        const action = setFilterData(productsFilterData)
        const newState = productsReducer(state, action)
        expect(newState.filter).toEqual(productsFilterData)
    })

    describe('setInitializeUpdateProduct action testing', () => {
        test('with true', () => {
            const action = setInitializeUpdateProduct(true)
            const newState = productsReducer(state, action)

            expect(newState.initialUpdateProduct).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitializeUpdateProduct(false)
            const newState = productsReducer(state, action)

            expect(newState.initialUpdateProduct).toBeFalsy()
        })
    })

    describe('setInitializeDeleteProduct action testing', () => {
        test('with true', () => {
            const action = setInitializeDeleteProduct(true)
            const newState = productsReducer(state, action)

            expect(newState.initialDeleteProduct).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitializeDeleteProduct(false)
            const newState = productsReducer(state, action)

            expect(newState.initialDeleteProduct).toBeFalsy()
        })
    })

    describe('setInitializeCreateProduct action testing', () => {
        test('with true', () => {
            const action = setInitializeCreateProduct(true)
            const newState = productsReducer(state, action)

            expect(newState.initialCreateProduct).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitializeCreateProduct(false)
            const newState = productsReducer(state, action)

            expect(newState.initialCreateProduct).toBeFalsy()
        })
    })

    describe('setIsShareForCheckbox action testing', () => {
        test('with true', () => {
            const action = setIsShareForCheckbox(true)
            const newState = productsReducer(state, action)

            expect(newState.isShareForCheckbox).toBeTruthy()
        })

        test('with false', () => {
            const action = setIsShareForCheckbox(false)
            const newState = productsReducer(state, action)

            expect(newState.isShareForCheckbox).toBeFalsy()
        })
    })
})
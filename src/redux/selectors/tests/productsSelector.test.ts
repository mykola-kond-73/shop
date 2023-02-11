import {getFilter,getInitialDeleteProduct,getInitialize,getInitializeCreateProduct,getInitializeProduct,getInitialUpdateProduct,getIsShareForCheckbox,getPageCount,getPageSize,getProductData,getProductsData,getProductsModData,getSection,getTotalCount} from '../productsSelector'

const productForGetProductsModData = {
    _id: '618fbd8aeac16f2c6cf8e467',
    title: 'Apple Watch 2',
    description: 'descroption descroption descroption descroption descroption descroption descroption descroption',
    section: 'Apple Watch',
    price: 250,
    cost: 250,
    discount: 0,
    total: 8,
    isTop: '+',
    share: ''
}

const productForState = {
    _id: '618fbd8aeac16f2c6cf8e467',
    photos: [],
    title: 'Apple Watch 2',
    description: 'descroption descroption descroption descroption descroption descroption descroption descroption',
    section: 'Apple Watch',
    price: 250,
    discount: 0,
    total: 8,
    isTop: true,
    share: null,
    avatar: {
        small: '',
        large: ''
    }
}

const filterData = {
    textId: '',
    keyWord: '',
    price: [0, 2000],
    isShare: false,
    isTop: true
}

describe('Products selectors testing', () => {
    let state = null

    beforeEach(() => {
        state = {
            productsData: {
                products: [productForState],
                product: productForState,
                initialize: true,
                initializeProduct: true,

                pageSize: 20,
                pageCount: 3,
                totalCount: 100,

                section: 'testSection',
                filter: filterData,

                initialUpdateProduct: true,
                initialDeleteProduct: true,
                initialCreateProduct: true,

                isShareForCheckbox: true
            }
        }
    })

    describe('getProductsData selector testing', () => {
        test('with normal data', () => {
            expect(getProductsData(state).length).toBe(1)
            expect(getProductsData(state)).toEqual([state.productsData.products[0]])
        })

        test('without products', () => {
            state.productsData = null
            expect(getProductsData(state)).toEqual(null)
        })
    })

    describe('getProductsModData selector testing', () => {
        test('with share null and isTop true', () => {
            expect(getProductsModData(state).length).toBe(1)
            expect(getProductsModData(state)).toEqual([productForGetProductsModData])
        })

        test('with share not null and isTop false', () => {
            state.productsData.products[0].isTop = false
            state.productsData.products[0].share = {
                title: 'SHARE',
                description: 'descript share'
            }
            productForGetProductsModData.isTop = ''
            productForGetProductsModData.share = 'SHARE\ndescript share'

            expect(getProductsModData(state).length).toBe(1)
            expect(getProductsModData(state)).toEqual([productForGetProductsModData])
        })

        test('with product===null', () => {
            state.productsData = null
            expect(getProductsModData(state)).toEqual(null)
        })
    })

    describe('getProductData selector testing', () => {
        test('with normal data', () => {
            expect(getProductData(state)).toEqual(productForState)
        })

        test('with product===null', () => {
            state.productsData = null
            expect(getProductData(state)).toEqual(null)
        })
    })

    test('getInitialize selector testing', () => {
        expect(getInitialize(state)).toBeTruthy()
        state.productsData.initialize = null
        expect(getInitialize(state)).toBeFalsy()
    })

    test('getPageCount selector testing', () => {
        expect(getPageCount(state)).toBe(3)

        state.productsData = null
        expect(getPageCount(state)).toBe(1)
    })

    test('getPageSize selector testing', () => {
        expect(getPageSize(state)).toBe(20)

        state.productsData = null
        expect(getPageSize(state)).toBe(10)
    })

    test('getTotalCount selector testing', () => {
        expect(getTotalCount(state)).toBe(100)

        state.productsData = null
        expect(getTotalCount(state)).toBe(0)
    })

    test('getSection selector testing', () => {
        expect(getSection(state)).toBe('testSection')

        state.productsData = null
        expect(getSection(state)).toBe(null)
    })

    test('getFilter selector testing', () => {
        expect(getFilter(state)).toEqual(filterData)

        state.productsData = null
        expect(getFilter(state)).toEqual(filterData)
    })

    test('getInitialUpdateProduct selector testing', () => {
        expect(getInitialUpdateProduct(state)).toBeTruthy()

        state.productsData = null
        expect(getInitialUpdateProduct(state)).toBeFalsy()
    })

    test('getInitialDeleteProduct selector testing', () => {
        expect(getInitialDeleteProduct(state)).toBeTruthy()

        state.productsData = null
        expect(getInitialDeleteProduct(state)).toBeFalsy()
    })

    test('getInitializeProduct selector testing', () => {
        expect(getInitializeProduct(state)).toBeTruthy()

        state.productsData = null
        expect(getInitializeProduct(state)).toBeFalsy()
    })

    test('getInitializeCreateProduct selector testing', () => {
        expect(getInitializeCreateProduct(state)).toBeTruthy()

        state.productsData = null
        expect(getInitializeCreateProduct(state)).toBeFalsy()
    })

    test('getIsShareForCheckbox selector testing', () => {
        expect(getIsShareForCheckbox(state)).toBeTruthy()

        state.productsData = null
        expect(getIsShareForCheckbox(state)).toBeFalsy()
    })
})
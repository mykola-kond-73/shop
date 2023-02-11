import { ProductsActionType, ProductsConstantsEnum, productsFilterType, ProductsInitialStateType, ProductType } from '../../types/redux/reducers/productsTypes'
import { Nullable } from '../../types/types'

export const initialState: ProductsInitialStateType = {
    products: null,
    product: null,

    initialize: false,
    initializeProduct: false,

    pageSize: 10,
    pageCount: 1,
    totalCount: 0,

    section: null,
    filter: {
        textId: '',
        keyWord: '',
        price: [0, 2000],
        isShare: false,
        isTop: true
    },

    initialUpdateProduct: false,
    initialDeleteProduct: false,
    initialCreateProduct: false,

    isShareForCheckbox: false
}

export const productsReducer = (state: ProductsInitialStateType = initialState, action:ProductsActionType):ProductsInitialStateType => {
    switch (action.type) {
    case ProductsConstantsEnum.SET_PRODUCTS_DATA:
        return {
            ...state,
            products: action.productsData
        }
    case ProductsConstantsEnum.SET_PRODUCT_DATA:
        return {
            ...state,
            product: action.productData
        }
    case ProductsConstantsEnum.SET_INITIALIZE:
        return {
            ...state,
            initialize: action.isInit
        }
    case ProductsConstantsEnum.SET_PAGE_SIZE:
        return {
            ...state,
            pageSize: action.size
        }
    case ProductsConstantsEnum.SET_PAGE_COUNT:
        return {
            ...state,
            pageCount: action.page
        }
    case ProductsConstantsEnum.SET_TOTAL_COUNT:
        return {
            ...state,
            totalCount: action.total
        }
    case ProductsConstantsEnum.SET_SECTION:
        return {
            ...state,
            section: action.section
        }
    case ProductsConstantsEnum.SET_FILTER_DATA:
        return {
            ...state,
            filter: {
                ...action.filterData
            }
        }
    case ProductsConstantsEnum.SET_INITIALIZE_PRODUCT:
        return {
            ...state,
            initializeProduct: action.isInitProduct
        }
    case ProductsConstantsEnum.SET_INITIALIZE_UPDATE_PRODUCT:
        return {
            ...state,
            initialUpdateProduct: action.initUpdate
        }
    case ProductsConstantsEnum.SET_INITIALIZE_DELETE_PRODUCT:
        return {
            ...state,
            initialDeleteProduct: action.initDelete
        }
    case ProductsConstantsEnum.SET_INITIALIZE_CREATE_PRODUCT:
        return {
            ...state,
            initialCreateProduct: action.initCreateProd
        }
    case ProductsConstantsEnum.SET_IS_SHARE_FOR_CHECKBOX:
        return {
            ...state,
            isShareForCheckbox: action.isShareForCheckbox
        }
    default:
        return state
    }
}

const setProductsData = (productsData:Nullable<Array<ProductType>>) => ({ type: ProductsConstantsEnum.SET_PRODUCTS_DATA, productsData })
const setProductData = (productData:Nullable<ProductType>) => ({ type: ProductsConstantsEnum.SET_PRODUCT_DATA, productData })
const setInitialize = (isInit:boolean) => ({ type: ProductsConstantsEnum.SET_INITIALIZE, isInit })
const setPageSize = (size:number) => ({ type: ProductsConstantsEnum.SET_PAGE_SIZE, size })
const setPageCount = (page:number) => ({ type: ProductsConstantsEnum.SET_PAGE_COUNT, page })
const setTotalCount = (total:number) => ({ type: ProductsConstantsEnum.SET_TOTAL_COUNT, total })
const setSection = (section:Nullable<string>) => ({ type: ProductsConstantsEnum.SET_SECTION, section })
const setFilterData = (filterData:productsFilterType) => ({ type: ProductsConstantsEnum.SET_FILTER_DATA, filterData })
const setInitializeProduct = (isInitProduct:boolean) => ({ type: ProductsConstantsEnum.SET_INITIALIZE_PRODUCT, isInitProduct })
const setInitializeUpdateProduct = (initUpdate:boolean) => ({ type: ProductsConstantsEnum.SET_INITIALIZE_UPDATE_PRODUCT, initUpdate })
const setInitializeDeleteProduct = (initDelete:boolean) => ({ type: ProductsConstantsEnum.SET_INITIALIZE_DELETE_PRODUCT, initDelete })
const setInitializeCreateProduct = (initCreateProd:boolean) => ({ type: ProductsConstantsEnum.SET_INITIALIZE_CREATE_PRODUCT, initCreateProd })
const setIsShareForCheckbox = (isShareForCheckbox:boolean) => ({ type: ProductsConstantsEnum.SET_IS_SHARE_FOR_CHECKBOX, isShareForCheckbox })

export {
    setProductsData,
    setProductData,
    setInitialize,
    setPageSize,
    setPageCount,
    setTotalCount,
    setSection,
    setFilterData,
    setInitializeProduct,
    setInitializeUpdateProduct,
    setInitializeDeleteProduct,
    setInitializeCreateProduct,
    setIsShareForCheckbox
}
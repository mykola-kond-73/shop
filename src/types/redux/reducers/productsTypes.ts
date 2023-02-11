import { Nullable } from '../../types'
import { AvatarType, SectionsType, ShareType } from './reducersTypes'

export enum ProductsConstantsEnum {
    SET_PRODUCTS_DATA = 'SET_PRODUCTS_DATA',
    SET_PRODUCT_DATA = 'SET_PRODUCT_DATA',
    SET_INITIALIZE = 'SET_INITIALIZE',
    SET_PAGE_SIZE = 'SET_PAGE_SIZE',
    SET_PAGE_COUNT = 'SET_PAGE_COUNT',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    SET_SECTION = 'SET_SECTION',
    SET_FILTER_DATA = 'SET_FILTER_DATA',
    SET_INITIALIZE_UPDATE_PRODUCT = 'SET_INITIALIZE_UPDATE_PRODUCT',
    SET_INITIALIZE_DELETE_PRODUCT = 'SET_INITIALIZE_DELETE_PRODUCT',
    SET_INITIALIZE_PRODUCT = 'SET_INITIALIZE_PRODUCT',
    SET_INITIALIZE_CREATE_PRODUCT = 'SET_INITIALIZE_CREATE_PRODUCT',
    SET_IS_SHARE_FOR_CHECKBOX = 'SET_IS_SHARE_FOR_CHECKBOX'
}

export type ProductsInitialStateType = {
    products:Nullable<Array<ProductType>>,
    product: Nullable<ProductType>,
    initialize: boolean
    initializeProduct: boolean
    pageSize:number 
    pageCount:number
    totalCount:number
    section: Nullable<string>,
    filter: productsFilterType,
    initialUpdateProduct: boolean
    initialDeleteProduct: boolean
    initialCreateProduct: boolean
    isShareForCheckbox: boolean
}

export type productsFilterType =Partial<{
    textId: string
    keyWord: string
    price: [number, number]
    isShare: boolean
    isTop: boolean
}>

export type ProductType = {
    _id: string
    photos: Array<string>
    title: string
    description: string
    section: SectionsType
    price: number
    discount: number
    total: number
    isTop: boolean
    share:Nullable<ShareType>
    avatar:AvatarType
}

type ProductsSetProductsDataActionType={type: ProductsConstantsEnum.SET_PRODUCTS_DATA, productsData:Nullable<Array<ProductType>>}
type ProductsSetProductDataActionType={type: ProductsConstantsEnum.SET_PRODUCT_DATA, productData:Nullable<ProductType>}
type ProductsSetInitializeActionType={type: ProductsConstantsEnum.SET_INITIALIZE, isInit:boolean}
type ProductsSetPageSizeActionType={type: ProductsConstantsEnum.SET_PAGE_SIZE, size:number}
type ProductsSetPageCountActionType={type: ProductsConstantsEnum.SET_PAGE_COUNT, page:number}
type ProductsSetTotalCountActionType={type: ProductsConstantsEnum.SET_TOTAL_COUNT, total:number}
type ProductsSetSectionActionType={type: ProductsConstantsEnum.SET_SECTION, section:Nullable<string>}
type ProductsSetFilterDataActionType={type: ProductsConstantsEnum.SET_FILTER_DATA, filterData:productsFilterType}
type ProductsSetInitializeProductActionType={type: ProductsConstantsEnum.SET_INITIALIZE_PRODUCT, isInitProduct:boolean}
type ProductsSetInitializeUpdateProductActionType={type: ProductsConstantsEnum.SET_INITIALIZE_UPDATE_PRODUCT, initUpdate:boolean}
type ProductsSetInitializeDeleteProductActionType={type: ProductsConstantsEnum.SET_INITIALIZE_DELETE_PRODUCT, initDelete:boolean}
type ProductsSetInitializeCreateProductActionType={type: ProductsConstantsEnum.SET_INITIALIZE_CREATE_PRODUCT, initCreateProd:boolean}
type ProductsSetIsShareForCheckboxActionType={type: ProductsConstantsEnum.SET_IS_SHARE_FOR_CHECKBOX, isShareForCheckbox:boolean}

export type ProductsActionType=ProductsSetProductsDataActionType | ProductsSetProductDataActionType | ProductsSetInitializeActionType | ProductsSetPageSizeActionType | ProductsSetPageCountActionType | ProductsSetTotalCountActionType | ProductsSetSectionActionType | ProductsSetFilterDataActionType | ProductsSetInitializeProductActionType | ProductsSetInitializeUpdateProductActionType | ProductsSetInitializeDeleteProductActionType | ProductsSetInitializeCreateProductActionType | ProductsSetIsShareForCheckboxActionType
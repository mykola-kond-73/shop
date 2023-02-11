export enum BasketConstantsEnum {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    CLEAN_PRODUCTS_LIST = 'CLEAN_PRODUCTS_LIST'
}

export type BasketInitialStateType = {
    productsList: BasketProductType[]
}

export type BasketProductType = {
    product: string,
    count: number
}

export type BasketNewProductType={
    id: string,
    count: number
}

type BasketAddProductActionType ={
    type: BasketConstantsEnum.ADD_PRODUCT
    product: BasketProductType
}

type BasketRemoveProductActionType= {
    type:BasketConstantsEnum.REMOVE_PRODUCT
    productId:string
}

type BasketUpdateProductActionType={
    type: BasketConstantsEnum.UPDATE_PRODUCT
    newProductData: BasketNewProductType
}

type BasketCleanProductsListActionType={
    type: BasketConstantsEnum.CLEAN_PRODUCTS_LIST
}

export type BasketActionType=BasketAddProductActionType | BasketRemoveProductActionType | BasketUpdateProductActionType | BasketCleanProductsListActionType

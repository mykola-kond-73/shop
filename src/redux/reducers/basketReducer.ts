import { BasketActionType,  BasketConstantsEnum, BasketInitialStateType, BasketNewProductType, BasketProductType } from '../../types/redux/reducers/basketTypes'

const initialState:BasketInitialStateType = {
    productsList: []
}

export const basketReducer = (state:BasketInitialStateType = initialState, action:BasketActionType) => {
    switch (action.type) {
    case BasketConstantsEnum.ADD_PRODUCT:
        const newProductsList=[...state.productsList]
        let isInProductList=false
        for(let i=0;i<newProductsList.length;i++){
            if(newProductsList[i].product==action.product.product){
                newProductsList[i].count+=action.product.count
                isInProductList=true
            }
        }
        if(!isInProductList) newProductsList.push(action.product)
        return {
            ...state,
            productsList:[...newProductsList]
        }
    case BasketConstantsEnum.CLEAN_PRODUCTS_LIST:
        return {
            ...state,
            productsList: []
        }
    case BasketConstantsEnum.REMOVE_PRODUCT:

        return {
            ...state,
            productsList: [...state.productsList.filter(elem => elem.product != action.productId)]

        }
    case BasketConstantsEnum.UPDATE_PRODUCT:
        return {
            ...state,
            productsList: [...state.productsList.map(elem => {
                if (elem.product == action.newProductData.id) {
                    return {
                        ...elem,
                        count: action.newProductData.count
                    }
                }
                return elem
            })]
        }

    default:
        return state
    }
}

const addProduct = (product:BasketProductType)=> ({
    type: BasketConstantsEnum.ADD_PRODUCT,
    product
})
const removeProduct = (productId:string) => ({
    type: BasketConstantsEnum.REMOVE_PRODUCT,
    productId
})
const updateProduct = (newProductData:BasketNewProductType)=> ({
    type: BasketConstantsEnum.UPDATE_PRODUCT,
    newProductData
})
const cleanProductsList = () => ({
    type: BasketConstantsEnum.CLEAN_PRODUCTS_LIST
})

export {
    addProduct,
    removeProduct,
    updateProduct,
    cleanProductsList
}
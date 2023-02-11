import {createSelector} from 'reselect'
import { BasketProductType } from '../../types/redux/reducers/basketTypes'
import { BasketGetOrderedProductsSelectorType, BasketModificateNewProductObjType } from '../../types/redux/selectors/basketSelectorsTypes'
import { AppStateType } from '../../types/redux/storeTypes'
import { Nullable } from '../../types/types'
import {getProductsData} from './productsSelector'

export const getProductsList = (state:AppStateType):Nullable<BasketProductType[]> => state?.basketData?.productsList || null

export const getOrderedProducts = createSelector(
    [getProductsList, getProductsData],
    (productsList, productsData):Nullable<BasketGetOrderedProductsSelectorType> => {

        let totalPrice = 0
        const fullProductsList = []
        if(productsList && productsData){
            for (let i = 0; i < productsList.length; i++) {
                for (let k = 0; k < productsData.length; k++) {
                    if (productsList[i].product == productsData[k]._id) {
                        const newProductObj:BasketModificateNewProductObjType = {
                            count: productsList[i].count,
                            product: {
                                ...productsData[k],
                                avatar: productsData[k].avatar.small
                            }
                        }
                        // delete newProductObj.product.moreParams
                        delete newProductObj.product.description
                        delete newProductObj.product.section
                        delete newProductObj.product.photos

                        const interest = 0.01 * newProductObj.product.discount
                        const cost = (newProductObj.product.price - interest * newProductObj.product.price) * newProductObj.count
                        totalPrice += cost

                        fullProductsList.push(newProductObj)
                    }
                }
            }
            return {
                totalPrice,
                fullProductsList
            }
        }
        return null
    }
    
)
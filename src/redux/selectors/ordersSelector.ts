import { createSelector } from 'reselect'
import { AppStateType } from '../../types/redux/storeTypes'

const getVisibleModalOrder = (state:AppStateType) => state?.ordersData?.visibleModal || false
const getCreateOrderInitialize = (state:AppStateType) => state?.ordersData?.createOrderInitialize || false
const getInitializeOrders = (state:AppStateType) => state?.ordersData?.initializeOrders || false
const getPage = (state:AppStateType) => state?.ordersData?.page || 1
const getSize = (state:AppStateType) => state?.ordersData?.size || 10
const getTotalCount = (state:AppStateType) => state?.ordersData?.totalCount || 0
const getInitialUpdateOrder = (state:AppStateType) => state?.ordersData?.initialUpdateOrder || false
const getInitialDeleteOrder = (state:AppStateType) => state?.ordersData?.initialDeleteOrder || false
const getFilterOrderData = (state:AppStateType) => state?.ordersData?.filter || {}
const getOrderData = (state:AppStateType) => state?.ordersData?.ordersData || null
const getOrderModData = createSelector(
    [getOrderData],
    (ordersData) => {
        const newData = []

        if (ordersData) {
            for (let i = 0; i < ordersData.length; i++) {
                let products:Array<string> |string= ''
                let counts:Array<string>|string = ''
                for (let j = 0; j < ordersData[i].products.length; j++) {
                    products += ordersData[i].products[j].product._id + ' '
                    counts += ordersData[i].products[j].count + ' '
                }
                products = products.split('')
                counts = counts.split('')
                products.pop()
                counts.pop()
                products = products.join('')
                counts = counts.join('')

                newData.push({
                    _id: ordersData[i]._id,
                    comment: ordersData[i].comment,
                    customer: ordersData[i].customer._id,
                    product: products,
                    count: counts
                })
            }
            return newData
        }
        return null
    }
)

export {
    getVisibleModalOrder,
    getCreateOrderInitialize,
    getInitializeOrders,
    getPage,
    getSize,
    getTotalCount,
    getInitialUpdateOrder,
    getInitialDeleteOrder,
    getOrderModData,
    getFilterOrderData,
    getOrderData
}
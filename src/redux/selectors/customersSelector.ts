import { AppStateType } from '../../types/redux/storeTypes'

const getCustometIdInit = (state: AppStateType) => state?.customerData?.customerId || null
// const getCustomersData=state=>state.customerData.customers
const getCustomersMOdData = (state: AppStateType) => {
    if (state.customerData && state.customerData.customers) {
        const newData = []
        for (let i = 0; i < state.customerData.customers.length; i++) {
            newData.push({
                _id: state.customerData.customers[i]._id,
                country: state.customerData.customers[i].country,
                city: state.customerData.customers[i].city,
                email: state.customerData.customers[i].email,
                phone: state.customerData.customers[i].phone,
                firstname: state.customerData.customers[i].name.firstname,
                lastname: state.customerData.customers[i].name.lastName
            })
        }
        return newData
    }
    return null
}
const getInitializeCustomer = (state:AppStateType) => state?.customerData?.initializeCustomer || false
const getInitializeCustomers = (state:AppStateType) => state?.customerData?.initializeCustomers || false
const getPage = (state:AppStateType) => state?.customerData?.page || 1
const getSize = (state:AppStateType) => state?.customerData?.size || 10
const getTotal = (state:AppStateType) => state?.customerData?.total || 0
const getFilterData = (state:AppStateType) => state?.customerData?.filter || {}
const getCustomerData = (state:AppStateType) => state?.customerData?.customer || null
const getCustomerId = (state:AppStateType) => {
    if (state.customerData && state.customerData.customer) {
        return state.customerData.customer._id
    }
    return null
}
const getVisibleModal = (state:AppStateType) => state?.customerData?.visibleModal || false
const getCreateCustomerInitialize = (state:AppStateType) => state?.customerData?.createCustomerInitialize || false
const getIsUpdateCustomer = (state:AppStateType) => state?.customerData?.isUpdateCustomer || false
const getUpdateCustomerInitialize = (state:AppStateType) => state?.customerData?.updateCustomerInitialize || false
const getDeleteCustomerInitialize = (state:AppStateType) => state?.customerData?.deleteCustomerInitialize || false


export {
    getCustometIdInit,
    getCustomersMOdData,
    getInitializeCustomer,
    getInitializeCustomers,
    getPage,
    getSize,
    getTotal,
    getFilterData,
    getCustomerData,
    getVisibleModal,
    getCreateCustomerInitialize,
    getCustomerId,
    getIsUpdateCustomer,
    getUpdateCustomerInitialize,
    getDeleteCustomerInitialize
    // getCustomersData
}
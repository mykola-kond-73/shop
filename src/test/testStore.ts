import {
    errorObjWithNull
} from './testingData';

export const testStore = {
    productsData: {
        products: [{}],
        product: {},
        initialize: true,
        initializeProduct: true,
        pageSize: 10,
        pageCount: 1,
        totalCount: 0,
        section: 'testSection',
        filter: {},
        initialUpdateProduct: false,
        initialDeleteProduct: false,
        initialCreateProduct: false,
        isShareForCheckbox: false
    },
    customerData: {
        customerId: 'testCustomerId',
        customers: [{}],
        initializeCustomers: true,
        page: 1,
        size: 10,
        total: 0,
        filter: {},
        customer: {},
        initializeCustomer: true,
        createCustomerInitialize: false,
        isUpdateCustomer: false,
        updateCustomerInitialize: false,
        deleteCustomerInitialize: false,
        visibleModal: false
    },
    staffData: {
        staffId: 'testStaffId',
        staffs: [{}],
        initializeStaffs: true,
        page: 1,
        size: 10,
        total: 0,
        filter: {},
        staff: {},
        initializeStaff: true,
        isUpdateStaff: false,
        updateStaffInitialize: false,
        deleteStaffInitialize: false,
        createStaffInitialize: false
    },
    basketData: {
        productsList: []
    },
    ordersData: {
        ordersData: [{}],
        initializeOrders: true,
        page: 1,
        size: 10,
        totalCount: 0,
        visibleModal: false,
        createOrderInitialize: false,
        initialUpdateOrder: false,
        initialDeleteOrder: false,
        filter: {}
    },
    loginData: {
        isAuth: true
    },
    errorData: {
        products: errorObjWithNull,
        product:errorObjWithNull,
        login:errorObjWithNull,
        customer:errorObjWithNull,
        customerCreate:errorObjWithNull,
        customerUpdate:errorObjWithNull,
        staff:errorObjWithNull,
        staffUpdate:errorObjWithNull
    }
}
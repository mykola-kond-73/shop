import { ErrorObjType } from './../types/redux/reducers/errorTypes';
import { BasketModificateProductList } from './../types/redux/selectors/basketSelectorsTypes';
import { BasketProductType } from '../types/redux/reducers/basketTypes'
import { productsFilterType, ProductType } from '../types/redux/reducers/productsTypes'
import { StaffDataType, StaffFilterType } from '../types/redux/reducers/staffTypes';
import { StaffModificateDataType } from '../types/redux/selectors/staffSelectorTypes';
import { OrderDataType, OrderFiltersType } from '../types/redux/reducers/orderTypes';
import { CustomerFilterType, CustomerType } from '../types/redux/reducers/customersTypes';
import { CustomerModificateDataType } from '../types/redux/selectors/customersSelectorTypes';

const productsListData: BasketProductType = {
    product: '618fbd8aeac16f2c6cf8e467',
    count: 1
}

const productForState: ProductType = {
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

const productsFilterData: productsFilterType = {
    textId: '',
    keyWord: '',
    price: [0, 2000],
    isShare: false,
    isTop: true
}

const productForTest: Omit<ProductType,'avatar'|'section'|'description'|'photos'>&{avatar:string} = {
    _id: '618fbd8aeac16f2c6cf8e467',
    title: 'Apple Watch 2',
    price: 250,
    discount: 0,
    total: 8,
    isTop: true,
    share: null,
    avatar: ''
}

const productForTest2: ProductType= {
    _id: '618fbd8aeac16f2c6cf8e467',
    title: 'Apple Watch 2',
    price: 250,
    discount: 0,
    total: 8,
    isTop: true,
    share: {
        title:'',
        description:''
    },
    avatar:{
        small:'',
        large:''
    },
    description:'',
    photos:[],
    section:''
}

const staffFilterForState: StaffFilterType = {
    staffId: '618fbd8aeac16f2c6cf8e467',
    name: 'test name',
    role: 'ceo',
    phone: '0000000000',
    email: '0000@mail.com',
    isAdmin: true
}
const StaffDataForState: StaffDataType = {
    _id: '6006e9e938f881278c2fd015',
    name: {
        firstname: 'Johe',
        lastName: 'Doe'
    },
    email: 'jdoe@email.com',
    phone: '0975556677',
    role: 'ceo',
    isAdmin: true
}
const staffDataModForTest: StaffModificateDataType = {
    _id: '6006e9e938f881278c2fd015',
    firstname: 'Johe',
    lastname: 'Doe',
    email: 'jdoe@email.com',
    phone: '0975556677',
    role: 'ceo',
    isAdmin: '+'
}

const staffDataForUpdateStaffForm:Omit<StaffModificateDataType,'isAdmin'> &{isAdmin:boolean}={
    _id:'',
    firstname:'',
    lastname:'',
    role:'ceo',
    phone:'',
    email:'',
    isAdmin:true
}

const orderForState: OrderDataType = {
    _id: '618e8c4c2f8e652e9cb16bcd',
    customer: {
        _id: '60b61ecbe91b0626a85d6974',
        name: {
            firstname: 'testingCust',
            lastName: 'lastName'
        },
        country: 'belarus',
        city: 'baranovichi',
        email: 'testCust@gmail.com',
        phone: '0991112222'
    },
    products: [{
        product: {
            _id: '604b4d9e8815342c243a2a86',
            photos: [],
            title: 'photo camera',
            price: 400,
            discount: 10,
            total: 57,
            section: 'Apple Watch',
            isTop: true,
            share: null,
            avatar: {
                small: '',
                large: ''
            }
        },
        count: 3
    }],
    comment: 'test comment'

}
const orderFilterForState: OrderFiltersType = {
    orderId: '618fbd8aeac16f2c6cf8e467',
    clientId: '618fbd8aeac16f2c6cf8e467'
}

const orderDataForUpdateTest = {
    id:'',
    customer:'',
    product:'',
    count:10,
    comment:''
}

const customerForState: CustomerType = {
    _id: '61757440c15a8d2d141b20df',
    name: {
        firstname: 'Jonatan',
        lastName: 'Smitt'
    },
    country: 'belarus',
    city: 'baranovichi',
    email: 'Johnatan111@gmail.com',
    phone: '0995552211'
}
const customerModData: CustomerModificateDataType = {
    _id: '61757440c15a8d2d141b20df',
    firstname: 'Jonatan',
    lastname: 'Smitt',
    country: 'belarus',
    city: 'baranovichi',
    email: 'Johnatan111@gmail.com',
    phone: '0995552211'
}
const customerFilterDataForState: CustomerFilterType = {
    customerId: '61757440c15a8d2d141b20df',
    name: 'Jonatan Smitt',
    country: 'belarus',
    city: 'baranovichi',
    phone: '0995552211',
    email: 'Johnatan111@gmail.com'
}

const errorObjWithNull: ErrorObjType = {
    message: null,
    code: null
}
const errorObjForState: ErrorObjType = {
    message: 'test error',
    code: 1000
}

const messageErrorText = 'message error'
const statusCode = 400

const sagasRejectData = {
    response: {
        data: errorObjForState
    }
}

const sagasLoginResolveData = {
    data: {
        data: {
            userId: 'testUserId'
        }
    }
}

const sagasCreateCustomerDataForAction = {
    name: '',
    email: '',
    phone: '',
    password: ''
}

const sagasGetCustomersData = {
    data: {
        data: {
            data: [{
                email: '',
                phone: ''
            }],
            meta: {
                page: 1,
                size: 20,
                total: 100
            }
        }
    }
}

const sagasGetCustomerData = {
    data: {
        data: {
            email: '',
            phone: ''
        }
    }
}

const sagasUpdateCustomerDataForAction = {
    email: '',
    phone: '',
    name: ''
}

const sagasUpdateCustomerResolveData = {
    data: {
        data: {

        }
    }
}

const sagasCreateStaffDataForAction = {
    name: '',
    email: '',
    phone: '',
    password: '',
    role:'',
    secretKey: ''
}

const sagasUpdateStaffDataForAction = {
    email: '',
    phone: '',
    name: ''
}

export {
    productsListData,
    productForState,
    productForTest,
    productForTest2,
    productsFilterData,

    staffFilterForState,
    StaffDataForState,
    staffDataModForTest,
    staffDataForUpdateStaffForm,

    orderForState,
    orderFilterForState,
    orderDataForUpdateTest,

    customerForState,
    customerModData,
    customerFilterDataForState,

    errorObjWithNull,
    errorObjForState,
    messageErrorText,
    statusCode,

    sagasRejectData,
    sagasLoginResolveData,

    sagasCreateCustomerDataForAction,
    sagasGetCustomersData,
    sagasGetCustomerData,
    sagasUpdateCustomerDataForAction,
    sagasUpdateCustomerResolveData,

    sagasCreateStaffDataForAction,
    sagasUpdateStaffDataForAction
}
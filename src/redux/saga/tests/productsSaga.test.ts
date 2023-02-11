import { productsAPI } from '../../../API/productsAPI'
import { runSagaHelper } from '../../../test/helpers/runSagaHelper'
import { sagasGetCustomerData, sagasGetCustomersData, sagasRejectData } from '../../../test/testingData'
import { createProductWorker, deleteProductWorker, getProductDataWorker, getProductsDataWorker, sagaCreateProduct, sagaDeleteProduct, SagaGetProduct, SagaGetproducts, sagaUpdateProduct, updateProductDataWorker } from '../productsSaga'

describe('Products sagas testing',()=>{
    afterEach(() => {
        jest.clearAllMocks()
    })
    
    describe('createProductWorker worker testing',()=>{
        const action=sagaCreateProduct({},()=>{},()=>{})
        test('without error',async()=>{
            productsAPI.createProduct=jest.fn().mockResolvedValue()

            const dispatched=[]
            await runSagaHelper(createProductWorker, action, (action) => dispatched.push(action))
            
            expect(productsAPI.createProduct).toHaveBeenCalledWith({})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_CREATE_PRODUCT',initCreateProd:true},
                {type:'SET_PRODUCT_CREATE_ERROR_DATA',message:null,code:null},
                {type:'SET_INITIALIZE_CREATE_PRODUCT',initCreateProd:false}
            ])
        })

        test('with error',async()=>{
            productsAPI.createProduct=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(createProductWorker, action, (action) => dispatched.push(action))

            expect(productsAPI.createProduct).toHaveBeenCalledWith({})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_CREATE_PRODUCT',initCreateProd:true},
                {type:'SET_PRODUCT_CREATE_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIALIZE_CREATE_PRODUCT',initCreateProd:false}
            ])
        })
    })

    describe('getProductsDataWorker worker testing',()=>{
        const action=SagaGetproducts(1,20,'testSection',{})
        test('without error',async()=>{
            productsAPI.getProducts=jest.fn().mockResolvedValue(sagasGetCustomersData)

            const dispatched=[]
            await runSagaHelper(getProductsDataWorker, action, (action) => dispatched.push(action))

            expect(productsAPI.getProducts).toHaveBeenCalledWith(1,20,'testSection',{})
            expect(dispatched).toEqual([
                {type: 'SET_INITIALIZE',isInit:false},
                {type:'SET_PRODUCTS_ERROR_DATA',message:null,code:null},
                {type: 'SET_PRODUCTS_DATA',productsData:sagasGetCustomersData.data.data.data},
                {type: 'SET_PAGE_COUNT',page:sagasGetCustomersData.data.data.meta.page},
                {type: 'SET_PAGE_SIZE',size:sagasGetCustomersData.data.data.meta.size},
                {type: 'SET_TOTAL_COUNT',total:sagasGetCustomersData.data.data.meta.total},
                {type: 'SET_INITIALIZE',isInit:true}
            ])
        })

        test('with error',async()=>{
            productsAPI.getProducts=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(getProductsDataWorker, action, (action) => dispatched.push(action))

            expect(productsAPI.getProducts).toHaveBeenCalledWith(1,20,'testSection',{})
            expect(dispatched).toEqual([
                {type: 'SET_INITIALIZE',isInit:false},
                {type:'SET_PRODUCTS_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type: 'SET_INITIALIZE',isInit:true}
            ])
        })
    })

    describe('getProductDataWorker worker testing',()=>{
        const action=SagaGetProduct('testProductId')
        test('without error',async()=>{
            productsAPI.getProduct=jest.fn().mockResolvedValue(sagasGetCustomerData)

            const dispatched=[]
            await runSagaHelper(getProductDataWorker, action, (action) => dispatched.push(action))

            expect(productsAPI.getProduct).toHaveBeenCalledWith('testProductId')
            expect(dispatched).toEqual([
                {type: 'SET_INITIALIZE_PRODUCT',isInitProduct:false},
                {type:'SET_PRODUCT_ERROR_DATA',message:null,code:null},
                {type: 'SET_PRODUCT_DATA',productData:sagasGetCustomerData.data.data},
                {type: 'SET_INITIALIZE_PRODUCT',isInitProduct:true}
            ])
        })

        test('with error',async()=>{
            productsAPI.getProduct=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(getProductDataWorker, action, (action) => dispatched.push(action))

            expect(productsAPI.getProduct).toHaveBeenCalledWith('testProductId')
            expect(dispatched).toEqual([
                {type: 'SET_INITIALIZE_PRODUCT',isInitProduct:false},
                {type:'SET_PRODUCT_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type: 'SET_INITIALIZE_PRODUCT',isInitProduct:true}
            ])
        })
    })

    describe('updateProductDataWorker worker testing',()=>{
        const action=sagaUpdateProduct('testSection',{},()=>{},()=>{})
        test('without error',async()=>{
            productsAPI.updateProduct=jest.fn().mockResolvedValue(sagasGetCustomerData)

            const dispatched=[]
            await runSagaHelper(updateProductDataWorker, action, (action) => dispatched.push(action))

            expect(productsAPI.updateProduct).toHaveBeenCalledWith('testSection',{})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_UPDATE_PRODUCT',initUpdate:true},
                {type:'SET_PRODUCT_UPDATE_ERROR_DATA',message:null,code:null},
                {type:'SET_INITIALIZE_UPDATE_PRODUCT',initUpdate:false}
            ])
        })

        test('with error',async()=>{
            productsAPI.updateProduct=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(updateProductDataWorker, action, (action) => dispatched.push(action))

            expect(productsAPI.updateProduct).toHaveBeenCalledWith('testSection',{})
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_UPDATE_PRODUCT',initUpdate:true},
                {type:'SET_PRODUCT_UPDATE_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIALIZE_UPDATE_PRODUCT',initUpdate:false}
            ])
        })
    })

    describe('deleteProductWorker worker testing',()=>{
        const action=sagaDeleteProduct('testSection',()=>{},()=>{})
        test('without error',async()=>{
            productsAPI.deleteProduct=jest.fn().mockResolvedValue()

            const dispatched=[]
            await runSagaHelper(deleteProductWorker, action, (action) => dispatched.push(action))

            expect(productsAPI.deleteProduct).toHaveBeenCalledWith('testSection')
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_DELETE_PRODUCT',initDelete:true},
                {type:'SET_PRODUCT_DELETE_ERROR_DATA',message:null,code:null},
                {type:'SET_INITIALIZE_DELETE_PRODUCT',initDelete:false}
            ])
        })

        test('with error',async()=>{
            productsAPI.deleteProduct=jest.fn().mockRejectedValue(sagasRejectData)
            
            const dispatched=[]
            await runSagaHelper(deleteProductWorker, action, (action) => dispatched.push(action))

            expect(productsAPI.deleteProduct).toHaveBeenCalledWith('testSection')
            expect(dispatched).toEqual([
                {type:'SET_INITIALIZE_DELETE_PRODUCT',initDelete:true},
                {type:'SET_PRODUCT_DELETE_ERROR_DATA',message: sagasRejectData.response.data.mesage,code: sagasRejectData.response.data.resultCode},
                {type:'SET_INITIALIZE_DELETE_PRODUCT',initDelete:false}
            ])
        })
    })
})
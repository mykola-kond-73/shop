import { put, call, takeEvery } from 'redux-saga/effects'
import { productsAPI } from '../../API/productsAPI'
import { productsFilterType, ProductType } from '../../types/redux/reducers/productsTypes'
import { LoginSagasConstantsEnum } from '../../types/redux/sagas/loginSagasTypes'
import { CreateProductType, ProductsSagasConstantsEnum } from '../../types/redux/sagas/productsSagasTypes'
import { ResponceType, ResponceWithMetaDataType } from '../../types/redux/sagas/sagasTypes'
import { Nullable } from '../../types/types'
import { setProductCreateErrorData, setProductDeleteErrorData, SetProductErrorData, setProductsErrorData, setProductUpdateErrorData } from '../reducers/errorReducer'
import { setInitialize, setInitializeCreateProduct, setInitializeDeleteProduct, setInitializeProduct, setInitializeUpdateProduct, setPageSize, setProductData, setProductsData, setTotalCount, setPageCount } from '../reducers/productsReducer'

export const sagaCreateProduct = (data: CreateProductType, successModalFunc: () => void, errorModalFunc: () => void) => ({
    type: ProductsSagasConstantsEnum.SAGA_CREATE_PRODUCT,
    data,
    successModalFunc,
    errorModalFunc
})
//todo      productsFilterType|string - перевірити чи це потрібний тип, також у файлі саг і сторінці crm
export const SagaGetproducts = (pageCount: number, pageSize: number, section: Nullable<string>, filter: productsFilterType|string) => ({
    type: ProductsSagasConstantsEnum.SAGA_GET_PRODUCTS_DATA,
    pageCount,
    pageSize,
    section,
    filter
})
export const SagaGetProduct = (productId: string) => ({
    type: ProductsSagasConstantsEnum.SAGA_GET_PRODUCT_SAGA,
    productId
})
export const sagaUpdateProduct = (id: string, data: CreateProductType, successModalFunc: (hash: string) => void, errorModalFunc: () => void) => ({
    type: ProductsSagasConstantsEnum.SAGA_UPDATE_PRODUCT_DATA,
    id,
    data,
    successModalFunc,
    errorModalFunc
})
export const sagaDeleteProduct = (id: string, successModalFunc: () => void, errorModalFunc: () => void) => ({
    type: ProductsSagasConstantsEnum.SAGA_DELETE_PRODUCT,
    id,
    successModalFunc,
    errorModalFunc
})

export function* createProductWorker(action:ReturnType<typeof sagaCreateProduct>) {
    try {
        yield put(setInitializeCreateProduct(true))
        yield call(() => productsAPI.createProduct(action.data))
        yield put(setProductCreateErrorData(null, null))

        yield action.successModalFunc()
        yield put(setInitializeCreateProduct(false))

    } catch (error: any) {
        if (error.response) {
            yield put(setProductCreateErrorData(error.response.data.mesage, error.response.data.resultCode))
        } else if (error.request) {
            yield put(setProductCreateErrorData(error.message, error.request.status))
        } else {
            yield put(setProductCreateErrorData(error.message, null))
        }
        yield action.errorModalFunc()
        yield put(setInitializeCreateProduct(false))
    }
}

export function* getProductsDataWorker(action:ReturnType<typeof SagaGetproducts>) {
    try {
        yield put(setInitialize(false))
        const responce:ResponceWithMetaDataType<Array<ProductType>> = yield call(() => productsAPI.getProducts(action.pageCount, action.pageSize, action.section, action.filter))
        yield put(setProductsErrorData(null, null))

        yield put(setProductsData(responce.data.data.data))
        yield put(setPageCount(responce.data.data.meta.page))
        yield put(setPageSize(responce.data.data.meta.size))
        yield put(setTotalCount(responce.data.data.meta.total))
        yield put(setInitialize(true))

    } catch (error: any) {
        if (error.response) {
            yield put(setProductsErrorData(error.response.data.mesage, error.response.data.resultCode))
        } else if (error.request) {
            yield put(setProductsErrorData(error.message, error.request.status))
        } else {
            yield put(setProductsErrorData(error.message, null))
        }
        yield put(setInitialize(true))
    }
}

export function* getProductDataWorker(action:ReturnType<typeof SagaGetProduct>) {
    try {
        yield put(setInitializeProduct(false))
        const responce:ResponceType<ProductType> = yield call(() => productsAPI.getProduct(action.productId))
        yield put(SetProductErrorData(null, null))
        yield put(setProductData(responce.data.data))
        yield put(setInitializeProduct(true))

    } catch (error: any) {
        if (error.response) {
            yield put(SetProductErrorData(error.response.data.mesage, error.response.data.resultCode))
        } else if (error.request) {
            yield put(SetProductErrorData(error.message, error.request.status))
        } else {
            yield put(SetProductErrorData(error.message, null))
        }
        yield put(setInitializeProduct(true))
    }
}

export function* updateProductDataWorker(action:ReturnType<typeof sagaUpdateProduct>) {
    try {
        yield put(setInitializeUpdateProduct(true))
        // const codeData = runData(code, action.data, ['email', 'phone', 'name'])
        const responce:ResponceType<string> = yield call(() => productsAPI.updateProduct(action.id, action.data))
        yield put(setProductUpdateErrorData(null, null))

        yield action.successModalFunc(responce.data.data)
        yield put(setInitializeUpdateProduct(false))

    } catch (error: any) {
        if (error.response) {
            yield put(setProductUpdateErrorData(error.response.data.mesage, error.response.data.resultCode))

            if (error.response.data.resultCode === 401) yield put({ type: LoginSagasConstantsEnum.SAGA_DELETE_SESSION })
        } else if (error.request) {
            yield put(setProductUpdateErrorData(error.message, error.request.status))
        } else {
            yield put(setProductUpdateErrorData(error.message, null))
        }

        yield action.errorModalFunc()
        yield put(setInitializeUpdateProduct(false))
    }
}

export function* deleteProductWorker(action:ReturnType<typeof sagaDeleteProduct>) {
    try {
        yield put(setInitializeDeleteProduct(true))
        yield call(() => productsAPI.deleteProduct(action.id))
        yield put(setProductDeleteErrorData(null, null))
        yield put(setInitializeDeleteProduct(false))
        yield action.successModalFunc()

    } catch (error: any) {
        if (error.response) {
            yield put(setProductDeleteErrorData(error.response.data.mesage, error.response.data.resultCode))

            if (error.response.data.resultCode === 401) yield put({ type: LoginSagasConstantsEnum.SAGA_DELETE_SESSION })
        } else if (error.request) {
            yield put(setProductDeleteErrorData(error.message, error.request.status))
        } else {
            yield put(setProductDeleteErrorData(error.message, null))
        }
        yield action.errorModalFunc()
        yield put(setInitializeDeleteProduct(false))
    }
}

export function* productsWatcher() {
    yield takeEvery(ProductsSagasConstantsEnum.SAGA_CREATE_PRODUCT, createProductWorker)
    yield takeEvery(ProductsSagasConstantsEnum.SAGA_GET_PRODUCTS_DATA, getProductsDataWorker)
    yield takeEvery(ProductsSagasConstantsEnum.SAGA_GET_PRODUCT_SAGA, getProductDataWorker)
    yield takeEvery(ProductsSagasConstantsEnum.SAGA_UPDATE_PRODUCT_DATA, updateProductDataWorker)
    yield takeEvery(ProductsSagasConstantsEnum.SAGA_DELETE_PRODUCT, deleteProductWorker)
}
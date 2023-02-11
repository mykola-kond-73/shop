import { CreateProductType } from '../redux/sagas/productsSagasTypes'

export type FormCallbacksType={ setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }
export type ProductFormDataType=CreateProductType&{titleShare?:string,descriptionShare?:string}
export type ProductFormValuesType=Omit<CreateProductType,'price'|'total'|'discount'|'share'|'avatar'|'photos'>&{
    titleShare:string
    descriptionShare:string
    price:string
    total:string
    discount:string
}
export type ProductFormErrorsType=Partial<Omit<ProductFormValuesType,'section'>&{section:string}>
export type FormPropsType={
    successModalFunc: (() => void) | ((login:string,password:string)=>void) | ((hash:string)=>void)
    errorModalFunc: () => void 
}
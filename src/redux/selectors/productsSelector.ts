import { AppStateType } from '../../types/redux/storeTypes'

const getProductsData=(state:AppStateType)=>state?.productsData?.products || null
const getProductsModData=(state:AppStateType)=>{
    if(state.productsData&&state.productsData.products){
        const newData=[]
        for (let i = 0; i < state.productsData.products.length; i++) {
            newData.push({
                _id:state.productsData.products[i]._id,
                title:state.productsData.products[i].title,
                description:state.productsData.products[i].description,
                price:state.productsData.products[i].price,
                discount:state.productsData.products[i].discount,
                cost:state.productsData.products[i].price-state.productsData.products[i].price*state.productsData.products[i].discount/100,
                total:state.productsData.products[i].total,
                section:state.productsData.products[i].section,
                isTop:state.productsData.products[i].isTop?'+':'',
                share:state.productsData.products[i].share?`${state.productsData.products[i].share!.title}\n${state.productsData.products[i].share!.description}`:''
            })
        }
        return newData
    }
    return null
}
const getProductData=(state:AppStateType)=>state?.productsData?.product || null
const getInitialize=(state:AppStateType)=>state?.productsData?.initialize || false
const getPageCount=(state:AppStateType)=>state?.productsData?.pageCount || 1
const getPageSize=(state:AppStateType)=>state?.productsData?.pageSize || 10
const getTotalCount=(state:AppStateType)=>state?.productsData?.totalCount || 0
const getSection=(state:AppStateType)=>state?.productsData?.section || null
const getFilter=(state:AppStateType)=>state?.productsData?.filter || ({textId:'',keyWord:'',price:[0, 2000],isShare:false,isTop:true})
const getInitialUpdateProduct=(state:AppStateType)=>state?.productsData?.initialUpdateProduct || false
const getInitialDeleteProduct=(state:AppStateType)=>state?.productsData?.initialDeleteProduct || false
const getInitializeProduct=(state:AppStateType)=>state?.productsData?.initializeProduct || false
const getInitializeCreateProduct=(state:AppStateType)=>state?.productsData?.initialCreateProduct || false
const getIsShareForCheckbox=(state:AppStateType)=>state?.productsData?.isShareForCheckbox || false

export{
    getProductsData,
    getProductsModData,
    getProductData,
    getInitialize,
    getPageCount,
    getPageSize,
    getTotalCount,
    getSection,
    getFilter,
    getInitialUpdateProduct,
    getInitialDeleteProduct,
    getInitializeProduct,
    getInitializeCreateProduct,
    getIsShareForCheckbox
}
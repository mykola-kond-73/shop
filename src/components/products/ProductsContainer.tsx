import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useMatch } from 'react-router'
import { getFilter, getInitialize, getPageCount, getPageSize, getProductsData, getSection } from '../../redux/selectors/productsSelector'
import { ErrorMiddleware } from '../error/ErrorMiddleware'
import { getProductsErrorData } from '../../redux/selectors/errorSelector'
import { ProductContainer } from './productPage/ProductContainer'
import { Menu } from './menu/Menu'
import { FilterBar } from '../fragments/filterBar/FilterBar'
import classes from './ProductsContainer.module.css'
import { Product } from './Product'
import { SagaGetproducts } from '../../redux/saga/productsSaga'
import { Load } from '../fragments/Load/Load'

type RouterType={
    productId:string
}

export const ProductsContainer = React.memo(() => {
    const products = useSelector(getProductsData)
    const initialize = useSelector(getInitialize)
    const pageCount = useSelector(getPageCount)
    const pageSize = useSelector(getPageSize)
    const section = useSelector(getSection)
    const filter = useSelector(getFilter)

    const errorMessage = useSelector(getProductsErrorData).message

    const dispatch = useDispatch()

    //* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //* дає доступ до match(match.params. ...) оп адресі для 
    const param =useParams()

    // const history = useHistory()
    // const location = useLocation()
    // const params = useParams()
    // const a = {
    //     match,
    //     history,
    //     location,
    //     params
    // }
    // console.log(a)
    //* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    useEffect(() => {
        dispatch(SagaGetproducts(pageCount, pageSize, section, JSON.stringify(filter)))
        // dispatch(getProductsDataThunk(pageCount, pageSize, false, section))
    }, [pageCount, section, dispatch, filter]) //* викликається після рендеру, якшо callback повертає функцію то вона викликається при розмонтуванні(наступному рендері(використанні хука)), то ця функція є фукцією клінером

    // console.log(products,
    //     initialize,
    //     pageCount,
    //     pageSize)
    if (!initialize && !errorMessage) {
        return <div data-testid="products-container"><Load/></div>
    } else {
        if (param && param.productId) {
            return <ProductContainer />
        }
        return (
            <div className={classes.rootProductsContainer}>
                <Menu />

                <FilterBar filter={filter} isCRM={false} />
                <div className={classes.products}>
                    <ErrorMiddleware page="products">
                        {
                            products && products.map(elem => {
                                return (
                                    <Product key={elem._id}
                                        title={elem.title}
                                        discount={elem.discount}
                                        price={elem.price}
                                        share={elem.share}
                                        total={elem.total}
                                        avatar={elem.avatar.large}
                                        isTop={elem.isTop}
                                        _id={elem._id}
                                    />
                                )
                            })
                        }
                    </ErrorMiddleware>
                </div>
            </div>
        )
    }
}
)
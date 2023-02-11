import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ProductsContainer } from './components/products/ProductsContainer'
import store from './redux/store';
import 'antd/dist/reset.css'
import { Modal } from 'antd';
import { RootFuse } from './components/error/RootFuse';
import { Header } from './components/header/Header';
import { Login } from './components/login/Login';
import { Footer } from './components/footer/Footer';
import { BasketContainer } from './components/basket/BasketContainer';
import { useState } from 'react';
import { PersonalOfficeContainer } from './components/personalOffice/PersonalOfficeContainer'
import { CRMContainer } from './components/CRM/CRMContainer';
import { PersonalOfficeStaffContainer } from './components/personalOffice/PersonalOfficeStaffContainer';
import classes from './App.module.css'

function App() {
    const [visible, setVisible] = useState(true)
    return (
        <div className={classes.appWrapper}>
            <Modal open={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <div role="role">
          Ми використовуємо файли cookie для ідентифікації користувача. Ми не збираємо та не передаємо ваші персональні дані
                </div>
            </Modal>

            <Header />

            <AppRouter />

            <Footer />
        </div>
    );
}

export const AppRouter = () => {
    return (
        <div>
            <Routes>
                {/*//* Новий спосіб використання(разом з хуком useRouteMatch), тепер Switch не потрібен */}
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products/:productId?" element={<ProductsContainer />} />
                <Route path="/basket" element={<BasketContainer />} />
                <Route path="/customer/:customerId?" element={<PersonalOfficeContainer />} />
                <Route path="/staff/:staffId?" element={<PersonalOfficeStaffContainer />} />
                <Route path="/crm" element={<CRMContainer />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}
const RootApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <RootFuse>
                    <App />
                </RootFuse>
            </Provider>
        </BrowserRouter>
    )
}

export default RootApp
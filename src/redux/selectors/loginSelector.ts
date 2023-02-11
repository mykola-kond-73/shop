import { AppStateType } from '../../types/redux/storeTypes';

export const getIsAuth=(state:AppStateType)=>state?.loginData?.isAuth || false
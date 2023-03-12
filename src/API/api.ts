import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    // baseURL: 'http://localhost:8000',
    baseURL: process.env.REACT_APP_SERVER 

})

instance.interceptors.request.use(config=>{
    config.headers.Authorization=`Bearer ${localStorage.getItem('token')}`
    return config
})

instance.interceptors.response.use(
    config=>config,
    async (error)=>{
        const originalRequest=error.config
        if(error.response.status === 401 && error.config && !error.config._isRetry){
            try{
                const responce=await instance.get('/auth/refresh')
                localStorage.setItem('token',responce.data.data.accessToken)
                return instance.request(originalRequest)
            }catch(e){
                console.log(e)
            }
        }
    })

export type ResponceAxiosType<T={}>=T & {
    message:Array<string>
    resultCode:number
}
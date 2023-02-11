import {message} from 'antd'

const successModal = (text:string) => () => message.success(text)
const errorModal = (text:string) => () => message.error(text)

export {
    successModal,
    errorModal
}
export type ResponceType<T> = {
    data: {
        data: T
    }
}

export type ResponceWithMetaDataType<T>={
    data:{
        data:{
            data:T
            meta:ResponceMetaDataType
        }
    }
}

export type ResponceMetaDataType = {
    total: number
    page: number
    size: number
}

export type ResponceErrorType = {
    responce: {
        data: {
            message: string
            resultCode: string
        }
    }
} | {
    message: string
    request: {
        status: string
    }
} | {
    message: string
}
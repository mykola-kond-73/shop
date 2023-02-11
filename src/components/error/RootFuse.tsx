import React, { ReactNode } from 'react'

type PropsType={
    children:ReactNode
}
type StateType={
    hasError:boolean
}

export class RootFuse extends React.Component<PropsType,StateType,any>{
    constructor(props:PropsType){
        super(props)
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error:any){ //! для зміни локального стану
        return {
            hasError:true
        }
    }

    componentDidCatch(error:any,errorInfo:any){ //! для логування 
        console.log(error)
        console.log(errorInfo)
    }

    render(){
        if(this.state.hasError){
            return(
                <h1>Сталася якась помилка!..</h1>
            )
        }
        return this.props.children
    }
} 
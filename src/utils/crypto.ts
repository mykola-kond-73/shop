const code=(data:string):string=>{
    return window.btoa(data)
}

const decode=(data:string):string=>{
    return window.atob(data)
}

const runData=(cryptoFunc:(data:string)=>string,objData:any,keysArr:Array<string>)=>{
    const newData:any={...objData}
    for(let i=0;i<keysArr.length;i++){
        newData[keysArr[i]]=cryptoFunc(objData[keysArr[i]])
    }
    return newData
}

export {
    code,
    decode,
    runData
}
export const Increment = ()=>{
    return{
        type: 'INCREMENT',
    }
}
export const Decrement = ()=>{
    return{
        type: 'DECREMENT',
    }
}
export const setcount = ()=>{
    return{
        type: 'FALSE'
    }
}
export const otherfun = ()=>{
    return{
        type: 'ANOTHER_ACTION'
    }
}
export const Reset = ()=>{
    return{
        type : 'RESET THE COUNT'
    }
}
export const setting = (value)=>{
    return{
        type: 'SETTING',
        payload: value
    }
}

export const openModeltwo = ()=>{
    return{
        type: 'OPEN_MODEL_TWO',
    }
}
export const closeModeltwo = ()=>{
    return{
        type: 'CLOSE_MODEL-TWO'
    }
}
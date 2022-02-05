export const addTodo = (data)=>{
    return(
        {
            type:"ADD_TODO",
            data:{data:data,id:new Date().getTime().toString()}
        }
    )
}

export const toggle = (index)=>{
    return(
        {
            type:"TOGGLE"
        }
    )
}
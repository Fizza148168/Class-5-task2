//reducer is a "pure function" it doesnt change external API
//everytime when reducer runs it creates new object, never updates old object
const numReducer = (state,action)=>{
    switch (action.type){
        case 'INCREMENT':
            return state + action.val
        case 'DECREMENT':
            return state - action.val
    } 
}
export default numReducer;
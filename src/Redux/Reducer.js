const initialState = {count :0}
const reducer = (state = initialState,action)=>{
    if(action.type==="Inc"){
        return { count: state.count+1 }
    }else if(action.type==="Dec"){
        return { count: state.count-1 }
    }
    else if(action.type==="Res"){
        return { count: 0 }
    }
    return state;
}
export default reducer
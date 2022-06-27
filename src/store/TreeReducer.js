const defaultState={
    tree:[]
}

export const SET_TREE="SET_TREE"

export const treeReducer=(state=defaultState,action)=>{
    switch(action.type){
        case SET_TREE:
            return {...state,tree:action.payload}
        default:
            return state
    }
}

export const setTreeAction=(payload)=>({type:SET_TREE,payload})

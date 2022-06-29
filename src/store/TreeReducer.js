const defaultState={
    tree:[],
    selected:null
}

export const SET_TREE="SET_TREE"
export const SET_SELECTED="SET_SELECTED"

export const treeReducer=(state=defaultState,action)=>{
    switch(action.type){
        case SET_TREE:
            return {...state,tree:action.payload}
        case SET_SELECTED:
            return {...state,selected:action.payload}
        default:
            return state
    }
}

export const setTreeAction=(payload)=>({type:SET_TREE,payload})
export const setSelectedAction=(payload)=>({type:SET_SELECTED,payload})

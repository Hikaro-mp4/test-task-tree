const defaultState={
    tree:[],
    active:null,
    select:null
}

export const SET_TREE="SET_TREE"
export const SET_ACTIVE="SET_ACTIVE"
export const SET_SELECT="SET_SELECT"

export const treeReducer=(state=defaultState,action)=>{
    switch(action.type){
        case SET_TREE:
            return {...state,tree:action.payload}
        case SET_ACTIVE:
            return {...state,active:action.payload}
        case SET_SELECT:
            return {...state,select:action.payload}
        default:
            return state
    }
}

export const setTreeAction=(payload)=>({type:SET_TREE,payload})
export const setActiveAction=(payload)=>({type:SET_ACTIVE,payload})
export const setSelectAction=(payload)=>({type:SET_SELECT,payload})

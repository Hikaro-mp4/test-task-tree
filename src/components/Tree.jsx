import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTreeData } from '../Api/treeApi'
import * as treeActions from '../store/TreeReducer'

const Tree = (props) => {

    useEffect(()=>{
        getTreeData().then(data=>setTreeAction(data))
      
    },[])

    const {data,selected}=props
    const {setTreeAction,setSelectedAction}=props.actions

    const handlerClick=(e,branch)=>{
        e.stopPropagation()
        setSelectedAction(checkChildSelected(branch)||selected==branch.id?
                                getParent(data,branch.id): 
                                branch.id)
       
    }

    const getParentOfSelectedChild=(branch,selected)=>{
        let parent=0

        const recursion=(branch)=>{       
            if(!parent){
                if(!branch.children)return 0
               
                branch.children.map(child=>{
                    if(child.id===selected)parent=branch.id
                    else if(child.children){
                        recursion(child)
                    }
                })
            }
        }
        recursion(branch)
        return parent
    }

    const getParent=(tree,selected)=>{
        return [...tree.map(branch=>getParentOfSelectedChild(branch,selected))].find(el=>el)
    }

    const checkChildSelected=(elem)=>{
        let found=false

        const recursion=(elem)=>{
            if(!found){
                if(!elem.children)return false
                elem.children.map(child=>{
                    if(child.id===selected)found=true
                    else if(child.children){
                        recursion(child)
                    }
                })
            }
        }
        recursion(elem)
        return found
    }

    const Element=({data})=>{
        const {id,name,children}=data

        return <div className='tree__branch' 
                    >
            <span 
                onClick={(e)=>handlerClick(e,data)}
                className={children?
                        (selected===id || checkChildSelected(data))?
                        'tree__name parent-style active':
                            'tree__name parent-style':
                            selected===id?
                            'tree__name active':
                            'tree__name'}
                >
                   {children &&  
                        <span 
                        className={(selected===id || checkChildSelected(data))?
                        'tree__arrow active':'tree__arrow'}
                        >
                        </span>}
                    {name}
            </span>
            {children &&
                <span 
                    className={selected===id || checkChildSelected(data)?
                    'tree__children active':
                    'tree__children'}
                >
                    {children.map(elem=>
                        <Element data={elem} key={elem.id}/>)}
                </span>
            }
        </div>
    }

    const handlerTree=(obj)=>{
        return [...obj.map(elem=><Element data={elem} key={elem.id}/>)]
    }

    return (
        <div className='tree'>
            {handlerTree(data)}
        </div>
    )
}

export default connect(
    state=>({
        data:state.tree.tree,
        selected:state.tree.selected
    }),
    dispatch=>({
        actions:bindActionCreators(treeActions,dispatch)
    })
)(Tree)
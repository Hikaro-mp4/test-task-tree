import React, { useState } from 'react'

const Tree = ({data}) => {
    
    const[active,setActive]=useState(null)
    const[select,setSelect]=useState(null)
    
    const handlerClick=(e,id,parentId,children)=>{
        e.stopPropagation()
        setActive(prev=>!children?prev:prev!==id?id:parentId?parentId:null)
        setSelect(!children?id:null)
        
    }

    const checkChildActive=(elem)=>{
        let found=false

        const recursion=(elem)=>{
            if(!found){
                if(!elem.children)return false
                elem.children.map(child=>{
                    if(child.id===active)found=true
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
        const {id,parentId,name,children}=data

        return <div className='tree__branch' 
                    >
            <span 
                onClick={(e)=>handlerClick(e,id,parentId,children)}
                className={children?
                        (active===id || checkChildActive(data))?
                        'tree__name parent-style active':
                            'tree__name parent-style':
                            select===id?
                            'tree__name active':
                            'tree__name'}
                >
                   {children &&  
                        <span 
                        className={(active===id || checkChildActive(data))?
                        'tree__arrow active':'tree__arrow'}
                        >
                        </span>}
                    {name}
            </span>
            {children &&
                <span 
                    className={active===id || checkChildActive(data)?
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

export default Tree
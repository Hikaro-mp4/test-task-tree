
const treeData=()=>{
    return[
        {
            id:1,
            name:'Фаза 1',
            children:[
                {
                    id:2, 
                    name:'Выход 1'
                },
                {
                    id:3,  
                    name:'Выход 2'
                },
                {
                    id:31,      
                    name:'Выход 3'
                },
            ]
        },
        {
            id:4,
            name:'Фаза 1',
            children:[
                {
                    id:5,
                    name:'Фаза 1 1',
                    children:[
                        {
                            id:6,    
                            name:'Выход 1',
                        }
                    ]
                },
                {
                    id:7,
                   
                    name:'Фаза 1 2',
                    children:[
                        {
                            id:8,    
                            name:'Выход 1',
                        },
                        {
                            id:15,
                            name:"Фаза 1 2 1",
                            children:[
                                {
                                    id:17,
                                  
                                    name:'Выход 1 2'
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            id:9,
           
            name:'Датчики окруж. среды',
            children:[
                {
                    id:12, 
                    name:'Датчик твердых частиц',
                },
                {
                    id:13, 
                    name:'Датчик освещенности',
                },
                {
                    id:14,
                    name:'Датчик перепада давления',
                }
            ]
        }
    ]
}

export async function getTreeData(){
    return await JSON.parse(JSON.stringify(treeData()))
}




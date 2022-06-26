
const treeData=()=>{
    return[
        {
            id:1,
            parentId:null,
            name:'Фаза 1',
            children:[
                {
                    id:2,
                    parentId:1,
                    name:'Выход 1'
                },
                {
                    id:3,
                    parentId:1,
                    name:'Выход 2'
                },
                {
                    id:31,
                    parentId:1,
                    name:'Выход 3'
                },

            ]
        },
        {
            id:4,
            parentId:null,
            name:'Фаза 1',
            children:[
                {
                    id:5,
                    parentId:4,
                    name:'Фаза 1 1',
                    children:[
                        {
                            id:6,
                            parentId:5,
                            name:'Выход 1',
                        }
                    ]
                },
                {
                    id:7,
                    parentId:4,
                    name:'Фаза 1 2',
                    children:[
                        {
                            id:8,
                            parentId:7,
                            name:'Выход 1',
                        },
                        {
                            id:15,
                            parentId:7,
                            name:"Фаза 1 2 1",
                            children:[
                                {
                                    id:17,
                                    parentId:15,
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
            parentId:null,
            name:'Датчики окруж. среды',
            children:[
                {
                    id:12,
                    parentId:9,
                    name:'Датчик твердых частиц',
                },
                {
                    id:13,
                    parentId:9,
                    name:'Датчик освещенности',
                },
                {
                    id:14,
                    parentId:9,
                    name:'Датчик перепада давления',
                }
            ]
        }
    ]
}

export async function getTreeData(){
    return await JSON.parse(JSON.stringify(treeData()))
}




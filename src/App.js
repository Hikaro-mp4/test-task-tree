import { useEffect, useState } from "react";
import { getTreeData } from "./Api/treeApi";
import Tree from "./components/Tree";
import './style/style.css'

function App() {

  const [data,setData]=useState([])

  useEffect(()=>{
    getTreeData().then(data=>setData(data))
  },[])

  return (
    <div className="App">
      <Tree data={data}/>
    </div>
  );
}

export default App;

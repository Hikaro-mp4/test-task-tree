import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTreeData } from "./Api/treeApi";
import Tree from "./components/Tree";
import { setTreeAction } from "./store/TreeReducer";
import './style/style.css'

function App() {

  const dispatch=useDispatch()
  const treeData=useSelector(state=>state.tree.tree)

  const setReduxTree=(data)=>{
    dispatch(setTreeAction(data))
  }


  useEffect(()=>{
      getTreeData().then(data=>setReduxTree(data))
  },[])

  return (
    <div className="App">
      <Tree data={treeData}/>
    </div>
  );
}

export default App;

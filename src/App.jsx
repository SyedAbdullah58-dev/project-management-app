import { useState } from "react";
import Input from "./Components/Input";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SideBar from "./Components/SideBar";

function App() {
  const [projectState, setprojectState] = useState({
selectedProjectId:undefined,
projects:[]
  })
let content;
if(projectState.selectedProjectId===null){
  content=<NewProject></NewProject>
}
else if(projectState.selectedProjectId===undefined){
  content=<NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
}
  function handleStartAddProject(){
    setprojectState(prevState=>{return {...prevState,selectedProjectId:null}})
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-10">
<SideBar onStartAddProject={handleStartAddProject}></SideBar>
{content}
</main>
    </>
  );
}

export default App;

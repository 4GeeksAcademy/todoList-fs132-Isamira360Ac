import React,{useEffect, useState} from "react";
import List from "./List";



//create your first component
const Home = () => {
	const [taskList, setTaskList]=useState([]);
	const [showList,setShowList]= useState(false)

useEffect(()=>{
if(taskList.length>0) return setShowList(true)
	return setShowList(false)

},[taskList])


	return (
		<div className="text-center">

			<form List={taskList} updateList={setTaskList}></>
            


		</div>
	);
};

export default Home;
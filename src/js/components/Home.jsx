import React, { useEffect, useState } from "react";
import Formulario from "./Formulario";
import AllToDo from "./AllToDo";



const Home = () => {

	const [nameList, setNameList] = useState([]);
	const [showAllToDo, setShowAllToDo] = useState([false]);



	useEffect(() => {
		if (nameList.length > 0) return setShowAllToDo(true);
		return setShowAllToDo(false)
	}, [nameList]
	)


	return (
		<div className="text-center">

			<Formulario list={nameList} updateList={setNameList} />

			{showAllToDo && <AllToDo task={nameList} updateList={setNameList}/>}

		</div>
	);

}

export default Home;
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

  <div className="row justify-content-center py-3 py-md-5">
    <div className="col-12 col-md-10 col-lg-6">

      <div className="wrapper wrapp-list p-3 p-md-5">

        <Formulario list={nameList} updateList={setNameList} />

        {showAllToDo && (
          <AllToDo task={nameList} updateList={setNameList} />
        )}

      </div>

    </div>
  </div>
//</div>
	);

}

export default Home;
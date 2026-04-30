import { useState} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
const Formulario = ({list, updateList }) => {

    const [toDo, setToDo] = useState('');
 console.log(list)
   

    const handleChange = e => {

        setToDo(e.target.value)
    }

    const handleSubmit = e => {
    e.preventDefault()

    if (toDo.trim() === '') return;

    updateList([...list, toDo])
    setToDo('')
}

    return (

            <div> 

                <h1 className="container">Cosas por hacer</h1>

        <form className="list-group" onSubmit={handleSubmit}>

            <input type="text" value={toDo} onChange={handleChange} />
            <input type="submit" hidden/>
            
        </form>
            </div>


    )
}

export default Formulario;


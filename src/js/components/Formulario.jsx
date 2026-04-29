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
        console.log("evento submit")
        updateList([...list,toDo])
        setToDo('')

    }

    return (

        <form onSubmit={handleSubmit}>

            <input type="text" value={toDo} onChange={handleChange} />
            <input type="submit" hidden/>
        </form>


    )
}

export default Formulario;


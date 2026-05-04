import { useState } from "react";



const Formulario = ({ list, updateList }) => {

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

        <div className="list-group bg-success">

            <h1>ToDos</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    className="form-control list-group-item"
                    value={toDo}
                    onChange={handleChange}
                    placeholder="What do you need to do?"
                />

                <input type="submit" hidden />
                
            </form>
        </div>

    );

}
export default Formulario;


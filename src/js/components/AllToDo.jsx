import { useState } from "react";


const AllToDo = ({ task, updateList }) => {

    const [hoverIndex, setHoverIndex] = useState(null);

    const deleteTask = (index) => {
        const newList = task.filter((_, i) => i !== index);
        updateList(newList);
    }

    return (
        <div className= " ">

        <ul className="list-group">
          
            {task.map((el, i) => (
                <li className="list-group-item d-flex justify-content-between "
                key={i}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                >
                    {el}

                    {hoverIndex === i && (
                        <span className=""
                        onClick={() => deleteTask(i)}
                        style={{ marginLeft: "10px", cursor: "pointer" }}
                        >
                            <i class="fa-solid fa-xmark"></i>
                        </span>

                                           )}
                </li>

                
            ))}
        </ul>

        <p className="text-end counter"> {task.length} Task left </p>
            </div>
    )
}

export default AllToDo;
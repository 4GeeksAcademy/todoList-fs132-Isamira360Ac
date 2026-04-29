import { useState } from "react";

const AllToDo = ({ task, updateList }) => {

    const [hoverIndex, setHoverIndex] = useState(null);

    const deleteTask = (index) => {
        const newList = task.filter((_, i) => i !== index);
        updateList(newList);
    }

    return (
        <ul>
            {task.map((el, i) => (
                <li
                    key={i}
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    {el}

                    {hoverIndex === i && (
                        <span
                            onClick={() => deleteTask(i)}
                            style={{ marginLeft: "10px", cursor: "pointer" }}
                        >
                            ❌
                        </span>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default AllToDo;
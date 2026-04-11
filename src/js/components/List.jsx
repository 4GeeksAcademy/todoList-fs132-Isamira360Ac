const List= ({task})=>{

return(
    <>
            <h2>To Do List</h2>
            <ul>
                {task.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <p> tienes {task.length} nombres actualmente </p>
        </>



)



}

export default List; 

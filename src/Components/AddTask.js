const AddTask = ({taskList, setTaskList, task, setTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if(task.id){
            const date = new Date();
            const updatedTask = taskList.map((toDo)=>(
                toDo.id === task.id ? {id: task.id, name: e.target.task.value, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} : toDo
            ))
            setTaskList(updatedTask)
        }else{
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask])
            // e.target.task.value = ""
        }
        setTask({})
        
    }
    return(
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ''} placeholder="add Task" autoComplete="off" onChange={(e)=>setTask({...task,name:e.target.value})}/>
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}
export default AddTask
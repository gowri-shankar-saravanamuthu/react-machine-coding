import { useState } from 'react';

export default function TodoList() {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    function addTask() {
        debugger;
        if (!task || task.trim() == "") return;
        const todo = {
            id: todoList.length,
            text: task,
            completed: false
        }
        setTodoList(prev => [...prev, todo]);
        setTask("");
    }

    function taskComplete(id) {
        setTodoList(todoList.map(item => {
            if (item.id == id) {
                item.completed = !item.completed;
            }
            return item;
        }));
    }

    function deleteTask(id) {
        setTodoList(todoList.filter(item => item.id != id));
    }

    return (<div>
        <h1>Todo List</h1>
        <div>
            <input type="text" name="todo-input" id="todo-input" placeholder='Enter todo' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
        </div>
        <div>
            {
                todoList.map(item => (
                    <ul>
                        <li style={{ display: "flex", gap: '10px' }}>
                            <input type="checkbox" name="todo-item" id="todo-item" checked={item.completed} onClick={() => taskComplete(item.id)} />
                            <span style={item.completed ? { textDecoration: 'line-through' } : {}}>{item.text}</span>
                            <button onClick={() => deleteTask(item.id)}>Delete</button>
                        </li>
                    </ul>
                ))
            }
        </div>

    </div>);
}
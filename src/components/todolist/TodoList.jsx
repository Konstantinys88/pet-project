"use client";
import TodoItem from '@/components/todolist/TodoItem';

const ToDoList = ({ todos, toggleTodoComplete, removeTodo }) => {
    return (
        <ul>
            {
                todos.map(todo => <TodoItem 
                    key={todo.id} 
                    toggleTodoComplete={toggleTodoComplete}
                    removeTodo={removeTodo}
                    {...todo} />)
            }
        </ul>
    )
}

export default ToDoList;
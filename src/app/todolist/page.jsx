"use client";

import './todolist.scss';
import { useState } from "react";
import ToDoList from '@/components/todolist/TodoList';
import InputField from '@/components/todolist/InputField';


const Todolist = () => {

    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false,
                }
            ]);
            setText('');
        }
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    const toggleTodoComplete = (todoId) => {
        setTodos(todos.map(todo => {
            if (todo.id !== todoId) {
                return todo;
            }
            return {
                ...todo,
                completed: !todo.completed,
            }
        }));
    }

    return (
        <div className='toDoList'>
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={addTodo}
            />
            <ToDoList
                todos={todos}
                toggleTodoComplete={toggleTodoComplete}
                removeTodo={removeTodo}
            />
        </div>
    )
}

export default Todolist;
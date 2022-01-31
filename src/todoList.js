import React, { useEffect, useState } from 'react'
import TodoItem from './todoItem'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [showState, setShowState] = useState({forComplete: false, forActive: false})

    const enterPress = (e) => {
        if (e.key === 'Enter') {
            if(e.target.value.length > 1000) {
                alert('Не больше 1000 символов')
            } else {
                const todo = {
                    text: e.target.value,
                    completed: false
                }
                setTodos([...todos, todo])
                e.target.value = ''
            }
        }
    }

    useEffect(() =>{
        console.log(todos) 
    })

    const editText = (todoId, todoNewText) => {
        setTodos( prevState => {
            const newState = [...prevState]
            newState[todoId].text = todoNewText
            return newState
        })
    }
    
    const deleteTodoItem =  (todoId) => {
        setTodos(todos.filter((todo, i) => i !== todoId))
    }

    const setCompleteTodo = (todoId) => {
        setTodos(
            todos.map((todo, id) =>{
                if (id === todoId) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        )
    }

    const clearTodos = () => {
        setTodos([])
    }

    const showComplete = () => {
        setShowState(() => {
           return {
                forComplete: true,
                forActive: false
            }
        })
    }

    const showActive = () => {
        setShowState(() => {
            return {
                 forComplete: false,
                 forActive: true,
             }
         })
    }

    const showAll = () => {
        setShowState(() => {
            return {
                 forComplete: false,
                 forActive: false,
             }
         }) 
    }

    return (
        <div className="todo-list">
            <h1>TODOS</h1>
            <input className="text-input" onKeyDown={enterPress} placeholder="Введи список своих дел и нажми Enter"/>
            {showState.forComplete ? 
            todos.map((elem, i) => {
                if (elem.completed) {
                    return <TodoItem key={i} id={i} text={elem.text} completed={elem.completed} deleteFn={deleteTodoItem} editTextFn = {editText}  setCompleteTodo={setCompleteTodo}/>
                }
            }) : (showState.forActive) ?
            todos.map((elem, i) => {
                if (!elem.completed) {
                    return <TodoItem key={i} id={i} text={elem.text} completed={elem.completed} deleteFn={deleteTodoItem} editTextFn = {editText}  setCompleteTodo={setCompleteTodo}/>
                }
             }) : 
             todos.map((elem, i) => {
                return <TodoItem key={i} id={i} text={elem.text} completed={elem.completed} deleteFn={deleteTodoItem} editTextFn = {editText}  setCompleteTodo={setCompleteTodo}/>
             })
             }
            <div className="showBtns">
                <button className="showCompleteBtn" onClick={() => showComplete()}>Показать выполненые</button>
                <button className="showActiveBtn" onClick={() => showActive()}>Показать активные</button>
                <button className="showAllBtn" onClick={() => showAll()}>Показать<br/>все</button>
                <button className="clearBtn" onClick={() => clearTodos()}>Очистить список</button>
            </div>
        </div>
    )
}

export default TodoList

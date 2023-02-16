import React, { useRef, useState } from 'react'

function TodoItem({text, completed, deleteFn, id, editTextFn, setCompleteTodo}) {
    const [isVisible, setIsVisible] = useState(false)
    const [textLength, setTextLength] = useState(text.length)

    const inputEl = useRef(null)

    const setVisible = () => {
        setIsVisible(prev => !prev)
    }

    const changeFn = () => {
        if (inputEl.current.value.length > 1000) {
            alert('Не больше 1000 символов')
        } else {
            editTextFn(id, inputEl.current.value)
            setIsVisible(prev => !prev)
        }
    }

    return (
        <>
        {isVisible ? 
            <div className="todo-item-change">
                <input ref = {inputEl} defaultValue={text} autoFocus />
                <button style = {{backgroundColor: '#808080'}} onClick = {() => changeFn()}>Изменить</button>
            </div> :             
            <div className = "todo-item">
                <p style = {completed ? {textDecoration: 'line-through', color: 'grey'}: null}>{text}</p>
                <div className="todo-btns" style = {
                    {
                        ...(textLength > 56 && {flexDirection: 'column'}),
                        ...(textLength < 56 && {flexDirection: 'row'})
                    }
                }>
                    <button style = {{backgroundColor: '#65c888'}} onClick = {() => setCompleteTodo(id)}>Выполнено</button>
                    <button style = {{backgroundColor: '#808080'}} onClick = {() => setVisible()}>Редактировать</button>
                    <button style = {{backgroundColor: '#E25050'}} onClick = {() => deleteFn(id)}>Удалить </button>
                </div>
            </div>       

    }
        </>
    )
}

export default TodoItem

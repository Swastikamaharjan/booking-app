import React from 'react'
import "./todo.css"
import TodoInputBox from '../components/TodoInputBox'
import Todoitem from '../components/Todoitem'

const Todo = () => {
    return (
        <div id='todoPage'>
            <div className="todoPageContainer">
            <h3 className='text-white text-center'>Todo App</h3>
             <TodoInputBox />

<div className="todoContainer">
  <Todoitem/>
  <Todoitem/>
  <Todoitem/>
  <Todoitem/>
</div>
            </div>

        </div>
    )
}

export default Todo
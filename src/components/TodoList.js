import React from 'react';
import TodoListItem from './TodoListItem'
import './todoList.css'

const TodoList = ({todos}) => {
    const elements = todos.map((item,i)=>{

        const { id, ...itemProps} = item

        return(
            <li key={id} className='list-group-item'>
                <TodoListItem {...itemProps} />
            </li>
        )
    });
    console.log(elements)
    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
}


export default TodoList;
import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'

const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id:1},
        {label: 'Eat burger', important: true, id:2},
        {label: 'Go home', important: false, id:3},
    ]

    return(
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    )
}
    

ReactDOM.render(<App />,
    document.getElementById('root'));

